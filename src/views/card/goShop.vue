<template>
	<div>
		<div v-if="show" class="shop">
			<ul @click="changecolor">
				<li>
					<h2>
						价格:{{ take.price }}元<button class="delate" @click="close">
							X
						</button>
					</h2>
					<i>剩余件数{{ 1 }}</i
					><br />
					<i>请选择 &nbsp; &nbsp;颜色 &nbsp; 尺寸 &nbsp; 加料</i>
				</li>
				<li class="imgs">
					<div>
						<img :src="take.thumb" />
						<h3>红</h3>
					</div>
					<div>
						<img :src="take.thumb" />
						<h3>黄</h3>
					</div>
					<div>
						<img :src="take.thumb" />
						<h3>蓝</h3>
					</div>
				</li>
				<li>
					<h2>尺寸</h2>
					<form class="weicot_radio1">
						<input type="radio" name="p_1" value="01" id="p_11" /><label
							for="p_11"
							>大</label
						>
						<input type="radio" name="p_1" value="02" id="p_22" /><label
							for="p_22"
							>小</label
						>
					</form>
				</li>
				<li>
					<h2>布料</h2>
					<form class="weicot_radio">
						<input type="checkbox" name="p_1" value="01" id="p_1" /><label
							for="p_1"
							>春季</label
						>
						<input type="checkbox" name="p_1" value="02" id="p_2" /><label
							for="p_2"
							>夏季</label
						>
						<input type="checkbox" name="p_1" value="a1" id="p_a" /><label
							for="p_a"
							>秋季</label
						>
					</form>
				</li>
				<li>
					<h2>购买数量</h2>
					<button class="style-btn" @click="add">+</button>{{ take.num
					}}<button class="style-btn" @click="minus">-</button>
				</li>
				<li>
					<h2>留言:<input type="text" placeholder="请输入与商家协商内容" /></h2>
				</li>
				<li class="btnli02">
					<van-button color="linear-gradient(to right, #f8d20d, #f39213)"
						>加入购物车</van-button
					>
					<van-button color="linear-gradient(to right, #f0653e, #e00d33)"
						>立即购买</van-button
					>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
import axios from 'axios'
import { Checkbox } from 'vant'
export default {
	data() {
		return {
			show: true,
			skudata: [],
			show01: false,
			take: [],
			checkbox: false,
			checkboxGroup: [],
		}
	},
	methods: {
		getshop() {
			axios.get("./json/shopdata.json").then(res => {
				var arr = res.data[0].sku;
				this.skudata = arr;
				console.log(this.skudata);
			})
		},
		add() {
			this.take.num++;
		},
		minus() {
			this.take.num--;
		},
		// onAddCartClicked(data) { //加入购物车
		// 	// this.$toast('add cart:' + JSON.stringify(data));
		// },
		// onBuyClicked(data) { //立即购买
		// 	// this.$toast('buy:' + JSON.stringify(data));
		// 	// console.log(JSON.stringify(data))
		// },
		// show1() {
		// 	this.show = !this.show;
		// },
		close() {
			this.show = false;
			this.$emit("showvalue", this.show)
		},
		changecolor(e) {
			var e = e || event;
			var target = e.target || e.srcElement;
			if (target.nodeName.toLowerCase() === 'button') {
				console.log(1);
			}
		}
	},
	mounted() {
		this.getshop();
		var arr = sessionStorage.getItem('detiallist')
		this.take = JSON.parse(arr);
		console.log(this.take);
	}
}
</script>
<style lang="less" scoped>
.weicot_radio input[type="checkbox"] {
	display: none;
}
.weicot_radio input[type="checkbox"] + label {
	padding: 0.2em 1em;
	border: 1px solid #cccccc;
	// /*  border-radius:0.5em;*/
	color: #999;
	border-radius: 5px;
	margin: 0 0.1rem;
	zoom: 1.8;
}
.weicot_radio input[type="checkbox"]:checked + label {
	padding: 0.2em 1em;
	border: 1px solid #3399cc;
	/* border-radius: 0.5em;*/
	background: #3399cc;
	color: #ffffff;
	zoom: 1.8;
}

.weicot_radio1 input[type="radio"] {
	display: none;
}
.weicot_radio1 input[type="radio"] + label {
	padding: 0.2em 1em;
	border: 1px solid #cccccc;
	// /*  border-radius:0.5em;*/
	color: #999;
	border-radius: 5px;
	margin: 0 0.1rem;
	zoom: 1.8;
}
.weicot_radio1 input[type="radio"]:checked + label {
	padding: 0.2em 1em;
	border: 1px solid #3399cc;
	/* border-radius: 0.5em;*/
	background: #3399cc;
	color: #ffffff;
	zoom: 1.8;
}
.btn_02 {
	border-radius: 0.3rem;
	text-align: center;
}
i {
	list-style: none;
	color: #fff;
}
h2 .delate {
	position: absolute;
	right: 0;
	border: 0;
	color: #ccc;
	opacity: 0.5;
}
.style-btn {
	width: 1rem;
	height: 0.8rem;
	border: 1px solid #fff;
	border-radius: 0.3rem;
	background: rgba(17, 1, 1, 0.1);
	color: #000;
}
.shop {
	width: 100%;
	background: #fff;
	position: fixed;
	bottom: 0;
	border: 1px solid #ccc;
	border-radius: 20px;
	padding: 0 0.3rem;
	ul {
		li {
			padding: 0.2rem 0;
			border-bottom: 1px solid #fff;
			button {
				margin: 0 0.3rem;
			}
		}
		.imgs {
			display: flex;
			justify-content: space-around;
			div {
				background: #ccc;
				padding: 0.1rem 0.1rem;
				display: flex;
				flex-direction: column;
				align-items: center;
				img {
					width: 25vw;
				}
			}
		}
	}
}
.btnli02 {
	display: flex;
	justify-content: center;
	button {
		width: 40vw;
	}
	button:nth-child(2) {
		margin-left: -0.5rem;
	}
}
</style>