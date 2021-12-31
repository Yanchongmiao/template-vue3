<template>
  <div class="colorBox flex flex-j-sb">
    <div
      @click="selectColor(item)"
      class="pointer flex flex-j-c flex-a-c"
      v-for="item in props.colorList"
      :style="{ 'background-color': item['--header-bg-color'] || item['--sider-bg-color'] }"
    >
      <Svg
        v-if="item['--header-bg-color'] == skin.topMenu"
        svgName="#yc-icon-dui"
        class="text-white"
      ></Svg>
    </div>
  </div>
</template>
<script lang="ts" setup>import { skinConfig } from '@/pinia/skinConfig'
import { ref } from 'vue'
import { Color } from './data'
const props = defineProps<{
  colorList: Array<Color>,
  VmodelName: any
}>()
const e = defineEmits<{
  (e: 'color', color: {}): void
}>()
const skin = skinConfig()
const selectColor = (item: Color) => {
  // skin[props.VmodelName] = item['--header-bg-color'] as string
  skin.setSkin(props.VmodelName, item)
  e('color', item)
}
// console.log(skin.topMenu);
// if (skin.topMenu) {
//   console.log(1);
//   const filterConfig = props.colorList.filter((item: Color) => item['--header-bg-color'] == skin.topMenu)
//   console.log(filterConfig);
// }
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
