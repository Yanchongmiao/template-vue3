import { useProfileStore } from '@/pinia/use'
import { App } from 'Vue'
import { createRouter, createWebHashHistory, createWebHistory, RouteLocationNormalized, RouteRecordName, RouteRecordRaw } from 'vue-router'
import { createMountOldRoute, createRoutes } from './initRouters'
import { NProgressDone, NProgressStart } from '@/utils/NProgress'
import { nextTick } from 'vue'
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
    // setTimeout(() => {
    //     useProfileStore().setOpenMenuKeys()
    // }, 0);
    console.log('%cRouter已启动', 'color:powderblue');
}
router.beforeEach(async (to, from, next) => {
    // 跳转时判断下个路由是否存在tabs中
    let noAddTabs = ['redirectPath', '404']
    if (!noAddTabs.includes(to.name as string)) {
        initTabs(to, from)
    }
    await nextTick(() => {
        document.title = ((to.meta.title || 'App') + ' - Admin') as string
    });
    NProgressStart()
    next()
})
router.afterEach(() => {
    NProgressDone()
})
// 处理tabs
const initTabs = (to: RouteLocationNormalized, from: RouteLocationNormalized) => {
    let user = useProfileStore()
    user.$state.menuActiveIndex = to.path
    // 判断当前tbas是否存在
    let isExistence = user.$state.tabs.tagsData.filter(i => (i.name == to.name && i.path == to.path))
    if (isExistence.length > 0) {
        user.$state.tabs.activekey[0] = isExistence[0].path
        user.$state.tabs.tabsActive = isExistence[0].path
    } else {
        user.$state.tabs.tagsData.push({ name: to.name as string, path: to.path })
        user.$state.tabs.activekey[0] = to.path
        user.$state.tabs.tabsActive = to.path
    }
}
