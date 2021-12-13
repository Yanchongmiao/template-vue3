import { createApp, nextTick, toRaw } from 'vue'
import App from './App.vue'
import './style'
import { setRoute } from './router';
import { setupStore } from './store';
import './assets/icons/iconfont.js'
import { setopPinia } from './pinia';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
function bootstrap() {
    const app = createApp(App);
    setopPinia(app)
    setupStore(app)
    setRoute(app)
    app.use(Antd)
    app.mount('#app')
} bootstrap()




