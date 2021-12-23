<template>
  <div class="flex flex-a-c rightHeaderFunBox">
    <screenAndmsg />
    <language />
    <user />
    <settings />
  </div>
</template>

<script lang="ts" setup>
import screenAndmsg from './msg/screenAndmsg.vue'
import language from './language.vue'
import settings from './settings/setting.vue'
import user from './user.vue'
</script>

<style scoped lang="less">
.rightHeaderFunBox {
  height: 100%;
}
</style>
