import { defineComponent } from 'vue';
import { RouteMeta, RouteRecordRaw } from 'vue-router';
export type Component<T = any> =
  | ReturnType<typeof defineComponent>
  | (() => Promise<typeof import('*.vue')>)
  | (() => Promise<T>);
export interface Menu {
  name: string;
  path: string;
  icon?: string;
  paramPath?: string;
  disabled?: boolean;
  children?: Menu[];
  orderNo?: number;
  roles?: [];
  meta?: Partial<RouteMeta>;
  hideMenu?: boolean;
  component?: Component | string;
  components?: Component;
}
export let routes: Menu[] = [
  {
    name: '菜单1',
    path: '',
  },
  {
    name: '菜单2',
    hideMenu: true,
    path: '',
  },
  {
    name: '菜单3',
    path: '',
    children: [
      {
        name: '菜单3-1',
        path: '',
        hideMenu: false
      },
      {
        name: '菜单3-2',
        path: '',
        hideMenu: true
      },
      {
        name: '菜单3-3',
        path: '',
      },
    ]
  }
]
// 错误消息 msg类型
export interface MsgOptions {
  title: string,
  content: string,
  iconClass?: string
  time?: number,
  color?: string
  key?: string,
  position?: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight'
}
// 错误消息 modal类型
export interface MsgModalOptions {
  title: string,
  content: string,
  iconClass?: string,//状态icon
  ok?: Function,
  mask?: boolean,//是否展示遮罩 
  maskClosable?: boolean,//点击蒙层是否允许关闭
  keyboard?: boolean,// esc 关闭
  okText?: string
}