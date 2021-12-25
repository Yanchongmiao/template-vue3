<template>
  <a-tabs
    v-model:activeKey="useState.tabs.activekey"
    tab-position="top"
    :style="{ height: '100%', padding: '0 0 0 0px' }"
    @change="callback"
    :animated="true"
    hideAdd
    type="editable-card"
    @edit="deleteTabs"
  >
    <a-tab-pane
      :closable="index !== 0"
      v-for="(i,index) in useState.tabs.tagsData"
      :key="i.path"
      :tab="i.name"
      class="tabBox"
    ></a-tab-pane>
  </a-tabs>
  <div class="flex rightFun">
    <div class="rightFunRefresh flex flex-j-c flex-a-c">
      <Svg svg-name="#yc-icon-xianxingduoseshuaxin" @click="refreshRoute"></Svg>
    </div>
    <div class="rightFunAllFun flex flex-j-c flex-a-c">
      <a-dropdown trigger="click">
        <a class="ant-dropdown-link" @click.prevent>
          <DownOutlined class />
        </a>
        <template #overlay>
          <a-menu>
            <a-menu-item
              v-for="item in tabsList"
              :disabled="isDisabled(item.name)"
              :key="item.name"
              @click="tabsFun(item.name)"
            >
              <div class="flex flex-a-c">
                <Svg :svgName="`${item.icon}`" :style="{ 'margin-right': '6px' }"></Svg>
                <span>{{ item.name }}</span>
              </div>
            </a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { DownOutlined } from '@ant-design/icons-vue'
import { useProfileStore } from '@/pinia/use'
import { effect, reactive, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { TabsEmnu, tabsList } from './data'
import Svg from '@/components/svg.vue'
import ClassIcon from '@/components/classIcon.vue'
const use = useProfileStore()
const useState = use.$state
let tabData = useState.tabs.tagsData
for (let i = 0; i < tabData.length; i++) {
  useProfileStore().$state.tabs.mapIndex.set(tabData[i].path, i)
}
const router = useRouter()
let tabFun = reactive({
  closeOwn: false,//关闭自己
  closeAll: false,//关闭全部
  closeLeft: false,//关闭左侧
  closeRight: false,//关闭右侧
  closeOther: false//关闭其他
})
effect(() => {
  // 按钮控制
  {
    tabFun.closeOwn = useState.tabs.activekey == useState.tabs.tagsData[0].path
    tabFun.closeLeft = useState.tabs.activekey == useState.tabs.tagsData[1]?.path || tabFun.closeOwn
    tabFun.closeRight = useState.tabs.activekey == useState.tabs.tagsData[useState.tabs.tagsData.length - 1]?.path
    tabFun.closeAll = useState.tabs.tagsData.length < 2 ? true : false
    // 判断关闭其他
    if (useState.tabs.tagsData.length < 2) {
      tabFun.closeOther = true
    } else if (useState.tabs.tagsData.length == 2) {
      tabFun.closeOther = tabFun.closeOwn ? false : true
    } else {
      tabFun.closeOther = false
    }
  }
});
// 切换tabs
const callback = (val: string | number) => router.push(String(val))
// 监听tabs点击事件
const deleteTabs = (targetKey: string | number, action: string) => {
  if (action == 'remove') {
    use.deleteTabs(targetKey)
  }
}
// 关闭全部
const deleteAll = () => {
  useState.tabs.activekey = useState.tabs.tagsData[0].path
  useState.tabs.tagsData.splice(1, useState.tabs.tagsData.length - 1)
  router.push('/system/home')
}
// 关闭左侧
const deleteleft = () => useState.tabs.tagsData.splice(1, useState.tabs.tagsData.findIndex(i => i.path == useState.tabs.activekey) - 1)
// 关闭右侧
const deleteRight = () => {
  let i = useState.tabs.tagsData.findIndex(i => i.path == useState.tabs.activekey)
  useState.tabs.tagsData.splice(i + 1, useState.tabs.tagsData.length - 1)

}
// 关闭其他
const deleteOther = () => useState.tabs.tagsData = useState.tabs.tagsData.filter(i => i.path == useState.tabs.tagsData[0].path || i.path == useState.tabs.activekey)
// 关闭自己
const deleteown = () => use.deleteTabs(useState.tabs.activekey)
// 刷新当前路由
const refreshRoute = () => router.push('/redirect/b')
// 判断当前下拉功能是否禁用
const isDisabled = (name: string): Boolean => {
  switch (name) {
    case TabsEmnu.refresh:
      return false
    case TabsEmnu.closeTab:
      return tabFun.closeOwn
    case TabsEmnu.clostLeft:
      return tabFun.closeLeft
    case TabsEmnu.closeRight:
      return tabFun.closeRight
    case TabsEmnu.closeOther:
      return tabFun.closeOther
    case TabsEmnu.closeAll:
      return tabFun.closeAll
  }
  return true
}
// 右侧下拉功能
const tabsFun = (name: string) => {
  switch (name) {
    case TabsEmnu.refresh:
      refreshRoute()
      break;
    case TabsEmnu.closeTab:
      deleteown()
      break;
    case TabsEmnu.clostLeft:
      deleteleft()
      break;
    case TabsEmnu.closeRight:
      deleteRight()
      break;
    case TabsEmnu.closeOther:
      deleteOther()
      break;
    case TabsEmnu.closeAll:
      deleteAll()
      break;
  }
}
</script>
<style lang="less" scoped>
::v-deep(.ant-tabs-nav) {
  position: static;
  height: 100%;
  margin: 0;
  .ant-tabs-tab {
    border: 1px solid #d9d9d9 !important;
    position: relative;
    margin-bottom: 2px;
    .ant-tabs-tab-remove {
      position: absolute;
      right: 7px;
      // top: -1px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: -2px;
      opacity: 0;
    }
    &:hover {
      .ant-tabs-tab-remove {
        opacity: 1;
      }
    }
    .ant-tabs-tab-btn {
      padding: 0 4px;
    }
  }
  .ant-tabs-tab {
    margin-left: 6px !important;
  }
  .ant-tabs-tab:nth-child(1) {
    margin-left: 0px !important;
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
    border-left: 1px solid #d9d9d9;
    border-right: 1px solid #d9d9d9;
    text-align: center;
    line-height: 27px;
    margin-bottom: 2px;
  }
  &Refresh {
    border-right: none;
    svg {
      font-size: 16px;
    }
  }
  .anticon-down {
    color: #00000073;
    font-size: 14px;
  }
  .rightFunAllFun:hover {
    .anticon {
      color: #000000d9;
    }
  }
}
.ant-dropdown-menu-title-content {
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
}
</style>
