<template>
	<div class="shopCard">
		<h1>购物车</h1>
		<ul class="checkboxs">
			<li v-for="(item, index) in cardData" :key="index">
				<input
					type="checkbox"
					name="celect"
					:checked="checked"
					@click="radios(index)"
				/>
				<img :src="item.thumb" alt="1212" />
				<div>
					<h2>{{ item.title }}</h2>
					<p><button>-</button>{{ item.num }} <button>+</button></p>
					<span>单价:{{ item.price }}</span>
					<span>总价:{{ item.total }}元</span>
				</div>
				<button @click="dele">删除</button>
			</li>
		</ul>
		<div class="count">
			<P><input type="radio" :checked="checked" @click="checkeds" />全选</P>
			<p>
				<span>合计:{{ totalAll }}</span>
				<button>结算</button>
			</p>
		</div>
	</div>
</template>
<script>
import { loadShops } from '../../untils/api'
export default {
	data() {
		return {
			cardData: [],
			checked: false,
			arr: [],
			totalAll: 0
		}
	},
	methods: {
		checkeds() {
			this.checked = !this.checked;
			this.totalAll = 0;
			this.checked && this.cardData.forEach(i => {
				this.totalAll += i.total;
			})
		},
		dele(index) {
			this.cardData.splice(index, 1)
		},
		radios(index) {
			if (event.target.checked) {
				this.arr.splice(index, 1, this.cardData[index].total)
				for (var i = 0; i < this.arr.length; i++) {
					this.totalAll = this.arr.reduce((a, b) => a + b);
				}
			} else {
				var crr = this.arr.splice(index, 1, 0);
				this.totalAll -= crr;
			}
		}
	},
	mounted() {
		this.cardData = JSON.parse(localStorage.getItem("cards"));
		this.arr = Array(this.cardData.length).fill(0);

	}
}
</script>

<style lang="less" scoped>
.shopCard {
	background: #ccc;
	.checkboxs {
		display: flex;
		flex-direction: column;
		li {
			border: 1px solid #000;
			margin: 0.1rem 0;
			display: flex;
			justify-content: space-around;
			align-items: center;
			span:nth-of-type(1) {
				display: inline-block;
				text-align: center;
				margin: 0 0.1rem;
				color: #fff;
			}
			span:nth-of-type(2) {
				display: inline-block;
				width: 1.3rem;
				text-align: center;
			}
			img {
				width: 30vw;
				height: 1.5rem;
			}
			p {
				display: inline-block;
				margin: 0.1rem 0;
			}
		}
	}
	.count {
		width: 100%;
		position: fixed;
		left: 0;
		bottom: 1rem;
		background: #fff;
		border: 1px solid #ccc;
		display: flex;
		padding: 0 0.2rem;
		justify-content: space-between;
		align-items: center;
		p {
			font-size: 0.48rem;
		}
	}
}
</style>