<template>
	<a-layout>
		<a-layout-sider v-model:collapsed="useMenu.$state.openMenu" :trigger="null" collapsible>
			<div class="logo flex flex-a-c">
				<img src="https://vvbin.cn/next/assets/logo.63028018.png" />
				<transition name="container">
					<p v-if="!useMenu.$state.openMenu" class="h100 flex1 flex flex-a-c text-white">
						<b class="truncate ...">Admin</b>
					</p>
				</transition>
			</div>
			<Menu />
		</a-layout-sider>
		<a-layout>
			<a-layout-header class="bg-white" style=" padding: 0 0 0 10px">
				<menu-unfold-outlined
					v-if="useMenu.$state.openMenu"
					class="trigger"
					@click="() => (useMenu.$state.openMenu = !useMenu.$state.openMenu)"
				/>
				<menu-fold-outlined
					v-else
					class="trigger"
					@click="() => (useMenu.$state.openMenu = !useMenu.$state.openMenu)"
				/>
			</a-layout-header>
			<a-layout-content
				:style="{
					margin: '24px 16px',
					padding: '24px',
					background: '#fff',
					minHeight: '280px',
				}"
			>
				<router-view></router-view>
			</a-layout-content>
		</a-layout>
	</a-layout>
</template>
<script lang="ts" setup>
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons-vue'
import { computed, ref } from 'vue'
import Menu from './menu/index.vue'
import { http } from '../../http'
import { useProfileStore } from '@/pinia/use'
let useMenu = useProfileStore()
</script>

<style lang="less">
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
</style>
