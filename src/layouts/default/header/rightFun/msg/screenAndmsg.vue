<template>
  <div class="iconBox h-1/1 pointer flex flex-a-c flex-j-c">
    <a-tooltip
      placement="bottom"
      :title="!useProfileStore().isFullScreen ? '打开全屏' : '退出全屏'"
      @click="openFullScreen"
    >
      <Svg svgName="#yc-icon-quanping_o" v-if="!useProfileStore().isFullScreen"></Svg>
      <Svg svgName="#yc-icon-quxiaoquanping_o" v-else></Svg>
    </a-tooltip>
  </div>
  <div class="msgBox flex h-1/1 flex-a-c flex-j-c pointer">
    <a-badge dot status="success">
      <Svg svgName="#yc-icon-xiaoxi" @click="openSetDrawer"></Svg>
    </a-badge>
    <msgDrawer ref="comRef" />
  </div>
</template>

<script lang="ts" setup>
import { openFullScreen } from '@/utils/utils'
import { useProfileStore } from '@/pinia/use'
import msgDrawer from './msgDrawer.vue'
import { ref } from 'vue'
import Svg from '@/components/svg.vue'
const comRef = ref<HTMLElement | any>(null)
const openSetDrawer = () => comRef.value.showDrawer()
</script>

<style scoped lang="less">
.iconBox {
  padding: 0 10px;
  svg {
    font-size: 20px;
    outline: none;
  }
}
.iconBox:hover,
.msgBox:hover {
  background-color: rgb(246, 246, 246);
}
.msgBox {
  padding: 0 10px;
  svg {
    font-size: 16px;
  }
}
</style>
