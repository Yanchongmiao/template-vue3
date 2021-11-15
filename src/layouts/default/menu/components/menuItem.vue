<template>
  <a-menu-item :key="menyItem.name">
    <template #icon>
      <InboxOutlined />
    </template>
    <span>{{ menyItem.name }}</span>
  </a-menu-item>
</template>
<script setup lang="ts">import { reactive, ref } from 'vue';
import { Menu } from '../../../../type';
import { PieChartOutlined, MailOutlined, DesktopOutlined, InboxOutlined, AppstoreOutlined } from '@ant-design/icons-vue';
import subMenu from './components/subMenu.vue'
const props = defineProps({
  menuInfo: Object,
})
let menyItem = reactive({
  ...props.menuInfo
})
</script>