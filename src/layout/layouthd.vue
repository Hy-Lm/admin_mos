<template>
	<!-- 头部 -->
	<div class="box">
		<div style="width: 30px; height: 30px; display: flex; margin-left: 20px;" @click="collapsed">
			<a-icon :type="collapsedshow ? 'menu-unfold' : 'menu-fold'" style="fontSize:30px" class="trigger" />
		</div>
		<div class="topAdmin">

			<div class="boxName"  @mouseenter="btnBoxShow=true" @mouseleave="btnBoxShow=false">
				<div class="nameImage">
					<!-- 用户头像 -->
					<img src="../assets/logo1s.png">
				</div>
				<!-- 用户名 -->
				<div>宋学波</div>
			</div>
			<div class="btnBox" v-if="btnBoxShow" @mouseenter="btnBoxShow=true" @mouseleave="btnBoxShow=false">
				<a-button icon="poweroff" type="primary" @click="onquit">
					退出
				</a-button>
			</div>


		</div>
	</div>
</template>

<script>
	import store from '@/store/'
	export default {
		data() {
			return {
				btnBoxShow:false,
				collapsedshow: false,
			}
		},
		mounted() {
		
		},
		watch: {
			userList: {
				handler(userList) {
					console.log(userList, "------------")
				},
				deep: true,
				immediate: true
			}
		},
		computed: {
			userList() {
				return this.$store.state.userList
			}
		},
		methods: {
			collapsed() {
				this.collapsedshow = !this.collapsedshow
				this.$emit("collapseds", this.collapsedshow)
			},
			boxNameChange(){
				this.btnBoxShow=true
			},
			onquit(){
				sessionStorage.setItem("user",'')//清除session
				this.$store.state.userList={}//清除Vuex
				this.$router.push({
					name: "login",
				})
			}
			
		}
	}
</script>

<style>
	.btnBox {
		width: 100px;
		height: 40px;
		position: absolute;
		top: 40px;
		display: flex;
		align-items: center;
		justify-content: center;
		background: #fff;
		right: 0px;
	}

	.boxName {
		display: flex;
		align-items: center;
	}

	.nameImage {
		width: 30px;
		height: 30px;
		display: flex;
		margin-right: 20px;
	}

	.nameImage img {
		width: 100%;
		height: 100%;
	}

	.topAdmin {
		position: relative;
		width: 1000px;
		height: 40px;
		margin-right: 20px;
		display: flex;
		align-items: center;
		flex-direction: row-reverse;
		font-size: 18px;
	}

	.box {
		display: flex;
		align-items: center;
		justify-content: space-between;
		background: #fff;
		width: 100%;
		height: 100%;
	}

	.trigger:hover {
		color: #1890ff;
	}
</style>
