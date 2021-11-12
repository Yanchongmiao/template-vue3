import { createApp } from 'vue'
import App from './App.vue'
import { setRoute,router } from './router';
import Antd from 'ant-design-vue';
import './style'
function bootstrap() {
    const app = createApp(App);
    app.use(Antd)
    app.use(router)
    app.mount('#app')
} bootstrap()