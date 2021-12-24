<template>
  <svg :class="`icon pointer ${props.className}`" aria-hidden="true" :style="props.style">
    <use :xlink:href="props.svgName" />
  </svg>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
const props = defineProps({
  svgName: {
    type: String,
    required: true,
    default: '#yc-icon-guanbi'
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
