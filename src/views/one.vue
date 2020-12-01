<template>
	<div>
		<ul class="recm_title">
			<li v-for="(item, index) in titlelist" :key="index">
				<h2>{{ item.titles01 }}</h2>
				<ol>
					<img
						v-for="(item1, index) in item.src"
						:key="index"
						:src="item1.src"
					/>
					<p>{{ item.ptitle }}</p>
				</ol>
				<p>
					<span>{{ item.titles02 }}</span>
					<span>{{ item.comment }}</span>
					<span>{{ item.time }}</span>
				</p>
			</li>
		</ul>
	</div>
</template>
<script>
import { apiimglists } from '../untils/api'
// import axios from 'axios'
export default {
	data() {
		return {
			titlelist: [],
			arr: ''
		}
	},
	methods: {
		// await可以直接获取promise中then的返回值
		async loading() {
			var titlelists = await apiimglists();
			this.titlelist = titlelists.data;
		}

	},
	created() {
		this.loading()
	}
}
</script>
<style lang="less" scoped>
.recm_title {
	min-height: 5rem;
	width: 100%;
	background: #0095ff25;
	margin-bottom: 2rem;

	h2 {
		margin: 0.3rem 0;
	}
	li {
		display: flex;
		flex-direction: column;
		border-top: 0.1rem solid #fff;
		border-bottom: 0.1rem solid #fff;
		ol {
			display: flex;
			justify-content: start;

			img {
				width: 30vw;
				margin: 0 0.1rem;
				height: 2rem;
			}
			p {
				white-space: wrap;
			}
		}
		p span {
			float: left;
			margin: 0.1rem 0.3rem;
			color: rgba(105, 102, 102, 0.76);
			height: 0.4rem;
			line-height: 0.4rem;
		}
	}
}
</style>