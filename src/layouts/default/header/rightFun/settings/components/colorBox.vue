<template>
  <div class="colorBox flex flex-j-sb">
    <div
      class="pointer"
      v-for="item in props.colorList"
      :style="{ 'background-color': `rgb(${item})` }"
    ></div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  colorList: {
    type: Array,
    required: true,
    default: []
  }
})
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
