<template>
  <div class="flex-1 flex mb-10px" style="overflow: hidden;">
    <div class="flex pr-150px flex-a-c pt-10px">
      <img class="w-32px h-32px ml-8px mr-10px" src="@/assets/images/logo.png" />
      <div class="flex flex-a-c">
        <span class="text-xs-20px font-600" style="color: #0960bd;">Admin</span>
      </div>
    </div>
    <div class="mt-5px">
      <a-menu v-model:selectedKeys="state.valueModel" mode="horizontal" @click="funMenu">
        <template v-for="item in useMenu.menuData" :key="item.path">
          <ItemMenu
            v-if="(!item.children || item.children.length == 0) && (item.hideMenu || item.hideMenu == null)"
            :name="item.name"
            :path="item.path"
            :icon="item.meta?.icon as string"
          />
          <SubMenu
            v-if="item.children && item.children.length > 0"
            :itemChildren="item"
            :subKey="item.path"
            :icon="item.meta?.icon as string"
          />
        </template>
      </a-menu>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useProfileStore } from '@/pinia/use';
import { effect, reactive, ref } from 'vue';
import { RouteLocationRaw, useRouter } from 'vue-router';
import ItemMenu from './antMenu/menuItem.vue'
import SubMenu from './antMenu/subMenu.vue'
interface State {
  valueModel: Array<string>
}
let useMenu = useProfileStore();
const state: State = reactive({
  valueModel: []
})
effect(() => {
  state.valueModel = useMenu.$state.menuActiveIndex.split(',')
})
const router = useRouter()
const funMenu = (item: { key: RouteLocationRaw; }) => router.push(item.key)
//如果使用 script setup 语法糖，应该使用 defineExpose 对象内部定义需要哪些变量需要暴露给上级组件 否则无法使用ref
defineExpose({})
</script>

<style lang="less" scoped>
::v-deep(.ant-menu) {
  height: 52px !important;
  border: none !important;
  overflow: hidden;
  width: 100%;
  .ant-menu-item,
  .ant-menu-submenu {
    display: flex;
    justify-content: center;
    align-items: center;
    .ant-menu-submenu-title {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
    }
    .ant-menu-title-content {
      height: 100%;
    }
    svg {
      margin-top: 9px !important;
    }
  }
  .ant-menu-item:hover:after,
  .ant-menu-submenu:hover:after {
    border-bottom: 3px solid #0960bd;
  }
  .ant-menu-item-selected,
  .ant-menu-submenu-selected {
    &:after {
      border-bottom: 3px solid #0960bd !important;
    }
  }
}
</style>
