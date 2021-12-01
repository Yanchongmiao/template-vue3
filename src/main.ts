import { createApp, nextTick, toRaw } from 'vue'
import App from './App.vue'
import './style'
import { setRoute } from './router';
import Antd from 'ant-design-vue';
import { setupStore } from './store';
import { http } from './http';
import { AxiosErrorTip, ContentTypeEnum } from './utils/enum';
import './assets/icons/iconfont.js'
import { store } from './store/index'
import axios from 'axios';
import { uuid } from './utils/utils';

function bootstrap() {
    const app = createApp(App);
    setRoute(app)
    setupStore(app)
    // setMock(app)
    app.use(Antd)
    app.mount('#app')
} bootstrap()
// let time = setTimeout(() => {
//     store.commit('axiosRequest/cancelSingle', { id: id, msg: '自定义取消11' })
//     clearTimeout(time)
// }, 0);

// console.log(store.getters['axiosRequest/getPending']);


