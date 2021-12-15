<template>
  <a-breadcrumb style="margin-left: 16px;">
    <!-- <a-breadcrumb-item>Ant Design Vue</a-breadcrumb-item> -->
    <a-breadcrumb-item>{{ bread.name }}</a-breadcrumb-item>
    {{ us.$state.breadData }}
    <!-- <a-breadcrumb-item>
      <a>{{ us.menuActiveIndex }}</a>
      <template #overlay v-if="bread.children && bread.children.length > 0">
        <a-menu>
          <a-menu-item v-for="(item, key) in bread.children">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://www.alipay.com/"
            >{{ item.name }}</a>
          </a-menu-item>
        </a-menu>
      </template>
    </a-breadcrumb-item>-->
    <!-- <a-breadcrumb-item>Button</a-breadcrumb-item> -->
  </a-breadcrumb>
</template>

<script lang="ts" setup>import { useProfileStore } from '@/pinia/use';
import { Menu } from '@/type';
const us = useProfileStore()
// console.log(us.$state.breadData);
let bread = us.$state.breadData
// let activeRoute = us.$state.menuList.filter((i: Menu) => i.path == us.$state.menuActiveIndex)
// console.log(activeRoute);

  // menuList
</script>

<style scoped lang="less">
</style>
