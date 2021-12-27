<template>
  <a-drawer
    v-model:visible="visible"
    class="custom-class"
    :width="330"
    title="项目配置"
    placement="right"
    @after-visible-change="afterVisibleChange"
  >
    <a-divider>主题</a-divider>
    <a-row class="flex flex-j-c">
      <a-switch v-model:checked="themeCheck" style="background-color: #151515;">
        <template #checkedChildren>
          <Svg svg-name="#yc-icon-ziyuan1"></Svg>
        </template>
        <template #unCheckedChildren>
          <Svg svg-name="#yc-icon-yejian"></Svg>
        </template>
      </a-switch>
    </a-row>
    <a-divider>导航栏模式</a-divider>
    <theme></theme>
    <a-divider>系统主题</a-divider>
    <colorBox :colorList="systemColor" />
    <a-divider>顶栏主题</a-divider>
    <colorBox :colorList="headerColor" />
    <a-divider>菜单主题</a-divider>
    <colorBox :colorList="menuColor" />
    <a-divider>界面功能</a-divider>
    <funSwitch :pageFun="config.pageFun"></funSwitch>
    <a-divider>界面显示</a-divider>
    <funSwitch :pageFun="config.pageView"></funSwitch>
    <a-divider>动画</a-divider>
    <funSwitch :pageFun="config.pageAnimation"></funSwitch>
    <a-divider></a-divider>
    <a-button type="primary" block class="flex flex-j-c flex-a-c">
      <ClassIcon icon-name="yc-icon-fuzhi" :style="{ color: '#fff' }"></ClassIcon>
      <span>&nbsp;&nbsp;拷贝</span>
    </a-button>
    <br />
    <a-button
      type="primary"
      block
      style="background-color: #efbd47;border: none;"
      class="flex flex-j-c flex-a-c"
    >
      <Svg svg-name="#yc-icon-shuaxin"></Svg>
      <span>&nbsp;&nbsp;重置</span>
    </a-button>
    <br />
    <a-button type="primary" danger block class="flex flex-j-c flex-a-c">
      <Svg svg-name="#yc-icon-shuaxin"></Svg>
      <span>&nbsp;&nbsp;清空缓存并返回登录页</span>
    </a-button>
  </a-drawer>
</template>
<script lang="ts" setup>
import { defineComponent, reactive, ref } from 'vue';
import { systemColor, headerColor, menuColor, pageFun, pageView, pageAnimation } from './components/data'
const config = reactive({
  systemColor: systemColor,
  headerColor: headerColor,
  menuColor: menuColor,
  pageFun: pageFun,
  pageView: pageView,
  pageAnimation: pageAnimation
})
console.log(config);
const themeCheck = ref(false)
import theme from './components/theme.vue'
import colorBox from './components/colorBox.vue'
import funSwitch from './components/funSwitch.vue'
import Svg from '@/components/svg.vue';
import ClassIcon from '@/components/classIcon.vue';
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

