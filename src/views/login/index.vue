<template>
    <div class="login flex">
        <div class="bg"></div>
        <div>
            <h1>登录页面</h1>
            <router-link to="userName">用户名</router-link>-------
            <router-link to="phone">手机号</router-link>
            <a-button @click="login">登录</a-button>
            <router-view />
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
let router = useRouter()
const login = () => {
    router.push('/system/home')
}
</script>

<style lang="scss" scoped>
.login {
    width: 100%;
    height: 100%;
    .bg {
        width: 50%;
        background-image: url(@/assets/images/login-bg.svg);
        background-size: auto 100%;
        background-position: 100%;
        background-repeat: no-repeat;
    }
}
// .login::before {
//     width: 100%;
//     background-image: url(@/assets/images/login-bg.svg);
//     height: 100%;
//     content: "1";
//     background-size: auto 100%;
//     background-position: 100%;
//     background-repeat: no-repeat;
//     margin-left: -50%;
// }
</style>