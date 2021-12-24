<template>
  <span :class="`yc-iconfont pointer ${props.className} ${props.iconName} `" :style="props.style"></span>
</template>
<script lang="ts" setup>
import { defineProps } from 'vue';
const props = defineProps({
  iconName: {
    type: String,
    required: true,
    default: 'yc-icon-guanbi'
  },
  style: {
    type: Object,
    required: false,
    default: {}
  },
  className: {
    type: String,
    required: false,
    default: ''
  }
})
</script>

<style lang="less" scoped>
</style>
