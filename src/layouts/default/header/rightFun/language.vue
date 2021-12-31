<template>
  <div class="h-1/1 text-18px px-10px pointer flex flex-a-c flex-j-c lang">
    <a-dropdown>
      <Svg svgName="#yc-icon-qiehuanyuyan" :className="'h-1/1'"></Svg>
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
  &:hover {
    background-color: @header-dark-bg-hover-color;
  }
  .ant-dropdown-trigger {
    outline: none;
  }
  svg {
    color: @header-dark-font-color;
  }
}
</style>

