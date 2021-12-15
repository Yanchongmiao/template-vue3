<template class="flex">
    <controlLeftMenu />
    <rightFun />
</template>

<script setup lang="ts">
import controlLeftMenu from './controlLeftMenu.vue'
import rightFun from './rightFun/index.vue'
</script>

<style scoped lang="less">
.headBox {
    max-width: 100%;
    height: 48px;
    border: 1px solid;
}
</style>