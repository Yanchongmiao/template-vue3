<template>
  <div class="flex flex-a-c h-1/1 pl-10px pr-10px">
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
.flex:hover {
  background-color: #f6f6f6;
  cursor: pointer;
}
</style>
