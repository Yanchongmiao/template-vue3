import { createApp } from 'vue'
import App from './App.vue'
import './style'
import { setRoute } from './router';
import Antd from 'ant-design-vue';
import { setupStore } from './store';
function bootstrap() {
    const app = createApp(App);
    setRoute(app)
    setupStore(app)
    app.use(Antd)
    app.mount('#app')
} bootstrap()