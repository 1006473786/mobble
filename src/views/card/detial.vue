<template>
	<div>
		<div class="mask" v-if="show"></div>
		<keep-alive>
			<button @click="$router.back(-1)" class="btn_jump"><</button>
		</keep-alive>
		<ul class="takes">
			<li><span>商品名称:</span>{{ take.title }}</li>
			<li><span>华丽宣言:</span>{{ take.desc }}</li>
			<img v-lazy="take.thumb" />
			<li><span>需要购买的数量:</span>{{ take.num }}<span>个</span></li>
			<li><span>商品单价:</span>{{ take.price }}<span>元</span></li>
			<li><span>商品特点:</span>{{ take.tag1 }}.<br />{{ take.tag2 }}</li>
			<li>
				<span>详情讲解:</span>
				<p></p>
			</li>
		</ul>
		<router-view></router-view>
		<van-goods-action>
			<van-goods-action-icon icon="chat-o" text="客服" @click="onClickIcon" />
			<van-goods-action-icon icon="cart-o" text="购物车" @click="onClickIcon" />
			<van-goods-action-icon icon="shop-o" text="店铺" @click="onClickIcon" />
			<van-goods-action-button
				type="danger"
				text="立即购买"
				@click="onClickButton()"
			/>
		</van-goods-action>
		<goShop v-if="show" v-on:showvalue="getvalue" />

		<!-- <button @click="goshop" class="btn_jump">goshop ></button> -->
	</div>
</template>
<script>
import shopDetail from './shopDetail'
import { Toast } from 'vant';
import Bus from '../../bus';
// import ShopDetail from './shopDetail.vue';
import goShop from './goShop.vue';
export default {
	data() {
		return {
			take: [],
			show: false,
			list: []
		}
	},
	created() {
		this.loadlocal();
	},
	mounted() {
		// 用$on事件来接收参数
		Bus.$on('values', (data) => {
			this.take = data;
		})
	},
	methods: {
		onClickIcon() {
			Toast('点击图标');
		},
		onClickButton() {
			this.show = !this.show;
			// this.show01 = !this.show01;
			// Toast('点击按钮');
		},
		loadlocal() {
			var arr = sessionStorage.getItem('detiallist');
			this.take = JSON.parse(arr);
			// console.log(this.take);
		},
		goshop() {
			this.$router.push("goShop")
		},
		getvalue(showvalue) {
			this.show = showvalue;
		}
	},
	components: {
		shopDetail,
		goShop
	}
}
</script>
<style lang="less" scoped>
.ttt {
	display: none;
}
.mask {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: #000;
	opacity: 0.7;
}
.btn_jump {
	border: 0;
	position: fixed;
	color: #ccc;
	background: rgba(0, 255, 0, 0.062);
}
.takes {
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	background: #00fff225;
	li {
		// background: #0094ff;
		// color: #fff;
		margin-bottom: 0.1rem;
		font-size: 0.36rem;
		span {
			color: #0095ff80;
		}
	}
	img {
		width: 100vw;
	}
}
</style>