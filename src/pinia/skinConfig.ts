import { Color, headerColor, menuColor } from "@/layouts/default/header/rightFun/settings/components/data";
import { defineStore } from "pinia";

export const skinConfig = defineStore({
  id: 'skinConfig',
  state: () => ({
    topMenu: '',//顶部菜单颜色
    leftMenu: '',//左侧菜单颜色

  }),
  getters: {

  },
  actions: {
    // 初始化header样式
    switchTopMenuSkin() {
      let styleObj: any = headerColor.filter(i => i["--header-bg-color"] == (this.topMenu || headerColor[0]['--header-bg-color']))[0]
      for (const key in styleObj) {
        styleObj['--header-font-color'] = styleObj['--header-font-color'] ? styleObj['--header-font-color'] : '#fff'
        document.documentElement.style.setProperty(key, styleObj[key])
      }
    },
    switchLeftMenuSkin() {
      let styleObj: any = menuColor.filter(i => i['--sider-bg-color'] == (this.leftMenu || menuColor[0]['--sider-bg-color']))[0]
      console.log(menuColor, this.leftMenu);
      for (const key in styleObj) {
        console.log(key);
        styleObj['--sider-bg-color'] = styleObj['--sider-bg-color'] ? styleObj['--sider-bg-color'] : '#fff'
        document.documentElement.style.setProperty(key, styleObj[key])
      }
    },
    setSkin(name: string, styleColor: Color) {
      if (name == 'topMenu') {
        this.topMenu = styleColor['--header-bg-color'] as string
        this.switchTopMenuSkin()
      } else if (name == 'leftMenu') {
        this.leftMenu = styleColor['--sider-bg-color'] as string
        this.switchLeftMenuSkin()
      }
    }
  },
  // persist: {
  //   enabled: true
  // }
})