import type { App } from 'vue'
import { createStore } from 'vuex'
import us from './modules/user'
const files = import.meta.globEager("./modules/*.ts")
import VuexPersist from 'vuex-persist'
const modules: any = {};
for (const key in files) {
  if (Object.prototype.hasOwnProperty.call(files, key)) {
    modules[key.replace(/(\.\/|\.ts)/g, '').replace('modules/', '')] = files[key].default
  }
}
const vuexLS = new VuexPersist({ storage: window.sessionStorage, key: 'vuexStore' })
export const store = createStore({
  state: {},
  mutations: {},
  actions: {},
  getters: {},
  modules: modules,
  plugins: [vuexLS.plugin]
})
export const setupStore = (app: App<Element>) => {
  console.log('%cVuex已开启', 'color:powderblue');
  app.use(store)
}
