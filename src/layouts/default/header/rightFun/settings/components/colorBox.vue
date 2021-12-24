<template>
  <div class="colorBox flex flex-j-sb">
    <div
      class="pointer"
      v-for="item in props.colorList"
      :style="{ 'background-color': `rgb(${item})` }"
    ></div>
  </div>
</template>

<script lang="ts" setup>import { reactive } from 'vue';
const props = defineProps({
  colorList: {
    type: Array,
    required: true,
    default: []
  }
})
//如果使用 script setup 语法糖，应该使用 defineExpose 对象内部定义需要哪些变量需要暴露给上级组件 否则无法使用ref
defineExpose({})

</script>

<style lang="less" scoped>
.colorBox {
  div {
    width: 20px;
    height: 20px;
    border: 1px solid #ddd;
    border-radius: 2px;
  }
}
</style>
