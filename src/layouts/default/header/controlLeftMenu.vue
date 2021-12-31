<template>
  <div class="flex flex-a-c h-1/1 pl-10px pr-10px pointer fold">
    <menu-unfold-outlined v-show="useMenu.$state.openMenu" class="text-xs-16px" @click="openClose" />
    <menu-fold-outlined v-show="!useMenu.$state.openMenu" class="text-xs-16px" @click="openClose" />
  </div>
</template>
<script lang="ts" setup>
import { useProfileStore } from '@/pinia/use'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons-vue'
let useMenu = useProfileStore()
const openClose = () => useMenu.$state.openMenu = !useMenu.$state.openMenu
</script>

<style scoped lang="less">
.pointer:hover {
  background-color: @header-dark-bg-hover-color;
}
.fold {
  color: @header-dark-font-color !important;
}
</style>
