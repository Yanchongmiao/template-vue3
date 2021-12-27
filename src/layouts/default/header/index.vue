<template class="flex">
    <!-- 展开菜单 -->
    <controlLeftMenu v-if="useMenu.navMode !== 3" />
    <bread v-if="useMenu.navMode !== 3" />
    <!-- 顶部菜单模式 -->
    <topMenu v-if="useMenu.navMode == 3" />
    <!-- 右侧功能 -->
    <rightFun />
</template>
<script setup lang="ts">
import controlLeftMenu from './controlLeftMenu.vue'
import rightFun from './rightFun/index.vue'
import bread from '../bread/index.vue'
import { useProfileStore } from '@/pinia/use';
import topMenu from './topMenu/index.vue'
import { Menu } from '@/type';
import { DeepCopy } from '@/utils/utils';
import { ref } from 'vue'
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons-vue';
let useMenu = useProfileStore()
</script>

<style scoped lang="less">
.headBox {
    max-width: 100%;
    height: 48px;
    border: 1px solid;
}
</style>