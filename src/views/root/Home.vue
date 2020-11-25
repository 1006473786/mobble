<template>
	<div>
		<div class="box">
			<ul class="showView" v-if="isShow">
				<li v-for="(item, index) in titlelist" :key="index">
					<router-link :to="item.path">
						{{ item.name }}
					</router-link>
				</li>
			</ul>
		</div>
		<div class="boxview">
			<router-view></router-view>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			titlelist: [
				{ id: 1, name: "推荐", path: './one' },
				{ id: 2, name: "首页", path: './two' },
				{ id: 3, name: "热点", path: './three' },
				{ id: 4, name: "焦点", path: './for' },
				{ id: 5, name: "喜欢", path: './one' },
				{ id: 6, name: "图片", path: './two' },
				{ id: 7, name: "关注", path: './three' },
				{ id: 8, name: "视频", path: './for' },
				{ id: 9, name: "感兴趣", path: './one' },
				{ id: 10, name: "哇瑟", path: './two' },
				{ id: 11, name: "哇呀呀", path: './one' }
			],
			isShow: false
		}
	},
	methods: {
		loading() {
			this.isShow = true;
		}
	},
	created() {
		this.loading()
	}
}
</script>
<style scoped>
.box {
	position: fixed;
	top: 0;
	left: 0;
	background: #0094ff;
	z-index: 999;
	width: 100%;
	overflow-x: auto;
}
.showView {
	height: 1rem;
	width: 100%;
	display: flex;
	align-items: center;
	flex-wrap: nowrap;
}
.boxview {
	margin-top: 1rem;
}
li {
	white-space: nowrap;
	margin: 0 0.2rem;
	font-size: 0.35rem;
}
li > a {
	color: #fff;
	line-height: 1rem;
	height: 1rem;
}
li > a:hover {
	border-bottom: 0.05rem solid #fff;
}
</style>
