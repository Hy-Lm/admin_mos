<template>
	<div id="app">
		<direct></direct>
	</div>
</template>
<script>
	import store from '@/store/'
	import direct from "./layout/direct.vue"
	export default {
		components: {
			direct
		},
		data() {
			return {
				showPost:false
			}
		},
	
		mounted() {
			
		},
		methods:{
			
		}

	};
</script>

<style>
#app{
	width: 100vw;
	height: 100vh;
}
</style>
