import { permissions } from '@/api/usersApi'
import { ErrorInfo } from '@/http/type'
import { useProfileStore } from '@/pinia/use'
import { Menu } from '@/type'
import { createErrorModal } from '@/utils/message'
import { DeepCopy, flatTree } from '@/utils/utils'
import { RouteRecordRaw } from 'vue-router'
import { staticRoutes } from './config'
import { router } from './index'
// 初始化路由 由于路由刷新会丢失 这里是获取的旧路由信息进行挂载
export const createMountOldRoute = async () => {
  createRoutes()//初始化路由
  setTimeout(() => {
    getPermiss()
  }, 500);
}
// 接口请求获取路由信息
export const getPermiss = () => {
  permissions({}, {}).then((res) => {
    if (res.success) {
      // 读取历史缓存路由
      let useStore = useProfileStore()
      useStore.$state.originalData = res.data
      // 清空旧路由
      useStore.addRoutesList.forEach((element: Menu) => {
        router.removeRoute(element.name)
      })
      // 后台数据分类
      let routerFilter = []//路由
      let menuFilter = []//菜单
      let perFilter = []//权限
      for (const key of res.data) {
        // menuType 0是路由也是菜单 1 是路由不是菜单 2 按钮
        if (key.meta.menuType === 0) {
          menuFilter.push(key)
          routerFilter.push(DeepCopy(key))
        } else if (key.meta.menuType === 1) {
          routerFilter.push(DeepCopy(key))
        } else if (key.meta.menuType === 2) {
          perFilter.push(key)
        }
      }
      useStore.setRouterData(flatTree(routerFilter))
      useStore.setMenuData(flatTree(menuFilter))
      useStore.setperData(perFilter)
      createRoutes()
      router.replace(router.currentRoute.value.fullPath)
    }
  }, (error: ErrorInfo) => {
    console.log('error', error);
    // createErrorModal({
    //   title: '系统异常',
    //   content: `${error.status}${error.statusText}`,
    // })
  })
}
// 挂载路由
export const createRoutes = () => {
  let useStore = useProfileStore()
  let roInfo = addRo(DeepCopy(useStore.routerData))
  staticRoutes.forEach(i => {
    router.addRoute(i as unknown as RouteRecordRaw)
  })
  let treeMap: Menu[] = []
  roInfo.forEach(i => {
    if (i.children && i.children.length > 0) {
      let childrenHidd = i.children.filter((item: any) => item.meta.menuType == 0)
      if (childrenHidd.length == i.children.length) {
        router.addRoute(i as unknown as RouteRecordRaw)
        treeMap.push(i)
      } else {
        router.addRoute('home', i as unknown as RouteRecordRaw)
      }
    } else {
      router.addRoute('home', i as unknown as RouteRecordRaw)
    }
  })
  // useStore.setTreeList(treeMap)
}
// 挂载前生成路由信息
const addRo = (routeList: Array<{}>) => {
  let list: Array<Menu> = []
  let component: Menu;
  routeList.forEach((item: any) => {
    component = {
      path: item.path,//路由路径
      name: item.name,//路由名称
      redirect: item.redirect,//重定向
      paramPath: item.paramPath,//路由传参
      orderNo: item.orderNo,//排序
      roles: item.roles,//权限
      meta: {
        icon: 'ion:grid-outline',
        title: item.name,
        menuType: item.meta.menuType
      },
      hideMenu: item.hideMenu || false,
      component: RenderComponent(item.component),
    };
    if (item.children && item.children.length > 0) {
      component.children = addRo(item.children)
    }
    list.push(component)
    return component
  })

  return list
}
// 初始化组件
const RenderComponent = (componentName: string) => {
  if (componentName == 'routerView') {
    return () => import(`@/layouts/default/RouterView.vue`)
  } else {
    return () => eval(`import("../views/${componentName}.vue")`)
  }
}