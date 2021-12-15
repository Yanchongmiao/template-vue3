<template>
  <el-sub-menu :index="props.subKey">
    <template #title>
      <svg class="icon" aria-hidden="true" style="margin: -4px 4px 0 0 !important;">
        <use :xlink:href="`#${props.icon}`" />
      </svg>
      <span style="width:74%" class="text-hidden-nowrap">{{ props.itemChildren.name }}</span>
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
  </el-sub-menu>
</template>
<script setup lang="ts">import { ref } from 'vue';
import MenuItem from './menuItem.vue'
// import { ElMenu, ElIcon } from 'element-plus'
// import { ElSubMenu, ElIcon } from 'element-plus'
import { uuid } from '@/utils/utils'
import { defineComponent, reactive, toRefs, watch } from 'vue';
import {
  PieChartOutlined,
  MailOutlined,
  DesktopOutlined,
  InboxOutlined,
  AppstoreOutlined,
} from '@ant-design/icons-vue';
import {
  Location,
  Document,
  Menu as IconMenu,
  Setting,
} from '@element-plus/icons-vue'
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
<style lang="less" scoped>
.icon {
}
</style>