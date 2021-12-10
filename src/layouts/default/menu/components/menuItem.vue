<template>
  <el-menu-item :index="props.path">
    <el-icon>
      <setting />
    </el-icon>
    <span style="width:76%" class="text-hidden-nowrap">{{ props.name }}</span>
  </el-menu-item>
</template>
<script setup lang="ts">
import { reactive, ref, toRaw } from 'vue';
import { Menu } from '../../../../type';
import { PieChartOutlined, MailOutlined, DesktopOutlined, InboxOutlined, AppstoreOutlined } from '@ant-design/icons-vue';
import subMenu from './components/subMenu.vue'
import { ElMenuItem, ElIcon } from 'element-plus'
import {
  Location,
  Document,
  Menu as IconMenu,
  Setting,
} from '@element-plus/icons'

const props = defineProps({
  name: String || Number,
  path: String || Number,
})
</script>