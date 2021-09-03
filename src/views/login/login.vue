<template>
	<div>
		<div class='soda'>
			<div class="sodaBox">
				<div class="sodaBoxTop">
					<div style="width: 30px; height: 30px; margin-right: 10px;">
						<img src="../../assets/logo1s.png" style="width: 100%; height: 100%;">
					</div>
					辉达时代管理系统
				</div>
				<div class="sodaInput">
					<a-input placeholder="请输入用户名" size="large" v-model="userName">
						<a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)" />
					</a-input>
					<a-input type="password" v-model="password" placeholder="请输入密码" size="large">
						<a-icon slot="prefix" type="lock" style="color:rgba(0,0,0,.25)" />
					</a-input>
				</div>
				<div class="sodaCheckbox">
					<a-checkbox @change="onChange">
						自动登录
					</a-checkbox>
				</div>
				<div class="sodaBtn">
					<a-button type="primary" block size="large" @click="register">
						登录
					</a-button>
				</div>
				<div class="Copyright">
					Copyright © 北京辉达时代网络技术有限公司
				</div>
			</div>
		</div>

	</div>

</template>

<script>
	export default {
		data() {
			return {
				checked: false,
				userName:'',//账号
				password:""//密码
			}
		},
		mounted() {
			const floatOn = (options) => {
				let
					el = options.el,
					x = options.x,
					xIsPos = options.xIsPos || Math.floor(Math.random()),
					updateX = options.updateX || Math.floor(Math.random()),
					curTop = parseInt(el.style.top),
					curLeft = parseInt(el.style.left);

				if (curTop > -50) {
					el.style.top = `${--curTop}px`;
				} else {
					el.style.top = `${innerHeight + 20}px`;
				}

				if (updateX) {
					if (xIsPos) {
						if (curLeft > x + 10) {
							xIsPos = false;
						} else {
							el.style.left = `${++curLeft}px`;
						}
					} else {
						if (curLeft < x - 10) {
							xIsPos = true;
						} else {
							el.style.left = `${--curLeft}px`;
						}
					}
				}

				updateX = updateX ? false : true;

				requestAnimationFrame(floatOn.bind(null, {
					el: el,
					x: x,
					xIsPos: xIsPos,
					updateX: updateX
				}));
			};

			class Bubble {
				constructor(target, i) {
					this.bubble = document.createElement('div');
					this.bubble.classList.add('bubble');
					this.x = Math.floor(Math.random() * innerWidth);
					this.y = Math.floor(Math.random() * innerHeight);
					this.scale = Math.random();
					this.pos = Math.round(Math.random());

					this.bubble.style.top = `${this.y}px`;
					this.bubble.style.left = `${this.x}px`;
					this.bubble.style.transform =
						`translateZ(${this.pos ? '' : '-'}${this.scale.toFixed(2) * 1000}px)`;

					setTimeout(() => {
						target.appendChild(this.bubble);
					}, i * 50);
					setTimeout(floatOn.bind(null, {
						el: this.bubble,
						x: this.x
					}), i * 50);
				}
			}

			for (let i = 0; i < 100; i++) {
				new Bubble(document.querySelector('.soda'), i);
			}
		},
		methods: {
			register(){//登录
			// 获取到账号密码后向后端请求数据，并将数据返回的数据保存在vuex 和  session 中
				if(this.userName=="admin" || this.password==123456){
					sessionStorage.setItem("user",this.userName) //将数据保存在session中
					// console.log(sessionStorage.getItem("user")) //读取数据
					this.$store.state.userList={
						userName:this.userName,
						password:this.password
					}
					this.$store.state.showPost=true
					// console.log(this.$store.state.showPost,"1213")
					console.log(this.$store.state.userList,"1213")
					this.$router.push({
						name: "Home",
					})
				}
			},
			onChange(e) {
				this.checked = e.target.checked
				console.log(this.checked)
			},
		}
	};
</script>

<style>
	.Copyright {
		width: 100vw;
		color: #fff;
		position: fixed;
		bottom: 20px;
		left: 0;
	}

	.sodaBtn {
		width: 260px;
		margin: 0 auto;
	}

	.sodaCheckbox {
		width: 260px;
		height: 30px;
		display: flex;
		margin: 0 auto;
	}

	.sodaInput {
		width: 260px;
		height: 120px;
		margin: 20px auto 5px;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}

	.sodaBoxTop {
		display: flex;
		justify-content: center;
	}

	.sodaBox {
		width: 360px;
		height: 290px;
		background: #fff;
		border-radius: 20px;
		text-align: center;
		font-size: 20px;
		font-weight: 700px;
		padding: 20px;
	}

	.soda {
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #000;
		width: 100vw;
		height: 100vh;
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		perspective: 50vw;
		transform: translateZ(-99999px);
		transform-style: preserve-3d;
	}

	.bubble {
		position: absolute;
		width: 50px;
		height: 50px;
		border-radius: 50%;
		background-image: radial-gradient(rgba(255, 255, 255, 0.3) 60%, rgba(255, 255, 255, 1) 80%);
		transform: translateX(-50%);
		will-change: top, left;
	}

	.bubble::after {
		content: '';
		position: absolute;
		top: 20%;
		right: 25%;
		width: 33%;
		height: 33%;
		border: 3px solid;
		border-color: rgba(255, 255, 255, 0.8) transparent transparent transparent;
		border-radius: 50%;
		transform: rotate(45deg);
	}
</style>
