<template>
  <div class="iconBox h100 pointer flex flex-a-c flex-j-c">
    <a-tooltip
      placement="topLeft"
      :title="!useProfileStore().isFullScreen ? '打开全屏' : '退出全屏'"
      @click="openFullScreen"
    >
      <svg class="icon" aria-hidden="true" v-if="!useProfileStore().isFullScreen">
        <use xlink:href="#yc-icon-quanping_o" />
      </svg>
      <svg class="icon" aria-hidden="true" v-else>
        <use xlink:href="#yc-icon-quxiaoquanping_o" />
      </svg>
    </a-tooltip>
  </div>
  <div class="msgBox flex h100 flex-a-c flex-j-c pointer">
    <a-badge dot status="success">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#yc-icon-xiaoxi" />
      </svg>
    </a-badge>
  </div>
</template>

<script lang="ts" setup>
import { openFullScreen } from '@/utils/utils'
import { useProfileStore } from '@/pinia/use'
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
