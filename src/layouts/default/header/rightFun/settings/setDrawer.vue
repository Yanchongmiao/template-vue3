<template>
  <a-drawer
    v-model:visible="visible"
    class="custom-class"
    title="项目配置"
    placement="right"
    @after-visible-change="afterVisibleChange"
  >
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
  </a-drawer>
</template>
<script lang="ts" setup>
import { defineComponent, ref } from 'vue';
const visible = ref<boolean>(false);
const afterVisibleChange = (bool: boolean) => {
  console.log('visible', bool);
};

const showDrawer = () => {
  visible.value = true;
};
defineExpose({
  showDrawer
})
</script>

