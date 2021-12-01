const module = {
  namespaced: true, // 命名空间
  state: {
    routes: [
      // {
      //   name: '菜单1',
      //   path: '',
      // },
      // {
      //   name: '菜单2',
      //   hideMenu: true,
      //   path: '',
      // },
      // {
      //   name: '菜单3',
      //   path: '',
      //   children: [
      //     {
      //       name: '菜单3-1',
      //       path: '',
      //       hideMenu: false
      //     },
      //     {
      //       name: '菜单3-2',
      //       path: '',
      //       hideMenu: true
      //     },
      //     {
      //       name: '菜单3-3',
      //       path: '',
      //     },
      //   ]
      // }
    ],//路由
    menu: [],//菜单
  },
  mutations: {
    setRoutes(state: { routes: [] }, value: []) {
      state.routes = value
    },
    setMenu(state: { menu: [] }, value: []) {
      state.menu = value
    }
  },
  actions: {},
  getters: {}
}
export default module