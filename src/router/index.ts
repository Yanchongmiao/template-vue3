import { useProfileStore } from '@/pinia/use'
import { App } from '@vue/runtime-core'
import { nextTick } from 'vue'
import { createRouter, createWebHashHistory, createWebHistory, RouteLocationNormalized, RouteRecordName, RouteRecordRaw } from 'vue-router'
import { createMountOldRoute, createRoutes } from './initRouters'
export const router = createRouter({
    history: createWebHistory(),
    routes: [],
    scrollBehavior: () => ({ left: 0, top: 0 }),
    strict: true,
})
export async function setRoute(this: any, app: App<Element>) {
    createRoutes()//初始化路由
    createMountOldRoute()//请求信息权限
    app.use(router)
    console.log('%cRouter已启动', 'color:powderblue');
}
router.beforeEach((to, from) => {
    // 跳转时判断下个路由是否存在tabs中
    let noAddTabs = ['redirectPath', '404']
    if (!noAddTabs.includes(to.name as string)) {
        initTabs(to, from)
    }
})
// 处理tabs
const initTabs = (to: RouteLocationNormalized, from: RouteLocationNormalized) => {
    let user = useProfileStore()
    user.$state.menuActiveIndex = to.path
    let isExistence = user.$state.tabs.tagsData.filter(i => (i.name == to.name && i.path == to.path))
    if (isExistence.length > 0) {
        user.$state.tabs.activekey = isExistence[0].path
    } else {
        user.$state.tabs.tagsData.push({ name: to.name as string, path: to.path })
        user.$state.tabs.activekey = to.path
    }
}
