import { createApp } from 'vue'
import App from './App.vue'
import './style'
import { setRoute } from './router';
import Antd from 'ant-design-vue';
import { setupStore } from './store';
// import { setMock } from './mock'
function bootstrap() {
    const app = createApp(App);
    setRoute(app)
    setupStore(app)
    // setMock(app)
    app.use(Antd)
    app.mount('#app')
} bootstrap()
// console.log(import.meta.env);
