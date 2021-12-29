<template>
  <a-menu-item :key="props.path">
    <template #icon>
      <ClassIcon class="text-font-14px" style="color: #ffffffb3;" :iconName="`${props.icon}`"></ClassIcon>
    </template>
    <span>{{ props.name }}</span>
  </a-menu-item>
</template>
<script setup lang="ts">import { useProfileStore } from '@/pinia/use';
import ClassIcon from '@/components/classIcon.vue';
const props = defineProps({
  name: String || Number,
  path: String || Number,
  icon: String,
})
let useTabs = useProfileStore()
</script>