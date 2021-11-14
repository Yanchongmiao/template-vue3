import { defineComponent } from 'vue';
import { RouteMeta, RouteRecordRaw } from 'vue-router';
export type Component<T = any> =
  | ReturnType<typeof defineComponent>
  | (() => Promise<typeof import('*.vue')>)
  | (() => Promise<T>);

// export interface AppRouteRecordRaw extends Omit<RouteRecordRaw, 'meta'> {
//   name: string;
//   meta: RouteMeta;
//   component?: Component | string;
//   components?: Component;
//   children?: AppRouteRecordRaw[];
//   fullPath?: string;
// }
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
