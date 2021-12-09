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
  redirect?: string;
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
export interface resultType<T = any> {
  code: number,
  data: T,
  message: string,
  success: boolean,
  timestamp?: number

}