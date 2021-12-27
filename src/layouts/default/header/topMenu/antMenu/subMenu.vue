<template>
  <a-sub-menu :key="props.subKey">
    <template #title>
      <span class="text-hidden-nowrap">{{ props.itemChildren.name }}</span>
    </template>
    <template #icon>
      <Svg :svgName="`#${props.icon}`"></Svg>
    </template>
    <template v-for="item in props.itemChildren.children" :key="item.path">
      <MenuItem
        v-if="(!item.children || item.children.length == 0) && (!item.hideMenu || item.hideMenu == null)"
        :name="item.name"
        :path="item.path"
        :icon="item.meta.icon"
      />
      <subMenu
        v-if="item.children && item.children.length > 0"
        :itemChildren="item"
        :subKey="item.path"
        :icon="item.meta.icon"
      />
    </template>
  </a-sub-menu>
</template>
<script setup lang="ts">
import MenuItem from './menuItem.vue'
const props = defineProps({
  itemChildren: {
    type: Object,
    required: true,
    default: () => { children: [] }
  },
  icon: {
    type: String,
    required: true,
    default: ''
  },
  subKey: String,
}
)
</script>
<style lang="less" scoped></style>