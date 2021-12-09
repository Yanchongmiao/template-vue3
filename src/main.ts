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
import { createPinia, Pinia } from 'pinia' // 从pinia中导入createPinia方法
import { setopPinia } from './pinia';
import { axiosRequestStore } from './pinia/axiosRequest';
import { useProfileStore } from './pinia/use';
function bootstrap() {
    const app = createApp(App);
    setopPinia(app)
    setupStore(app)
    setRoute(app)
    app.use(Antd)
    app.mount('#app')
} bootstrap()




