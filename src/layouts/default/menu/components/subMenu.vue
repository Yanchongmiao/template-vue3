<template>
  <a-sub-menu :key="subKey">
    <template #icon>
      <MailOutlined />
    </template>
    <template #title>{{ itemChildren.name }}</template>
    <template v-for="item in itemChildren.children" :key="item.path">
      <MenuItem
        v-if="(!item.children || item.children.length == 0) && (item.hideMenu || item.hideMenu == null)"
        :menuInfo="item"
      />
      <subMenu
        v-if="item.children && item.children.length > 0"
        :itemChildren="item"
        :subKey="item.path"
      />
    </template>
  </a-sub-menu>
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