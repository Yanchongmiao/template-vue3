<template>
  <div>
    <a-menu
      mode="inline"
      theme="dark"
      :inline-collapsed="state.collapsed"
      v-model:openKeys="state.openKeys"
      v-model:selectedKeys="state.selectedKeys"
    >
      <!-- <a-menu-item key="1">
        <template #icon>
          <PieChartOutlined />
        </template>
        <span>菜单 1</span>
      </a-menu-item>
      <a-menu-item key="2">
        <template #icon>
          <DesktopOutlined />
        </template>
        <span>菜单 2</span>
      </a-menu-item>
      <a-menu-item key="3">
        <template #icon>
          <InboxOutlined />
        </template>
        <span>菜单 3</span>
      </a-menu-item>-->
      <template v-for="item in menuData" :key="item.name">
        <itemMenu
          v-if="(!item.children || item.children.length == 0) && (item.hideMenu || item.hideMenu == null)"
          :menuInfo="item"
        />
        <subMenu
          v-if="item.children && item.children.length > 0"
          :itemChildren="item"
          :subKey="item.name"
        />
      </template>
    </a-menu>
  </div>
</template>
<script lang="ts" setup>
import { defineComponent, reactive, ref, toRefs, watch } from 'vue';
import {
  PieChartOutlined,
  MailOutlined,
  DesktopOutlined,
  InboxOutlined,
  AppstoreOutlined,
} from '@ant-design/icons-vue';
import subMenu from './components/subMenu.vue'
import itemMenu from './components/menuItem.vue'
import { routes } from '../../../type'

const state = reactive({
  collapsed: false,
  selectedKeys: ['1'],//默认选择的菜单
  openKeys: [],//默认展开的菜单 节点包含二级或者多级的时候
  preOpenKeys: [],
});
watch(
  () => state.openKeys,
  (val, oldVal) => {
    console.log('oldVal', oldVal);

    state.preOpenKeys = oldVal as [];
  },
);
const toggleCollapsed = () => {
  state.collapsed = !state.collapsed;
  state.openKeys = state.collapsed ? [] : state.preOpenKeys;
};
const menuData = ref(routes)
console.log(routes);
</script>

