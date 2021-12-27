<template>
	<!-- 导航模式为顶部混合模式 -->
	<a-row v-if="useMenu.navMode == 2">
		<a-layout-header class="bg-white flex flex-a-c w-1/1" style="padding:0 10px 0 0;height: 48px;">
			<div class="w-200px h-1/1 flex flex-a-c">
				<img class="w-32px h-32px ml-7px mr-10px" src="@/assets/images/logo.png" />
				<div class="flex flex-a-c">
					<span class="text-xs-20px font-700" style="color: #0960bd;">Admin</span>
				</div>
			</div>
			<Header />
		</a-layout-header>
	</a-row>
	<a-layout>
		<!-- 如果为第三中模式则不显示左侧菜单 菜单放在顶部 -->
		<a-layout-sider
			v-model:collapsed="useMenu.$state.openMenu"
			:trigger="null"
			collapsible
			v-if="useMenu.navMode !== 3"
		>
			<!-- 不为第二种模式的时候显示 -->
			<div class="logo flex flex-a-c" v-if="useMenu.navMode !== 2">
				<img src="@/assets/images/logo.png" />
				<transition name="container">
					<p
						v-if="!useMenu.$state.openMenu"
						class="h100 flex-1 flex flex-a-c text-white pl-20px m-0 text-xs-18px font-700"
					>
						<b class="truncate ...">Admin</b>
					</p>
				</transition>
			</div>
			<Menu />
		</a-layout-sider>
		<a-layout>
			<a-layout-header
				v-if="useMenu.navMode !== 2"
				class="bg-white flex flex-a-c"
				style="padding:0 10px;height: 48px;"
			>
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
// 左侧菜单样式
.el-menu-left {
	background-color: #001529 !important;
	.el-menu-item:hover {
		color: #fff;
		background-color: transparent;
	}
	.el-sub-menu:hover {
		.el-sub-menu__title {
			color: #fff !important;
			background-color: transparent;
		}
	}
	.is-active,
	.is-opened {
		.el-menu li {
			background-color: #0b2134;
		}
		.el-sub-menu__title {
			background-color: #001528 !important;
		}
	}
}
// 折叠时样式
.ant-layout-sider-collapsed {
	width: 48px !important;
	flex: unset !important;
	min-width: 48px !important;
	.el-menu--collapse {
		display: flex;
		justify-content: center;
		flex-direction: column;
		.el-menu-item,
		.el-sub-menu__title {
			// background-color="#001529"
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

	.is-active {
		background-color: black !important;
		border-left: 3px solid #0a60bd !important;
		.el-sub-menu__title {
			color: #fff !important;
			background-color: black !important;
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
			transition: all 0.5s;
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
