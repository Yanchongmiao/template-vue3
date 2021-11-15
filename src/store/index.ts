import type { App } from 'vue'
import { createStore } from 'vuex'
import us from './modules/user'
const files = import.meta.globEager("./modules/*.ts")
const modules: any = {};
for (const key in files) {
  if (Object.prototype.hasOwnProperty.call(files, key)) {
    modules[key.replace(/(\.\/|\.ts)/g, '').replace('modules/', '')] = files[key].default
  }
}
const store = createStore({
  state: {
    tit: '11'
  },
  mutations: {},
  actions: {},
  getters: {},
  modules: modules
})
export const setupStore = (app: App<Element>) => {
  console.log('%cVuex已启动', 'color:powderblue');
  app.use(store)
}
