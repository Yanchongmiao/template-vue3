<template>
  <div class="h100 pointer flex flex-a-c flex-j-c lang">
    <a-dropdown>
      <svg class="icon h100" aria-hidden="true">
        <use xlink:href="#yc-icon-qiehuanyuyan" />
      </svg>
      <template #overlay>
        <a-menu>
          <a-menu-item>简体中文</a-menu-item>
          <a-menu-item>繁体中文</a-menu-item>
          <a-menu-item>English</a-menu-item>
        </a-menu>
      </template>
    </a-dropdown>
  </div>
</template>
<script lang="ts" setup>
</script>
<style lang="less" scoped>
.lang {
  height: 100%;
  font-size: 18px;
  padding: 0 10px;
  .ant-dropdown-trigger {
    outline: none;
  }
}
</style>

