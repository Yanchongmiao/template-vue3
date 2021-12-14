import { defineStore, acceptHMRUpdate, mapStores } from 'pinia'
import { Menu } from '@/type'
export const useProfileStore = defineStore({
  id: 'useProfileStore',//唯一
  state: () => ({
    count: 2,
    userName: 'xxx', // 这里我们定义了一个数据叫userName，用于存放我们的用户名 
    menuList: [],//菜单
    routerList: [],//路由
    permissionList: [],//权限
    addRoutesList: [],//记录动态路由
    openMenu: false,
    menuActiveIndex: ''//当前激活menu路由
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
    ac() {
      this.count = ++this.count
    },
    // 
    setRouterData(data: any) {
      this.routerList = data
    },
    setMenuData(data: any) {
      this.menuList = data
    },
    setperData(data: any) {
      this.permissionList = data
    },
    setTreeList(data: any) {
      this.addRoutesList = data
    }
  },
  persist: {
    enabled: true,
  },
})
