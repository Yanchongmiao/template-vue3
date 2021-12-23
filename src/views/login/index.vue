<template>
    <div class="login flex">
        <div class="bg flex flex-col">
            <div class="leftHeaderText flex flex-j-c animate__animated animate__bounceInLeft">
                <img src="@/assets/images/logo.png" />
                <p class="m0">
                    <b>Admin</b>
                </p>
            </div>

            <div
                class="leftLogo flex flex-col flex-a-c flex-j-c animate__animated animate__bounceInLeft"
            >
                <img src="@/assets/images/login-box-bg.svg" />

                <br />
                <br />
                <p class="m0">
                    <b>开箱即用的中后台管理系统</b>
                </p>
            </div>
        </div>
        <div class="LoginFormBox animate__animated animate__bounceInRight flex flex-col flex1">
            <div class="k"></div>
            <div class="box">
                <h1>
                    <b>登录</b>
                </h1>
                <router-view />
                <a-row class="flex flex-j-sb">
                    <a-col :span="7">
                        <a-button class="w100">手机号登录</a-button>
                    </a-col>
                    <a-col :span="7">
                        <a-button class="w100">二维码登录</a-button>
                    </a-col>
                    <a-col :span="7">
                        <a-button class="w100">注册</a-button>
                    </a-col>
                </a-row>
                <!-- <router-link to="userName">用户名</router-link>-------
                <router-link to="phone">手机号</router-link>
                <a-button @click="login">登录</a-button>-->
            </div>
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
        padding: 50px 0;
        .leftHeaderText {
            width: 70%;
            height: 30%;
            img {
                width: 48px;
                height: 48px;
            }
            p {
                font-size: 24px;
                color: #fff;
                text-align: left;
                margin: 8px 0 0 14px;
            }
        }
        .leftLogo {
            width: 86%;
            img {
                width: 368px;
                height: 190px;
            }
            p {
                font-size: 24px;
                color: #fff;
            }
        }
    }
    .LoginFormBox {
        .k {
            width: 70%;
            height: 30%;
        }
        .box {
            width: 400px;
            height: 40%;
            h1 {
                color: #000000d9;
                margin-bottom: 12px;
                font-size: 30px;
            }
        }
    }
}
</style>