<template>
  <div>
    <br />
    <br />
    <br />
    <h1>用户名登录</h1>
    <!-- <router-link to="/d">11--{{ profileStore.userName }} --- {{ profileStore.count }}</router-link> -->
  </div>
</template>

<script setup lang="ts">
import { permissions } from '@/api/usersApi';
import { useProfileStore } from '@/pinia/use'
// import { axiosRequestStore } from "@/pinia/axiosRequest";
const profileStore = useProfileStore() // 获取到store的实例
// const axi = axiosRequestStore()
// let a = setInterval(() => {
//     clearInterval(a)
//     profileStore.ac()
//     // axi.$state.c = 1
// }, 1000);
// let id = uuid()
// permissions('/json', {},
//     {
//         requestOptions: {
//             id: id
//         }
//     }
// ).then(res => {
//     console.log(res);

// }, e => {
//     console.log(e);

// })
// setTimeout(() => {
//     useStore.cancelSingle({ msg: '取消啊啊啊', id: id })

// }, 0);
</script>

<style lang="scss" scoped>
</style>