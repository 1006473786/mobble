<template>
	<div>
		<van-search
			v-model="value"
			show-action
			label="地址"
			placeholder="请输入搜索关键词"
			@search="onSearch"
			background="#0094ff"
		>
			<template #action>
				<div @click="onSearch">搜索</div>
			</template>
		</van-search>

		<p type="primary">宠物大军何在</p>

		<van-swipe-cell
			:key="index"
			class="shopColor"
			v-for="(item, index) in shopList"
		>
			<van-card
				:num="item.num"
				:price="item.price"
				:desc="item.desc"
				:title="item.title"
				class="goods-card"
				:thumb="item.thumb"
				@click="detialto(item, index)"
			>
				<template #tags>
					<van-tag plain type="danger">{{ item.tag1 }}</van-tag>
					<van-tag plain type="danger">{{ item.tag2 }}</van-tag>
				</template>
				<template #footer>
					<van-button size="mini">增加</van-button>
					<van-button size="mini">减少</van-button>
				</template>
			</van-card>
			<template #right>
				<van-button
					square
					text="删除"
					type="danger"
					class="delete-button"
					@click="delet"
				/>
				<van-button square type="primary" class="delete-button" text="收藏" />
			</template>
		</van-swipe-cell>
	</div>
</template>
<script>
import { loadShops } from '../untils/api'
import { Toast } from 'vant';
import Bus from '../bus';

export default {
	name: 'three',
	data() {
		return {
			shopList: [],
			value: '',
			detiallist: {},
			name: '张三',
			send: []
		}
	},
	methods: {
		async loadShop() {
			var shopList1 = await loadShops();
			this.shopList = shopList1.data[0].data;
		},
		delet(index) {
			this.$dialog.confirm({
				title: '标题',
				message: '弹窗内容'
			}).then(() => {
				this.shopList.splice(index, 1);
			}).catch(() => {
				// alert("取消")
			})
		},
		onSearch() {
			this.loadShop();
			// console.log(this.shopList);
			for (let i in this.shopList) {
				// if (this.shopList[i].id.indexOf(1)) {
				// var brr = [];
				// brr.push(this.shopList[i]);
				console.log(this.shopList[i].title);
				// }
			}
			console.log(1);
		},
		detialto(item, index) {
			var arr = localStorage.setItem("detiallist", JSON.stringify(item))
			// console.log(item);
			// this.send = item;
			// Bus.$emit('values', item)
			this.$router.push({ name: 'detial' });
		}
	},
	mounted() {
		this.loadShop();
	}
	// beforeDestroy() {
	// 	this.detialto();
	// }
}
</script>
<style lang="less" scoped>
.van-card {
	background: #0095ff6e;
	color: #fff;
	margin: 0.1rem 0;
}
.delete-button {
	height: 100%;
}
</style>