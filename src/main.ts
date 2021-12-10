import { createApp, nextTick, toRaw } from 'vue'
import App from './App.vue'
import './style'
import { setRoute } from './router';
import Antd from 'ant-design-vue';
import { setupStore } from './store';
import './assets/icons/iconfont.js'
import { setopPinia } from './pinia';
// import 'element-plus/lib/theme-chalk/index.css'
import 'element-plus/dist/index.css'
import { ElButton, ElMessage, ElMenu, ElRow, ElCol, ElIcon } from 'element-plus'
function bootstrap() {
    const app = createApp(App);
    app.use(ElButton)
    app.use(ElIcon)
    app.use(ElMessage)
    app.use(ElMenu)
    app.use(ElRow)
    app.use(ElCol)
    setopPinia(app)
    setupStore(app)
    setRoute(app)
    app.use(Antd)
    app.mount('#app')
} bootstrap()




