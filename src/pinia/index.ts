import { axiosRequestStore } from "./axiosRequest";
import { createPinia } from "pinia"
import { App } from "vue"
import piniaPersist from 'pinia-plugin-persist'
export const setopPinia = async (app: App<Element>) => {
  console.log('%cPinia已开启', 'color:powderblue');
  app.use(createPinia().use(piniaPersist))
}