<template>
  <a-dropdown class="userBox flex flex-a-c">
    <a class="ant-dropdown-link" @click.prevent>
      <a-avatar style="width: 24px;height: 24px;;">
        <template #icon>
          <!-- <AntDesignOutlined /> -->
          <img src="	https://q1.qlogo.cn/g?b=qq&nk=190848757&s=640" />
        </template>
      </a-avatar>
      <span>&nbsp;&nbsp; 超级管理员</span>
    </a>
    <template #overlay>
      <a-menu>
        <a-menu-item key="sub1">文档</a-menu-item>
        <a-menu-item key="sub2">退出登录</a-menu-item>
        <a-sub-menu key="sub3" title="切换租户">
          <a-menu-item>租户1</a-menu-item>
          <a-menu-item>租户2</a-menu-item>
        </a-sub-menu>
      </a-menu>
    </template>
  </a-dropdown>
</template>
<script lang="ts" setup>
import { defineComponent } from 'vue';
import { DownOutlined, AntDesignOutlined } from '@ant-design/icons-vue';

</script>
<style lang="less" scoped>
.userBox {
  height: 100%;
  margin-right: 7px;
  padding: 0 7px;
  span {
    color: #000000d9 !important;
  }
}
.userBox:hover {
  background-color: #f6f6f6;
}
</style>
