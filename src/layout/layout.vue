<template>
	<!-- 侧边栏 -->
	<a-layout-sider breakpoint="lg" collapsed-width="80" v-model="collapsed" >
		<div class="logo">
			<img src="../assets/LOGOs.png" style="width: 100%; height: 100%;" v-if="!collapsed">
			<img src="../assets/logo1s.png" style="width: 100%; height: 100%;" v-if="collapsed">
		</div>
		<a-menu theme="dark" mode="inline" :default-selected-keys="['4']">
			<a-menu-item :key="item.name" v-for="(item,index) in basics" @click="asideClick(item)" v-if="item.show">
				<a-icon :type="item.icon" />
				<span class="nav-text">{{item.title}}</span>
			</a-menu-item>
			<a-sub-menu v-for="(item,index) in recombination" :key="index" v-if="item.show">
				<span slot="title">
					<a-icon :type="item.icon" /><span>{{item.title}}</span>
				</span>
				<a-menu-item v-if="_item.show" v-for="(_item,_index) in item.children" :key="_item.name" @click="asideClick(_item)">
					{{_item.title}}
				</a-menu-item>
			</a-sub-menu>
		</a-menu>
	</a-layout-sider>
</template>

<script>
	import aside from "../menu/aside.js"
	export default {
		props: {
			coll: {
				type: Boolean, // 指定msg类型
				require: true, // 是否必传，这里如果为true，在父组件不传msg，页面会报错
				default: false // msg的默认值
			}
		},
		data() {
			return {
				basics: [],
				recombination: [],
				current: {},
				collapsed:false
			}
		},
		mounted() {
			aside.forEach(item => {
				if (item.children) {
					this.recombination.push(item)
				} else {
					this.basics.push(item)
				}
			})
		},
		watch: {
			'$route'(to, from) {
				//对路由变化进行相应
				this.current = to
				console.log(this.current)
			},
			coll: function(newVal, oldVal) {
				console.log(newVal,"121")
				this.collapsed = newVal; //newVal即是chartData
			}


		},
		methods: {
			asideClick(val) {
				console.log(val.name)
				if (this.current.name != val.name) {
					this.$router.push({
						name: val.name,
					})
				}
			},

		},
	};
</script>

<style>
	#components-layout-demo-responsive .logo {
		background: transparent !important;
		height: 40px !important;
	}

	.ant-layout-sider-zero-width-trigger {
		display: none;
		top: 0 !important;
		height: 64px !important;
		line-height: 64px !important;
	}

	.layoutBox {
		width: 100%;
		height: 100%;
	}
</style>
