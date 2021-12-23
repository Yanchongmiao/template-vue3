interface Tabs {
  name: string,
  icon: string
}
export enum TabsEmnu {
  refresh = '刷新加载',
  closeTab = '关闭标签页',
  clostLeft = '关闭左侧标签页',
  closeRight = '关闭右侧标签页',
  closeOther = '关闭其他标签页',
  closeAll = '关闭全部标签页'
}
export const tabsList: Array<Tabs> = [
  {
    name: TabsEmnu.refresh,
    icon: '#yc-icon-shuaxin',

  },
  {
    name: TabsEmnu.closeTab,
    icon: '#yc-icon-guanbi',
  },
  {
    name: TabsEmnu.clostLeft,
    icon: '#yc-icon-zuoce',
  },
  {
    name: TabsEmnu.closeRight,
    icon: '#yc-icon-youce',
  },
  {
    name: TabsEmnu.closeOther,
    icon: '#yc-icon-qitacaidan',
  },
  {
    name: TabsEmnu.closeAll,
    icon: '#yc-icon-quanbu',
  }
]