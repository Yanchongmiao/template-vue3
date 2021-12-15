<template>
  <div class="iconBox">
    <a-tooltip
      placement="topLeft"
      title="打开全屏"
      @click="openFullScreen"
      v-if="!useProfileStore().isFullScreen"
    >
      <svg class="icon" aria-hidden="true" style="margin: 0 14px 0 0 !important;">
        <use xlink:href="#yc-icon-quanping_o" />
      </svg>
    </a-tooltip>
    <a-tooltip placement="topLeft" title="退出全屏" @click="openFullScreen" v-else>
      <svg class="icon" aria-hidden="true" style="margin: 0 14px 0 0 !important;">
        <use xlink:href="#yc-icon-quxiaoquanping_o" />
      </svg>
    </a-tooltip>
  </div>
  <a-badge dot status="success" class="msgBox">
    <svg class="icon" aria-hidden="true" style="margin: 0 4px 0 0 !important;">
      <use xlink:href="#yc-icon-xiaoxi" />
    </svg>
  </a-badge>
</template>

<script lang="ts" setup>
import { openFullScreen } from '@/utils/utils'
import { useProfileStore } from '@/pinia/use'
</script>

<style scoped lang="less">
.iconBox {
  display: flex;
  svg {
    font-size: 20px;
    outline: none;
  }
}
.msgBox {
  margin-right: 14px;
  svg {
    font-size: 18px;
  }
}
</style>
