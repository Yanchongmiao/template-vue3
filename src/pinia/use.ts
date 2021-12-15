import { defineStore, acceptHMRUpdate, mapStores } from 'pinia'
import { Menu } from '@/type'
export const useProfileStore = defineStore({
  id: 'useProfileStore',//唯一
  state: () => ({
    userName: 'xxx', // 这里我们定义了一个数据叫userName，用于存放我们的用户名 
    menuList: [],//菜单
    routerList: [],//路由
    permissionList: [],//权限
    addRoutesList: [],//记录动态路由
    openMenu: false,//左侧菜单是否展开
    menuActiveIndex: '',//当前激活menu路由
    breadData: Object,//bread信息
    originalData: [],//原数据
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
  },
  actions: {
    // 平铺转换成结构树后的路由数据
    setRouterData(data: any) {
      this.routerList = data
    },//平铺转换成结构树后的菜单数据
    setMenuData(data: any) {
      this.menuList = data
    },//权限
    setperData(data: any) {
      this.permissionList = data
    },
    //记录当前的动态路由
    // setTreeList(data: any) {
    //   this.addRoutesList = data
    // }
  },
  persist: {
    enabled: true,
  },
})
