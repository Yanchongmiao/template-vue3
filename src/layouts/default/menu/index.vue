<template>
  <div>
    <el-menu
      active-text-color="#fff"
      background-color="#001529"
      default-active="2"
      text-color="#ffffffa6"
      :unique-opened="true"
      :collapse="useMenu.$state.openMenu"
      :collapse-transition="false"
      router
    >
      <template v-for="item in useMenu.menuData" :key="item.path">
        <itemMenu
          v-if="(!item.children || item.children.length == 0) && (item.hideMenu || item.hideMenu == null)"
          :menuInfo="item"
          :name="item.name"
          :path="item.path"
        />
        <subMenu
          v-if="item.children && item.children.length > 0"
          :itemChildren="item"
          :subKey="item.path || '11'"
        />
      </template>
    </el-menu>
  </div>
</template>
<script lang="ts" setup>
// import { ElMenu } from 'element-plus'
import { defineComponent, reactive, ref, toRefs, watch } from 'vue';
import subMenu from './components/subMenu.vue'
import itemMenu from './components/menuItem.vue'
import { useProfileStore } from '@/pinia/use';
import { router } from '@/router';
const state = reactive({
  collapsed: false,
  selectedKeys: [],//默认选择的菜单 '/cd'
  openKeys: ['t11'],//默认展开的菜单 节点包含二级或者多级的时候 '/cd1', '/t11'
});
const clickMenu = (item: any) => {
  router.push(item.keyPath.join('/'))
}
const menuOpen = (openKeys: string[]) => {
  console.log(state.selectedKeys);
  // state.openKeys = [openKeys[openKeys.length - 1]] as never
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
// const menuData = reactive(useMenu.menuData)

// console.log('路由', routes);
</script>

<style lang="less">
.el-menu {
  width: 100% !important;
  border: none;
}
</style>