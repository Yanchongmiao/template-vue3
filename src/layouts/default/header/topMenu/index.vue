<template>
  <div class="flex-1 flex mb-10px" style="overflow: hidden;">
    <div class="mt-5px topMenu">
      <a-menu v-model:selectedKeys="state.valueModel" mode="horizontal" @click="funMenu">
        <template v-for="item in useMenu.menuData" :key="item.path">
          <ItemMenu
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
  </div>
</template>

<script lang="ts" setup>
import { useProfileStore } from '@/pinia/use';
import { effect, reactive, ref } from 'vue';
import { RouteLocationRaw, useRouter } from 'vue-router';
import ItemMenu from '../../menu/components/menuItem.vue'
import SubMenu from '../../menu/components/subMenu.vue'
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
.topMenu {
  ::v-deep(.ant-menu) {
    height: 100% !important;
    border-bottom: none;
    .ant-menu-item,
    .ant-menu-submenu-title {
      display: flex;
      justify-content: center;
      align-items: center;
      .ant-menu-title-content {
        height: 100%;
        line-height: 32px;
      }
    }
    .ant-menu-submenu {
      height: 100%;
      display: flex;
    }
    .ant-menu-item-icon {
      color: black !important;
    }
  }
}
</style>
