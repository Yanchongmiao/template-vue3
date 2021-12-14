import { useProfileStore } from '@/pinia/use'
import { App } from '@vue/runtime-core'
import { createRouter, createWebHashHistory, createWebHistory, RouteRecordName, RouteRecordRaw } from 'vue-router'
import { createMountOldRoute, createRoutes } from './initRouters'
export const router = createRouter({
    history: createWebHistory(),
    routes: [],
    scrollBehavior: () => ({ left: 0, top: 0 }),
    strict: true,
})
export function setRoute(app: App<Element>) {
    createRoutes()//初始化路由
    createMountOldRoute()//请求信息权限
    app.use(router)
    console.log('%cRouter已启动', 'color:powderblue');
}
router.beforeEach((to, from) => {
    console.log(to, from);
    let user = useProfileStore()
    user.$state.menuActiveIndex = to.path

})
/**
 1 固定一个首页路由 在请求完成后去判断 此路由是否存在 如果不存在 添加一个默认路由 如果存在 不处理  路由地址可动态配置
 2 tab 固定第一位路由首页 不可删除
**/