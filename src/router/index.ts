import { App } from '@vue/runtime-core'
import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '', redirect: to => '/login', },  // 重定向到主页
        {
            path: '/login',
            name: 'login',
            // redirect: '/login',
            component: () => import('../layouts/default/RouterView.vue'),
            meta: {
                icon: 'ion:grid-outline',
                title: '登录',
            },
        },
        {
            path: '/404',
            name: '404',
            // redirect: '/login',
            component: () => import('../views//error/404.vue'),
            meta: {
                icon: 'ion:grid-outline',
                title: '404',
            },
        },
        //404页面
        {
            path: '/:pathMatch(.*)*',
            component: () => import("../views//error/404.vue"),
            redirect: '/404'
        },
    ],
    scrollBehavior: () => ({ left: 0, top: 0 }),
    strict: true,

})
export function setRoute(app: App<Element>) {
    app.use(router)
    console.log('%cRouter已启动', 'color:powderblue');
}
// vuex-persistedstate 数据丢失