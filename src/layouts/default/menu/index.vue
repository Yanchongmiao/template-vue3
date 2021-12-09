<template>
  <div>
    <a-menu
      mode="inline"
      theme="dark"
      :inline-collapsed="state.collapsed"
      v-model:openKeys="state.openKeys"
      v-model:selectedKeys="state.selectedKeys"
      @select="clickMenu"
      @openChange="menuOpen"
    >
      <template v-for="item in menuData" :key="item.path">
        <itemMenu
          v-if="(!item.children || item.children.length == 0) && (item.hideMenu || item.hideMenu == null)"
          :menuInfo="item"
        />
        <subMenu
          v-if="item.children && item.children.length > 0"
          :itemChildren="item"
          :subKey="item.path"
        />
      </template>
    </a-menu>
  </div>
</template>
<script lang="ts" setup>
import { defineComponent, reactive, ref, toRefs, watch } from 'vue';
import { MenuItem } from 'ant-design-vue'
import {
  PieChartOutlined,
  MailOutlined,
  DesktopOutlined,
  InboxOutlined,
  AppstoreOutlined,
} from '@ant-design/icons-vue';
import subMenu from './components/subMenu.vue'
import itemMenu from './components/menuItem.vue'
import { useProfileStore } from '@/pinia/use';
import { useRoute, useRouter } from 'vue-router';
import { router } from '@/router';

const state = reactive({
  collapsed: false,
  selectedKeys: [''],//默认选择的菜单 '/cd'
  openKeys: [''],//默认展开的菜单 节点包含二级或者多级的时候 '/cd1', '/t11'
});
const clickMenu = (item: any) => {
  router.push(item.keyPath.join('/'))
}
const menuOpen = (openKeys: string[]) => {
  state.openKeys = [openKeys[openKeys.length - 1]] as never
  // console.log(state.selectedKeys, state.openKeys);

}
// watch(
//   () => state.openKeys,
//   (val, oldVal) => {
//     console.log('val', val, state.openKeys);
//     state.preOpenKeys = val;
//     state.openKeys = val;
//   },
// );
// const menuData = ref(routes)
let useMenu = useProfileStore()
const menuData = ref(useMenu.menuData)

// console.log('路由', routes);
</script>

