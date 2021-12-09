import { createPinia } from "pinia"
import { App } from "vue"

export const setopPinia = (app: App<Element>) => {
  console.log('%cPinia已开启', 'color:powderblue');
  app.use(createPinia())

}