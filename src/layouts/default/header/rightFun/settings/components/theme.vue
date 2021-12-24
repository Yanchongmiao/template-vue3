<template>
  <a-row class="themeBox flex-j-sb">
    <a-col :span="5" class="box pointer"></a-col>
    <a-col :span="5" class="box pointer"></a-col>
    <a-col :span="5" class="box pointer"></a-col>
    <a-col :span="5" class="box pointer"></a-col>
  </a-row>
</template>

<script lang="ts" setup>

//如果使用 script setup 语法糖，应该使用 defineExpose 对象内部定义需要哪些变量需要暴露给上级组件 否则无法使用ref
defineExpose({})
</script>

<style lang="less" scoped>
.boxBeforeAfter(@width:0px,@height:0px,@index:0,@top:0px,@left:0px,@color:#273352) {
  content: "";
  width: @width;
  height: @height;
  position: absolute;
  top: @top;
  left: @left;
  z-index: @index;
  background-color: @color;
}
.themeBox {
  height: 50px;
  .box {
    background-color: #f0f2f5;
    border-radius: 4px;
    box-shadow: 0 1px 2.5px #1a17172e;
    overflow: hidden;
  }
  .box:nth-child(1):before {
    .boxBeforeAfter(33.333333%, 100%, 2, 0px, 0px);
  }
  .box:nth-child(1):after {
    .boxBeforeAfter(100%, 11px, 1, 0px, 0px, #fff);
  }
  .box:nth-child(2):before {
    .boxBeforeAfter(100%, 11px, 2, 0px, 0px);
  }
  .box:nth-child(2):after {
    .boxBeforeAfter(33.333333%, 100%, 1, 0px, 0px, #fff);
  }
  .box:nth-child(3):before {
    .boxBeforeAfter(100%, 11px, 1, 0px, 0px);
  }
  .box:nth-child(4):before {
    .boxBeforeAfter(24%, 100%, 2, 0px, 0px);
  }
  .box:nth-child(4) {
    background-color: #fff;
  }
  .box:nth-child(4):after {
    .boxBeforeAfter(60%, 70%, 1, 30%, 40%, #f0f2f5) !important;
  }
}
</style>
