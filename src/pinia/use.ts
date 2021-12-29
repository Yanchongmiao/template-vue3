import { defineStore, acceptHMRUpdate, mapStores } from 'pinia'
import { Menu } from '@/type'
import { router } from '@/router/index'
export const useProfileStore = defineStore({
  id: 'useProfileStore',//唯一
  state: () => ({
    menuList: [],//菜单
    routerList: [],//路由
    permissionList: [],//权限
    addRoutesList: [],//记录动态路由
    openMenu: false,//左侧菜单是否展开
    menuActiveIndex: '',//当前激活menu路由
    breadData: Object,//bread信息
    originalData: [],//原数据
    isFullScreen: false,//是否全屏
    keepAliveList: [],
    menuOpenKeys: [],//打开节点记录
    //tab标签数据
    tabs: {
      tagsData: [
        { name: "首页", path: "/system/home" },
      ],
      activekey: ['/system/home'],//打开的标签 menu openkeys使用的是数组 tabs激活使用的是字符串 这里分开处理 真的好想吐槽一下antd的 menu ....................
      tabsActive: '/system/home',
    },
    navMode: 1,
  }),
  getters: {
    // 获取菜单
    menuData(state: { menuList: Array<Menu> }) {
      return state.menuList
    },
    // 获取路由
    routerData(state: { routerList: Array<Menu> }) {
      return state.routerList
    },
    setTabsActive(state: { tabs: any }) {
      // state.tabs.tabsActive = state.tabs.activekey[0]
      // return state.tabs.activekey
    }
  },
  actions: {
    // 平铺转换成结构树后的路由数据
    setRouterData(data: any) {
      this.routerList = data
    },//平铺转换成结构树后的菜单数据
    setMenuData(data: any) {
      this.menuList = data
    },//权限数据
    setperData(data: any) {
      this.permissionList = data
    },
    // 删除tabs
    deleteTabs(val: string | number) {
      let i = this.tabs.tagsData.findIndex(i => i.path == val)
      if (this.tabs.tagsData[i].path == this.tabs.activekey[0]) {
        this.tabs.activekey = [this.tabs.tagsData[i - 1].path]
        router.push(this.tabs.activekey[0])
      }
      this.tabs.tagsData.splice(i, 1)
    },
    // 关闭全部
    deleteAll() {
      this.tabs.tagsData.splice(1, this.tabs.tagsData.length - 1)
    },
    //获取当前打开菜单记录
    setOpenMenuKeys() {
      let arr: Array<string> = [];
      let item: { path: string, parentId: string | number, id: string } = this.originalData.filter((i: { path: string }) => i.path == this.tabs.activekey[0])[0]
      arr.push(item.path)
      // 递归向上查找
      const findParentNodePath = (item: { path: string, parentId: string | number, id: string }) => {
        if (item.parentId !== '0') {
          let i: { path: string, parentId: string | number, id: string } = useProfileStore().$state.originalData.filter((i: { path: string, parentId: string | number, id: string }) => i.id == item.parentId)[0]
          arr.unshift(i.path)
          findParentNodePath(i)
        }
      }
      findParentNodePath(item)

      this.menuOpenKeys = arr as never[]
    }
  },
  persist: {
    enabled: true,
    strategies: [
      { storage: sessionStorage, paths: ['userName', 'menuList', 'routerList', 'permissionList', 'addRoutesList', 'openMenu', 'menuActiveIndex', 'breadData', 'originalData', 'isFullScreen', 'keepAliveList', 'navMode',] },
    ],
  },
})
