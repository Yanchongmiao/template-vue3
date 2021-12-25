<template>
  <div class="userBox pointer lang">
    <a-dropdown class="h-1/1 flex flex-a-c flex-j-c" :trigger="['click']">
      <a class="ant-dropdown-link" @click.prevent>
        <a-avatar style="width: 24px;height: 24px;;">
          <template #icon>
            <img src="	https://q1.qlogo.cn/g?b=qq&nk=190848757&s=640" />
          </template>
        </a-avatar>
        <span>&nbsp;&nbsp; 超级管理员</span>
      </a>
      <template #overlay>
        <a-menu>
          <a-menu-item key="sub1">
            <div class="flex flex-a-c">
              <Svg svgName="#yc-icon-gerenxinxi1" :style="{ 'margin-right': '6px' }"></Svg>

              <span>个人信息</span>
            </div>
          </a-menu-item>
          <a-menu-item key="sub2">
            <div class="flex flex-a-c">
              <Svg svgName="#yc-icon-xiugaimima" :style="{ 'margin-right': '6px' }"></Svg>

              <span>修改密码</span>
            </div>
          </a-menu-item>
          <a-sub-menu key="sub3">
            <template #icon>
              <div style="float: left;margin-top: 2px;">
                <Svg svgName="#yc-icon-iconzh2" :style="{ 'font-size': '14px', 'color': 'black' }"></Svg>
              </div>
            </template>
            <template #title>切换租户</template>
            <a-menu-item>1</a-menu-item>
            <a-menu-item>2</a-menu-item>
          </a-sub-menu>
          <a-menu-item key="sub4">
            <div class="flex flex-a-c">
              <Svg svgName="#yc-icon-tuichuguanbi" :style="{ 'margin-right': '6px' }"></Svg>
              <span>退出登录</span>
            </div>
          </a-menu-item>
        </a-menu>
      </template>
    </a-dropdown>
  </div>
</template>
<script lang="ts" setup>
import { defineComponent } from 'vue';
import { DownOutlined, AntDesignOutlined } from '@ant-design/icons-vue';

</script>
<style lang="less" scoped>
.userBox {
  height: 100%;
  // margin-right: 7px;
  padding: 0 10px;
  span {
    color: #000000d9 !important;
  }
}
.userBox:hover {
  background-color: #f6f6f6;
}
</style>
<style lang="less">
// .ant-dropdown-menu-item .ant-dropdown-menu-submenu-expand-icon,
// .ant-dropdown-menu-submenu-title .ant-dropdown-menu-submenu-expand-icon {
//   .ant-dropdown-menu-submenu-arrow-icon {
//     margin-top: 6px;
//     float: left;
//   }
// }
</style>
