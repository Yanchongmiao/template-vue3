import { createApp } from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue';
import './assets/icons/iconfont.js'
import './style'
import 'ant-design-vue/dist/antd.css';
import 'virtual:windi.css'
import 'virtual:windi-devtools'
import { setRoute } from './router';
import { setupStore } from './store';
import { setopPinia } from './pinia';
import { getFullScreen } from './utils/utils';
function bootstrap() {
    const app = createApp(App);
    setopPinia(app)
    getFullScreen()
    setupStore(app)
    setRoute(app)
    app.use(Antd)
    app.mount('#app')
} bootstrap()


document.documentElement.setAttribute('data-theme', 'light')

