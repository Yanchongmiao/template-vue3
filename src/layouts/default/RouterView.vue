<template>
	<a-layout style="min-height: 100vh">
		<!-- 1 左侧菜单 右侧content -->
		<!-- 2 顶部header 左侧菜单 右侧content -->
		<a-layout-sider
			:collapsedWidth="46"
			v-if="useMenu.navMode == 1"
			v-model:collapsed="useMenu.openMenu"
			collapsible
		>
			<div class="logo flex flex-a-c">
				<img class="w-32px h-32px ml-7px mr-10px" src="@/assets/images/logo.png" />
				<transition name="container">
					<p class="truncate text-16px font-700 text-white">
						<b class="truncate ...">Admin</b>
					</p>
				</transition>
			</div>
			<Menu />
		</a-layout-sider>
		<a-layout-header v-if="useMenu.navMode !== 1" class="flex h-48px headerBox p-0">
			<div class="logo logoHover flex flex-a-c w-210px pointer" @click="homePush">
				<img class="w-32px h-32px ml-7px mr-10px" src="@/assets/images/logo.png" />
				<transition name="container">
					<p class="truncate text-16px font-700">
						<b class="truncate ...">Admin</b>
					</p>
				</transition>
			</div>
			<Header />
		</a-layout-header>
		<a-layout class="flex flex-col">
			<a-layout-header v-if="useMenu.navMode == 1" class="flex headerBox p-0 h-48px">
				<Header />
			</a-layout-header>
			<a-layout>
				<!-- class="animated animate__slideInDown" -->
				<a-layout-sider
					:collapsedWidth="46"
					v-if="useMenu.navMode == 2"
					v-model:collapsed="useMenu.openMenu"
					collapsible
				>
					<Menu />
				</a-layout-sider>
				<a-row class="flex flex-col w-1/1 flex-1">
					<a-layout-header class="bg-white tabsBox flex flex-j-sb px-10px py-2px h-34px">
						<tabs />
					</a-layout-header>
					<a-layout-content
						class="flex flex-col flex-1"
						:style="{
							margin: '10px',
							padding: '10px',
							background: '#fff',
							minHeight: '280px',
						}"
					>
						<!-- 1.切换到非缓存页面在切换回来时 缓存失效 -->
						<!-- <router-view v-slot="{ Component }">
					<keep-alive v-if="$route.meta.keepAlive">
						<component :is="Component"></component>
					</keep-alive>
					<component :is="Component" v-if="!$route.meta.keepAlive"></component>
						</router-view>-->
						<!-- 2..vue文件不能使用setup语法题 -->
						<!-- <router-view v-slot="{ Component }">
					<keep-alive :include="[]">
						<component :is="Component"></component>
					</keep-alive>
						</router-view>-->
						<div class="flex-1">
							<router-view class="animate__animated animate__bounceInDown"></router-view>
						</div>
					</a-layout-content>
					<a-layout-footer style="text-align: center">Ant Design ©2021 Created by Ant UED</a-layout-footer>
				</a-row>
			</a-layout>
		</a-layout>
	</a-layout>
</template>
<script lang="ts" setup>
import Menu from './menu/index.vue'
import Header from './header/index.vue';
import tabs from './tabs/index.vue'
import { useProfileStore } from '@/pinia/use';
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
let useMenu = useProfileStore()
const router = useRouter()
const homePush = () => {
	router.push('/system/home')
}
</script>
<style lang="less" scoped>
.headerBox {
	background-color: @header-dark-bg-color;
	p {
		color: @header-dark-font-color !important;
	}
}
.ant-layout-sider-children {
	.logo {
		// width: 210px;
		height: 48px;
		// background: rgba(255, 255, 255, 0.3);
		// margin: 10px 0px;
		img {
			width: 32px;
			height: 32px;
		}
		p {
			transition: all 0.5s;
		}
	}
}
.logoHover {
	&:hover {
		background-color: @header-dark-bg-hover-color;
		transition: all 0.5s;
	}
}
</style>
<style lang="less">
.ant-layout-sider {
	animation-duration: 0.3s;
}
#components-layout-demo-side .logo {
	height: 32px;
	margin: 16px;
	background: rgba(255, 255, 255, 0.3);
}

.site-layout .site-layout-background {
	background: #fff;
}
[data-theme="dark"] .site-layout .site-layout-background {
	background: #141414;
}
.tabsBox {
	border-top: 1px solid rgba(0, 0, 0, 0.06);
	overflow: hidden;
}
</style>
