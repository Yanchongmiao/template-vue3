<template>
  <a-drawer
    v-model:visible="visible"
    class="custom-class"
    title="我的消息"
    placement="right"
    @after-visible-change="afterVisibleChange"
  >
    <a-tabs v-model:activeKey="activeKey">
      <a-tab-pane key="1">
        <template #tab>
          <span>
            <apple-outlined />通知
          </span>
        </template>
        over over
      </a-tab-pane>
      <a-tab-pane key="2">
        <template #tab>
          <span>
            <android-outlined />消息
          </span>
        </template>
        msg
      </a-tab-pane>
      <a-tab-pane key="3">
        <template #tab>
          <span>
            <android-outlined />待办
          </span>
        </template>
        task
      </a-tab-pane>
    </a-tabs>
  </a-drawer>
</template>
<script lang="ts" setup>
import { defineComponent, ref } from 'vue';
import { AppleOutlined, AndroidOutlined } from '@ant-design/icons-vue';
const visible = ref<boolean>(false);
const activeKey = ref('1')
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
<style lang="less" scoped>
::v-deep(.ant-tabs-nav-wrap) {
  width: 100%;
  .ant-tabs-nav-list {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
}
</style>
