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
        name: '登录',
        component: () => import(`@/views/login/user.vue`),
        meta: {
          icon: 'ion:grid-outline',
          title: '登录',
        },
      },
      {
        path: 'phone',
        name: 'phone',
        component: () => import(`@/views/login/phone.vue`),
        meta: {
          icon: 'ion:grid-outline',
          title: '登录',
        },
      }
    ]
  },
  // 刷新路由
  {
    path: '/redirect',
    name: 'redirect',
    component: () => import(`@/layouts/default/RouterView.vue`),
    meta: {
      icon: 'ion:grid-outline',
      title: 'redirect',
    },
    children: [
      {
        path: '/redirect/:path(.*)',
        name: 'redirectPath',
        component: () => import('@/views/system/redirect/index.vue'),
        meta: {
          title: 'redirect',
        },
      },
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