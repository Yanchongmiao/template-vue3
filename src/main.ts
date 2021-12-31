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
import "@/style/n/color.less";
import { skinConfig } from './pinia/skinConfig';
function bootstrap() {
    const app = createApp(App);
    setopPinia(app)
    getFullScreen()
    setupStore(app)
    setRoute(app)
    app.use(Antd)
    app.mount('#app')
    skinConfig().switchTopMenuSkin()
    skinConfig().switchLeftMenuSkin()
} bootstrap()
// document.documentElement.style.setProperty('--header-bg-color', '#ffffff')
// document.documentElement.style.setProperty('--header-bg-hover-color', '#fff')
// document.documentElement.style.setProperty('--header-active-menu-bg-color', '#0960bd')
// document.documentElement.style.setProperty('--sider-dark-bg-color', '#383f45')
// document.documentElement.style.setProperty('--sider-dark-darken-bg-color', '#293036')
// document.documentElement.style.setProperty('--sider-dark-lighten-bg-color', '#444b51')
// document.documentElement.style.setProperty('--header-font-color', 'black')
// document.documentElement.setAttribute('data-theme', 'light')

// document.documentElement.style.setProperty('--header-bg-color', '#ffffff')
// document.documentElement.style.setProperty('--header-bg-hover-color', '#ffffff')
// document.documentElement.style.setProperty('--header-active-menu-bg-color', '#ffffff')
// document.documentElement.style.setProperty('--sider-dark-bg-color', '#383f45')
// document.documentElement.style.setProperty('--sider-dark-darken-bg-color', '#293036')
// document.documentElement.style.setProperty('--sider-dark-lighten-bg-color', '#444b51')
// document.documentElement.style.setProperty('--color', 'rgba(0, 0, 0, 0.85)')
