<template>
  <a-tabs
    v-model:activeKey="activeKey"
    :tab-position="mode"
    :style="{ height: '28px', padding: '0 0 0 0px' }"
    @tabScroll="callback"
    centered
    :animated="true"
    type="editable-card"
  >
    <a-tab-pane :closable="true" v-for="i in 30" :key="i" :tab="`Tab-${i}`" class="tabBox"></a-tab-pane>
  </a-tabs>
  <div class="flex rightFun">
    <div class="rightFunRefresh">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#yc-icon-xianxingduoseshuaxin" />
      </svg>
    </div>
    <div class="rightFunAllFun">
      <a-dropdown>
        <a class="ant-dropdown-link" @click.prevent>
          <DownOutlined />
        </a>
        <template #overlay>
          <a-menu>
            <a-menu-item>
              <a href="javascript:;">1st menu item</a>
            </a-menu-item>
            <a-menu-item>
              <a href="javascript:;">2nd menu item</a>
            </a-menu-item>
            <a-menu-item>
              <a href="javascript:;">3rd menu item</a>
            </a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import { DownOutlined } from '@ant-design/icons-vue';
const mode = ref('top');
const activeKey = ref('1');
const callback = (val: string) => {
  console.log(val);
};
</script>
<style lang="less" scoped>
::v-deep(.ant-tabs-nav) {
  height: 28px;
}
::v-deep(.ant-tabs-tab) {
  border: 1px solid #d9d9d9 !important;
  margin-bottom: 2px;
  .ant-tabs-tab-remove {
    position: relative;
    top: -2px;
    opacity: 0;
  }
  &:hover {
    .ant-tabs-tab-remove {
      opacity: 1;
    }
  }
}
::v-deep(.ant-tabs-tab-active) {
  background-color: #0960bd !important;
  .ant-tabs-tab-btn,
  .ant-tabs-tab-remove {
    color: #fff !important;
  }
  .ant-tabs-tab-remove {
    opacity: 1;
  }
}
.rightFun {
  &Refresh,
  &AllFun {
    width: 36px;
    height: 100%;
    border: 1px solid black;
    text-align: center;
    line-height: 27px;
  }
}
</style>
