<template>
    <div>
        <router-link to="/d">11</router-link>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useStore } from 'vuex';
import { permissions } from '../../api/usersApi';
import { resultType } from '../../type';
let s = useStore()
permissions('/users/permissions', {},).then((res: any) => {
    console.log('res', res.data);

    console.log(s.commit('user/setRoutes', res.data));

}, e => {
    console.log('e', e);

})

</script>

<style lang="scss" scoped>
</style>