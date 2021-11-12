<template>
  <a-layout>
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
      <div class="logo flex flex-a-c">
        <img src="https://vvbin.cn/next/assets/logo.63028018.png" alt="" />
        <transition name="container">
          <!-- <p v-show = "show" v-bind:style = "styleobj">动画实例</p> -->
          <p v-if="!collapsed" class="h100 flex1 flex flex-a-c text-white">
            <b>FyAdmin</b>
          </p>
        </transition>
      </div>
<Menu />
      <!-- <a-menu theme="dark" mode="inline" v-model:selectedKeys="selectedKeys">
        <a-menu-item key="1">
          <user-outlined />
          <span>nav 1</span>
        </a-menu-item>
        <a-menu-item key="2">
          <video-camera-outlined />
          <span>nav 2</span>
        </a-menu-item>
        <a-menu-item key="3">
          <upload-outlined />
          <span>nav 3</span>
        </a-menu-item>
      </a-menu> -->
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0 0 0 10px">
        <menu-unfold-outlined
          v-if="collapsed"
          class="trigger"
          @click="() => (collapsed = !collapsed)"
        />
        <menu-fold-outlined
          v-else
          class="trigger"
          @click="() => (collapsed = !collapsed)"
        />
      </a-layout-header>
      <a-layout-content
        :style="{
          margin: '24px 16px',
          padding: '24px',
          background: '#fff',
          minHeight: '280px',
        }"
      >
        Content
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script lang="ts">
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons-vue";
import { defineComponent, ref } from "vue";
import Menu from './menu/index.vue'
export default defineComponent({
  components: {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    Menu
  },
  setup() {
    return {
      selectedKeys: ref<string[]>(["1"]),
      collapsed: ref<boolean>(true),
    };
  },
});
</script>

<style lang="less">
.ant-layout {
  height: 100%;
}
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}
.ant-layout-sider-children {
  .logo {
    // width: 210px;
    height: 48px;
    // background: rgba(255, 255, 255, 0.3);
    margin: 10px 6px;
    img {
      width: 32px;
      height: 32px;
    }
    p {
      margin: 0px;
      font-size: 18px;
      font-weight: 700;
      transition: all 0.5s;
      line-height: normal;
      padding-left: 20px;
      animation: fade-in; /*动画名称*/
      animation-duration: 0.3s; /*动画持续时间*/
      -webkit-animation: fade-in 0.3s; /*针对webkit内核*/
      transform: scale(1, 1);
    }
  }
}
</style>
