<template>
  <el-sub-menu :index="subKey">
    <template #title>
      <el-icon>
        <location />
      </el-icon>
      <span style="width:76%" class="text-hidden-nowrap">{{ itemChildren.name }}</span>
    </template>
    <template v-for="item in itemChildren.children" :key="item.path">
      <MenuItem
        v-if="(!item.children || item.children.length == 0) && (!item.hideMenu || item.hideMenu == null)"
        :name="item.name"
        :path="item.path"
      />
      <subMenu
        v-if="item.children && item.children.length > 0"
        :itemChildren="item"
        :subKey="item.path"
      />
    </template>
  </el-sub-menu>
</template>
<script setup lang="ts">import { ref } from 'vue';
import MenuItem from './menuItem.vue'
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
} from '@element-plus/icons'
const props = defineProps({
  itemChildren: Object,
  subKey: String
}
)
const itemChildren: {} = ref(props.itemChildren)
const subKey = ref(props.subKey)

</script>
<style lang="less">
</style>