<template>
	<a-layout>
		<a-layout-sider v-model:collapsed="useMenu.$state.openMenu" :trigger="null" collapsible>
			<div class="logo flex flex-a-c">
				<img src="@/assets/images/logo.png" />
				<transition name="container">
					<p v-if="!useMenu.$state.openMenu" class="h100 flex-1 flex flex-a-c text-white">
						<b class="truncate ...">Admin</b>
					</p>
				</transition>
			</div>
			<Menu />
		</a-layout-sider>
		<a-layout>
			<a-layout-header class="bg-white flex flex-a-c" style="padding:0 10px;height: 48px;">
				<Header />
			</a-layout-header>
			<a-layout-header class="bg-white tabsBox flex flex-j-sb">
				<tabs />
			</a-layout-header>
			<a-layout-content
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
				<router-view class="animate__animated animate__bounceInDown"></router-view>
			</a-layout-content>
		</a-layout>
	</a-layout>
</template>
<script lang="ts" setup>
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons-vue'
import Menu from './menu/index.vue'
import { useProfileStore } from '@/pinia/use'
import tabs from './tabs/index.vue'
import Header from './header/index.vue';
import { reactive, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
let useMenu = useProfileStore()
console.log(useMenu.$state.keepAliveList);

</script>

<style lang="less">
.ant-layout-sider-collapsed {
	width: 40px !important;
	flex: unset !important;
	min-width: 40px !important;
	.el-menu--collapse {
		display: flex;
		justify-content: center;
		flex-direction: column;
		.el-menu-item,
		.el-sub-menu__title {
			padding: 0 !important;
			margin: 0 !important;
			display: flex;
			justify-content: center;
			div {
				padding: 0px !important;
				display: flex !important;
				justify-content: center !important;
				align-items: center !important;
			}
		}
	}
}
.ant-layout {
	height: 100%;
}
#components-layout-demo-custom-trigger .trigger {
	font-size: 18px;
	line-height: 64px;
	padding: 0 24px;
	cursor: pointer;
	transition: color 0.3s;
}
#components-layout-demo-custom-trigger .trigger:hover {
	color: #1890ff;
}
.ant-layout-sider-children {
	.logo {
		// width: 210px;
		height: 48px;
		// background: rgba(255, 255, 255, 0.3);
		margin: 10px 6px;
		img {
			width: 32px;
			height: 32px;
		}
		p {
			margin: 0px;
			font-size: 18px;
			font-weight: 700;
			transition: all 0.5s;
			line-height: normal;
			padding-left: 20px;
			animation: fade-in; /*动画名称*/
			animation-duration: 0.3s; /*动画持续时间*/
			-webkit-animation: fade-in 0.3s; /*针对webkit内核*/
			transform: scale(1, 1);
		}
	}
}
.tabsBox {
	padding: 2px 10px;
	height: 34px;
	border-top: 1px solid rgba(0, 0, 0, 0.06);
	overflow: hidden;
}
</style>
