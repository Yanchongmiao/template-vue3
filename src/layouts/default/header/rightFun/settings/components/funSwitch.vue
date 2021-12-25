<template>
  <a-row>
    <a-col :span="24" class="flex flex-j-sb mb-14px" v-for="item in props.pageFun">
      <p>{{ item.name }}</p>
      <p>
        <a-input style="width: 130px;" v-model:value="item.data" v-if="item.type == 'input'"></a-input>
        <a-switch
          v-model:checked="item.data"
          :disabled="item.disabled"
          v-if="item.type == 'switch'"
          checked-children="开"
          un-checked-children="关"
        />
        <a-select
          :disabled="item.disabled"
          v-if="item.type == 'select'"
          v-model:value="item.data"
          style="width: 130px;"
          size="small"
          :options="item.list"
        ></a-select>
      </p>
    </a-col>
  </a-row>
</template>

<script lang="ts" setup>
import { defineProps, ref } from 'vue'
import { FunSwitch } from './data'
const props = defineProps<{
  pageFun: Array<FunSwitch>
}>()
</script>
<style lang="less" scoped>
</style>
