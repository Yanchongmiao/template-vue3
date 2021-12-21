<template>
  <el-menu-item :index="props.path">
    <svg class="icon" aria-hidden="true" style="margin: -4px 4px 0 0 !important;">
      <use :xlink:href="`#${props.icon}`" />
    </svg>
    <span style="width:74%" class="text-hidden-nowrap">{{ props.name }}</span>
  </el-menu-item>
</template>
<script setup lang="ts">import { useProfileStore } from '@/pinia/use';
import { log } from 'console';

const props = defineProps({
  name: String || Number,
  path: String || Number,
  icon: String,
})
let useTabs = useProfileStore()
</script>