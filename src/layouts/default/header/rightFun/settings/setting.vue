<template>
  <div class="iconBox pointer h-1/1 flex flex-a-c flex-j-c pl-6px pr-6px">
    <Svg svgName="#yc-icon-setting1" @click="openSetDrawer"></Svg>
    <setDrawer ref="comRef" />
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import setDrawer from './setDrawer.vue'
const comRef = ref<HTMLElement | any>(null)
onMounted(() => {

})
const openSetDrawer = () => {
  // comRef.value.visible =
  comRef.value.showDrawer()

}
</script>

<style scoped lang="less">
.icon {
  font-size: 16px;
}
.iconBox:hover {
  background-color: #f6f6f6;
}
</style>
