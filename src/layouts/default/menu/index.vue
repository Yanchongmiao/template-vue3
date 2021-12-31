<template>
  <div class="menuBox">
    <a-menu
      v-model:selectedKeys="useMenu.tabs.activekey"
      mode="inline"
      class="leftMenu"
      theme="dark"
      :open-keys="useMenu.menuOpenKeys"
      @openChange="onOpenChange"
      @click="menuItemPush"
    >
      <template v-for="item in useMenu.menuData" :key="item.path">
        <itemMenu
          v-if="(!item.children || item.children.length == 0) && (item.hideMenu || item.hideMenu == null)"
          :name="item.name"
          :path="item.path"
          :icon="(item.meta?.icon as string)"
        />
        <SubMenu
          v-if="item.children && item.children.length > 0"
          :itemChildren="item"
          :subKey="item.path"
          :icon="(item.meta?.icon as string)"
        />
      </template>
    </a-menu>
  </div>
</template>
<script lang="ts" setup>
import { defineComponent, effect, reactive, ref, toRefs, watch } from 'vue';
import SubMenu from './components/subMenu.vue'
import itemMenu from './components/menuItem.vue'
import { useProfileStore } from '@/pinia/use';
import { Menu } from '@/type';
import { DeepCopy } from '@/utils/utils';
import { useRouter } from 'vue-router';
let useMenu = useProfileStore()
const router = useRouter()
const openState = ref(useMenu.openMenu)
effect(() => {
  openState.value = useMenu.openMenu
})
if (!useMenu.openMenu) {
  let t = setTimeout(() => {
    useMenu.setOpenMenuKeys()
    clearTimeout(t)
  }, 0);
}
watch(openState, (o, l) => {
  if (!o && useMenu.menuOpenKeys.length == 0) useMenu.setOpenMenuKeys()
})
const state: State = reactive({
  rootSubmenuKeys: [],//一级节点path
});
const menuList: Array<Menu> = useMenu.menuList
for (let index = 0; index < menuList.length; index++) {
  state.rootSubmenuKeys.push(menuList[index].path)
}
const onOpenChange = (openKeys: string[]) => {
  console.log(openKeys);

  const latestOpenKey = openKeys.find(key => useMenu.menuOpenKeys.indexOf(key as never) === -1);
  if (state.rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
    useMenu.menuOpenKeys = openKeys as never[];
  } else {
    useMenu.menuOpenKeys = latestOpenKey ? [latestOpenKey] as never[] : [] as never[];
  }
};
const menuItemPush = (item: { key: string; }) => router.push(item.key)
interface State {
  rootSubmenuKeys: Array<string>,
}
</script>
<style lang="less" scoped>
.menuBox {
  width: 100%;
  height: calc(100% - 48px);
  // overflow-y: auto !important;
  overflow-y: auto !important;
}
.menuBox::-webkit-scrollbar {
  width: 6px;
}
.menuBox::-webkit-scrollbar-thumb {
  background-color: #001529;
}
.menuBox:hover::-webkit-scrollbar-thumb {
  background-color: #9093994d;
}
</style>
<style lang="less">
</style>