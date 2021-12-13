/**
 * 静态路由
**/
export const staticRoutes = [
  {
    path: '/',
    redirect: '/system/menu',
    name: 'render'
  },
  // 重定向到主页
  {
    path: "",
    name: "home",
    redirect: '/system/menu',
    component: () => import(`@/layouts/default/RouterView.vue`),
  },
  {
    path: '/login',
    name: 'login',
    redirect: '/login/userName',
    component: () => import(`@/views/login/index.vue`),
    meta: {
      icon: 'ion:grid-outline',
      title: 'login',
    },
    children: [
      {
        path: 'userName',
        name: 'userName',
        component: () => import(`@/views/login/user.vue`),
        meta: {
          icon: 'ion:grid-outline',
          title: 'userName',
        },
      },
      {
        path: 'phone',
        name: 'phone',
        component: () => import(`@/views/login/phone.vue`),
        meta: {
          icon: 'ion:grid-outline',
          title: 'phone',
        },
      }
    ]
  },
  {
    path: '/404',
    name: '404',
    component: () => import(`@/views/error/404.vue`),
    meta: {
      icon: 'ion:grid-outline',
      title: '404',
    },
  },
  //404页面
  {
    path: '/:pathMatch(.*)*',
    component: () => import(`@/views//error/404.vue`),
    redirect: '/404',
    name: 'Match'
  },
]