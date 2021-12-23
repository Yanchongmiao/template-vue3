<template>
  <div class="iconBox pointer h100 flex flex-a-c flex-j-c">
    <svg class="icon" aria-hidden="true" @click="openSetDrawer">
      <use xlink:href="#yc-icon-setting1" />
    </svg>
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
  margin-left: 7px;
}
.iconBox:hover {
  background-color: #f6f6f6;
}
</style>
