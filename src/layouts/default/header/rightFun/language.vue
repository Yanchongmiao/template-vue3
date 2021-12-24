<template>
  <div class="h100 pointer flex flex-a-c flex-j-c lang">
    <a-dropdown>
      <Svg svgName="#yc-icon-qiehuanyuyan" :className="'h100'"></Svg>
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
  &:hover {
    background-color: #f6f6f6;
  }
  .ant-dropdown-trigger {
    outline: none;
  }
}
</style>

