<template>
  <a-menu-item :key="props.path" class="flex flex-a-c m-0 pointer">
    <template #icon>
      <Svg :svgName="`#${props.icon}`"></Svg>
    </template>
    {{ props.name }}
  </a-menu-item>
</template>
<script setup lang="ts">
import { useProfileStore } from '@/pinia/use';
const props = defineProps({
  name: String || Number,
  path: String || Number,
  icon: String,
})
let useTabs = useProfileStore()
</script>