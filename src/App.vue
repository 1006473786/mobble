<template>
	<div id="app">
		<div id="nav">
			<!-- <keep-alive include="goShop"> -->
			<router-view />
			<!-- </keep-alive> -->
			<van-tabbar v-model="active" v-if="show" class="ttt">
				<van-tabbar-item icon="home-o" router-link to="/">首页</van-tabbar-item>
				<van-tabbar-item icon="comment-o" router-link to="/about">
					详情
				</van-tabbar-item>
				<van-tabbar-item icon="setting-o" router-link to="/setting">
					设置
				</van-tabbar-item>
				<van-tabbar-item icon="friends-o" router-link to="/login">
					我的
				</van-tabbar-item>
			</van-tabbar>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			isActive: true,
			active: 0,
			show: true
		}
	},
	methods: {
		styleRed() {
			this.isActive = true
		}
	},
	created() {
		if (this.$route.name === 'detial') {
			this.show = false;
		}
	},
	watch: {
		$route(to, from) {
			// console.log(from, '--fffo');
			if (to.name === 'detial' || to.name === 'goShop') {
				this.show = false;
			} else {
				this.show = true;
			}
		}
	}
}
</script>
<style lang="less">
@import "./style/reset.less";
// #app {
// 	font-family: Avenir, Helvetica, Arial, sans-serif;
// 	-webkit-font-smoothing: antialiased;
// 	-moz-osx-font-smoothing: grayscale;
// 	text-align: center;
// 	color: #2c3e50;
// }
.blue {
	color: blue;
}
.active {
	color: red;
}
</style>
