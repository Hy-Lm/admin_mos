<template>
	<a-layout id="components-layout-demo-responsive" >
		<layout :coll="collapsed"></layout>
		<a-layout>
			<a-layout-header :style="{ background: '#fff', padding: 0 }" >
				<layouthd @collapseds="collapseds"></layouthd>
			</a-layout-header>
			<a-layout-content :style="{ margin: '24px 16px 0' }">
				<div :style="{ padding: '24px', background: '#fff', minHeight: '100%' }">
					<router-view/>
				</div>
			</a-layout-content>
			<a-layout-footer style="textAlign: center">
				 Copyright © 北京辉达时代网络技术有限公司
			</a-layout-footer>
		</a-layout>
	</a-layout>
</template>
<script>
	import layout from './layout.vue'
	import layouthd from "./layouthd.vue"
	export default {
		components: {
			layout,
			layouthd
		},
		data(){
			return{
				collapsed: false,
			}
		},
		methods:{
			collapseds(val){
				this.collapsed=val
				console.log(this.collapsed)
			}
		}
	};
</script>

<style>
	#components-layout-demo-responsive .logo {
		height: 32px;
		background: rgba(255, 255, 255, 0.2);
		margin: 16px;
	}

	.ant-layout.ant-layout-has-sider {
		height: 100vh;
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
	
	#components-layout-demo-custom-trigger .logo {
	  height: 32px;
	  background: rgba(255, 255, 255, 0.2);
	  margin: 16px;
	}
</style>
