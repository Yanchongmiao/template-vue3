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
    //tab标签数据
    tabs: {
      tagsData: [
        { name: "首页", path: "/system/home" },
      ],
      mapIndex: new Map(),//记录当前tab索引
      activekey: '/system/home',
    }
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
    },//权限数据
    setperData(data: any) {
      this.permissionList = data
    },
    // 删除tabs
    deleteTabs(val: string | number) {
      let i = this.tabs.tagsData.findIndex(i => i.path == val)
      if (this.tabs.tagsData[i].path == this.tabs.activekey) {
        this.tabs.activekey = this.tabs.tagsData[i - 1].path
        router.push(this.tabs.activekey)

      }
      this.tabs.tagsData.splice(i, 1)
    },
    // 关闭全部
    deleteAll() {
      this.tabs.tagsData.splice(1, this.tabs.tagsData.length - 1)
    }
  },
  persist: {
    enabled: true,
    strategies: [
      { storage: sessionStorage, paths: ['userName', 'menuList', 'routerList', 'permissionList', 'addRoutesList', 'menuActiveIndex', 'breadData', 'originalData', 'isFullScreen', 'keepAliveList'] },
    ],
  },
})
