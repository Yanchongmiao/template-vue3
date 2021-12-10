import { createApp, nextTick, toRaw } from 'vue'
import App from './App.vue'
import './style'
import { setRoute } from './router';
import Antd from 'ant-design-vue';
import { setupStore } from './store';
import './assets/icons/iconfont.js'
import { setopPinia } from './pinia';
import 'element-plus/dist/index.css'
function bootstrap() {
    const app = createApp(App);
    setopPinia(app)
    setupStore(app)
    setRoute(app)
    app.use(Antd)
    app.mount('#app')
} bootstrap()




