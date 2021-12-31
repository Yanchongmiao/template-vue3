// 系统颜色
export const systemColor = ['9, 96, 189', '0, 132, 244', '0, 150, 136', '83, 109, 254', '255, 92, 147', '238, 79, 18', '0, 150, 199', '156, 39, 176', '255, 152, 0']
// 顶部菜单颜色
export const headerColor: Array<Color> = [
  // '255, 255, 255', '21, 21, 21', '0, 150, 136', '81, 114, 220', '1, 143, 251', '64, 158, 255', '231, 76, 60', '36, 41, 46', '57, 70, 100', '0, 21, 41', '56, 63, 69'
  {
    '--header-bg-color': '#ffffff',
    '--header-bg-hover-color': '#ffffff',
    '--header-active-menu-bg-color': '#0960bd',
    '--header-font-color': 'black',
  }, {
    '--header-bg-color': '#151515',
    '--header-bg-hover-color': '#242424',
    '--header-active-menu-bg-color': '#0960bd',
    '--header-font-color': '',
  }, {
    '--header-bg-color': '#009688',
    '--header-bg-hover-color': '#0fa597',
    '--header-active-menu-bg-color': '#0960bd',
    '--header-font-color': '',
  }, {
    '--header-bg-color': '#5172DC',
    '--header-bg-hover-color': '#6081eb',
    '--header-active-menu-bg-color': '#0960bd',
    '--header-font-color': '',
  }, {
    '--header-bg-color': '#018ffb',
    '--header-bg-hover-color': '#109eff',
    '--header-active-menu-bg-color': '#0960bd',
    '--header-font-color': '',
  }, {
    '--header-bg-color': '#409eff',
    '--header-bg-hover-color': '#4fadff',
    '--header-active-menu-bg-color': '#0960bd',
    '--header-font-color': '',
  }, {
    '--header-bg-color': '#e74c3c',
    '--header-bg-hover-color': '#f65b4b',
    '--header-active-menu-bg-color': '#0960bd',
    '--header-font-color': '',
  }, {
    '--header-bg-color': '#24292e',
    '--header-bg-hover-color': '#33383d',
    '--header-active-menu-bg-color': '#0960bd',
    '--header-font-color': '',
  }, {
    '--header-bg-color': '#394664',
    '--header-bg-hover-color': '#485573',
    '--header-active-menu-bg-color': '#0960bd',
    '--header-font-color': '',
  }, {
    '--header-bg-color': '#001529',
    '--header-bg-hover-color': '#0f2438',
    '--header-active-menu-bg-color': '#0960bd',
    '--header-font-color': '',
  }, {
    '--header-bg-color': '#383f45',
    '--header-bg-hover-color': '#474e54',
    '--header-active-menu-bg-color': '#0960bd',
    '--header-font-color': '',
  },
]
// 菜单颜色
export const menuColor = [
  {
    '--sider-bg-color': '#28333E',
    '--sider-active-menu-bg-color': '#0fa597',
    '--sider-font-color': '#fff',
    '--sider-dark-lighten-bg-color': '#343f4a'
  },
  {
    '--sider-bg-color': 'red',
    '--sider-active-menu-bg-color': '#414a52',
    '--sider-font-color': '#fff',
    '--sider-dark-lighten-bg-color': '#343f4a'
  },
]
// 页面功能
export const pageFun: Array<FunSwitch> = [
  {
    name: '分割菜单',
    type: 'switch',
    data: true,
    disabled: true,
  },
  {
    name: '固定展开菜单',
    type: 'switch',
    data: false,
    disabled: false,
  },
  {
    name: '切换页面关闭菜单',
    type: 'switch',
    data: false,
    disabled: false,
  },
  {
    name: '折叠菜单',
    type: 'switch',
    data: false,
    disabled: false,
  },
  {
    name: '侧边菜单拖拽',
    type: 'switch',
    data: false,
    disabled: false,
  },
  {
    name: '菜单搜索',
    type: 'switch',
    data: false,
    disabled: false,
  },
  {
    name: '侧边菜单手风琴模式',
    type: 'switch',
    data: false,
    disabled: false,
  },
  {
    name: '折叠菜单显示名称',
    type: 'switch',
    data: false,
    disabled: false,
  },
  {
    name: '固定header',
    type: 'switch',
    data: false,
    disabled: false,
  },
  {
    name: '固定Sidebar',
    type: 'switch',
    data: false,
    disabled: false,
  },
  {
    name: '混合菜单触发方式',
    type: 'select',
    data: 'click',
    list: [{ value: 'click', label: '点击' }]
  },
  {
    name: '顶部菜单布局',
    type: 'select',
    data: 'center',
    list: [{ value: 'left', label: '左侧' }, { value: 'center', label: '居中' }, { value: 'right', label: '右侧' }]
  },
  {
    name: '菜单折叠按钮',
    type: 'select',
    data: 'top',
    list: [{ value: 'no', label: '不显示' }, { value: 'bottom', label: '底部' }, { value: 'top', label: '顶部' },]
  },
  {
    name: '内容区域宽度',
    type: 'select',
    data: 'ls',
    list: [{ value: 'ls', label: '流式' }, { value: 'dk', label: '定宽' }]
  },
  {
    name: '自动锁屏',
    type: 'input-number',
    data: 'minute',
    suffix: '分钟',
    min: 0,
    max: 24 * 60,
    initSuffix: true,
    initName: '0(不自动锁屏)',
  },
  {
    name: '菜单展开宽度',
    type: 'input-number',
    data: 'width',
    step: 10,
    suffix: 'px',
    min: 80,
    max: 500,
  }
]
// 页面配置
export const pageView: Array<FunSwitch> = [
  {
    name: '面包屑',
    type: 'switch',
    data: true,
    disabled: true,
  },
  {
    name: '面包屑图标',
    type: 'switch',
    data: false,
    disabled: false,
  }, {
    name: '标签页',
    type: 'switch',
    data: false,
    disabled: false,
  }, {
    name: '标签页刷新按钮',
    type: 'switch',
    data: false,
    disabled: false,
  }, {
    name: '标签页快捷按钮',
    type: 'switch',
    data: false,
    disabled: false,
  }, {
    name: '标签页折叠按钮',
    type: 'switch',
    data: false,
    disabled: false,
  }, {
    name: '左侧菜单',
    type: 'switch',
    data: false,
    disabled: false,
  }, {
    name: '顶栏',
    type: 'switch',
    data: false,
    disabled: false,
  }, {
    name: 'Logo',
    type: 'switch',
    data: false,
    disabled: false,
  }, {
    name: '页脚',
    type: 'switch',
    data: false,
    disabled: false,
  }, {
    name: '全屏内容',
    type: 'switch',
    data: false,
    disabled: false,
  }, {
    name: '灰色模式',
    type: 'switch',
    data: false,
    disabled: false,
  }, {
    name: '色弱模式',
    type: 'switch',
    data: false,
    disabled: false,
  },
]
// 动画配置
export const pageAnimation: Array<FunSwitch> = [
  {
    name: '灰色模顶部进度条式',
    type: 'switch',
    data: false,
    disabled: false,
  }, {
    name: '切换loading',
    type: 'switch',
    data: false,
    disabled: false,
  }, {
    name: '切换动画',
    type: 'switch',
    data: false,
    disabled: false,
  }, {
    name: '动画类型',
    type: 'select',
    data: 'fade-slide',
    disabled: false,
    list: [
      { label: 'fade-slide', value: 'fade-slide' },
      { label: 'animate__backOutUp', value: 'animate__backOutUp' }
    ]
  },
]
// 菜单模式
export const navView = [
  {
    name: '左侧菜单模式',
    index: 1,

  },
  {
    name: '顶部菜单混合模式',
    index: 2,

  },
  {
    name: '顶部菜单模式',
    index: 3,

  },
  // {
  //   name: '左侧菜单混合模式',
  //   index: 4,

  // },
]
export interface Color {
  '--header-bg-color'?: string,
  '--header-bg-hover-color'?: string,
  '--header-active-menu-bg-color'?: string,
  '--header-font-color'?: string,
  '--sider-bg-color'?: string,
  '--sider-active-menu-bg-color'?: string,
  '--sider-font-color'?: string,
  '--sider-dark-lighten-bg-color'?: string,
}
export interface FunSwitch {
  name: string,
  data?: string | boolean | number,
  type: string,
  disabled?: boolean,
  suffix?: string,
  step?: number,
  min?: number,
  max?: number,
  initSuffix?: boolean,
  initName?: string,
  list?: Array<{
    label: string | number,
    value: string | number,
  }>
}