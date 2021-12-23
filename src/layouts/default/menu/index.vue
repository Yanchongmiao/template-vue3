<template>
  <div class="menuBox">
    <el-menu
      active-text-color="#fff"
      background-color="#001529"
      :default-active="useMenu.$state.menuActiveIndex"
      text-color="#ffffffa6"
      :unique-opened="true"
      :collapse="useMenu.$state.openMenu"
      :collapse-transition="false"
      router
    >
      <template v-for="item in useMenu.menuData" :key="item.path">
        <itemMenu
          v-if="(!item.children || item.children.length == 0) && (item.hideMenu || item.hideMenu == null)"
          :name="item.name"
          :path="item.path"
          :icon="item.meta?.icon as string"
        />
        <subMenu
          v-if="item.children && item.children.length > 0"
          :itemChildren="item"
          :subKey="item.path"
          :icon="item.meta?.icon as string"
        />
      </template>
    </el-menu>
  </div>
</template>
<script lang="ts" setup>
import { defineComponent, reactive, ref, toRefs, watch } from 'vue';
import subMenu from './components/subMenu.vue'
import itemMenu from './components/menuItem.vue'
import { useProfileStore } from '@/pinia/use';
import { Menu } from '@/type';
import { DeepCopy } from '@/utils/utils';
let useMenu = useProfileStore()

</script>
<style lang="less" scoped>
.menuBox {
  width: 99%;
  height: 90%;
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
.el-menu {
  width: 100% !important;
  border: none;
}
.is-opened {
  .el-sub-menu__title {
    // background-color: red;
  }
  .el-menu {
    // background-color: red;
  }
}
.el-menu-item:hover {
  color: #fff;
  // background-color: #3e3f41;
}
.is-active {
  background-color: #0960bd !important;
}
/* .text-hidden-nowrap {
  font-size: 14px;
} */
</style>