<template>
  <a-dropdown class="lang">
    <svg class="icon" aria-hidden="true">
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
</template>
<script lang="ts" setup>
</script>
<style lang="less" scoped>
.lang {
  height: 100%;
  font-size: 18px;
  margin-right: 7px;
}
</style>

