<template>
  <el-menu-item :index="props.path">
    <svg class="icon" aria-hidden="true" style="margin: -4px 4px 0 0 !important;">
      <use :xlink:href="`#${props.icon}`" />
    </svg>
    <span style="width:74%" class="text-hidden-nowrap">{{ props.name }}</span>
  </el-menu-item>
</template>
<script setup lang="ts">
import { reactive, ref, toRaw } from 'vue';
import { Menu } from '../../../../type';
import { PieChartOutlined, MailOutlined, DesktopOutlined, InboxOutlined, AppstoreOutlined } from '@ant-design/icons-vue';
import subMenu from './components/subMenu.vue'
// import { ElMenuItem, ElIcon } from 'element-plus'
import {
  Location,
  Document,
  Menu as IconMenu,
  Setting,
} from '@element-plus/icons-vue'

const props = defineProps({
  name: String || Number,
  path: String || Number,
  icon: String,
})
</script>