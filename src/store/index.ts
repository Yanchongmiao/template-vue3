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
console.log(modules);
const store = createStore({
  state: {
    tit: '11'
  },
  mutations: {
    mt() {
      console.log('mt方法，全局模块里的mutations方法');
    }
  },
  actions: {
    t() {
      console.log('t方法，全局里的actions方法');
    }
  },
  getters: {
    get() {
      console.log('全get');
    }
  },
  modules: modules
})
export const setupStore = (app: App<Element>) => {
  console.log('%cVuex已启动', 'color:powderblue');
  app.use(store)
}
console.log(store);
