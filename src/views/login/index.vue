<template>
    <div>
        <router-link to="/d">11--{{ profileStore.userName }} --- {{ profileStore.count }}</router-link>
    </div>
</template>

<script setup lang="ts">
import { permissions } from '@/api/usersApi';
import { useProfileStore } from '@/pinia/use'
import { uuid } from '@/utils/utils';
import { axiosRequestStore } from "@/pinia/axiosRequest";

import { ref } from 'vue';
const profileStore = useProfileStore() // 获取到store的实例
let useStore = axiosRequestStore()

setTimeout(() => {
    profileStore.ac()
}, 1000);
let id = uuid()
permissions('/json', {},
    {
        requestOptions: {
            id: id
        }
    }
).then(res => {
    console.log(res);

}, e => {
    console.log(e);

})
setTimeout(() => {
    useStore.cancelSingle({ msg: '取消啊啊啊', id: id })

}, 0);
</script>

<style lang="scss" scoped>
</style>