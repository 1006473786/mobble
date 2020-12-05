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
				</li>
				<li>
					<i>剩余件数{{ 1 }}</i>
					<br />
					<i>请选择 &nbsp; &nbsp;颜色 &nbsp; 尺寸 &nbsp; 加料</i>
				</li>
				<li class="imgs">
					<div
						class="imgsss"
						v-for="(item, idx) in take.thumbs"
						:key="idx"
						v-bind:class="idx == index ? 'hover' : ''"
						@click="changeco(idx)"
					>
						<img :src="item.thumb" />
						<h3>1</h3>
					</div>
				</li>
				<li>
					<h2>尺寸</h2>
					<form class="weicot_radio1">
						<input
							type="radio"
							name="p_1"
							value="01"
							id="p_11"
							v-model="size"
							@click="checked"
						/><label for="p_11">大</label>
						<input
							type="radio"
							name="p_1"
							value="02"
							id="p_22"
							v-model="size"
						/><label for="p_22">小</label>
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
					<button class="style-btn" @click="add">-</button>{{ take.num
					}}<button class="style-btn" @click="minus">+</button>
				</li>
				<li>
					<h2>留言:<input type="text" placeholder="请输入与商家协商内容" /></h2>
				</li>
				<li>总价：{{ take.total }}元</li>
				<li class="btnli02">
					<van-button
						color="linear-gradient(to right, #f8d20d, #f39213)"
						@click="addshop"
						>加入购物车</van-button
					>
					<van-button
						color="linear-gradient(to right, #f0653e, #e00d33)"
						@click="buy"
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
			show01: false,
			take: [],
			checkbox: false,
			index: 0,
			size: '',
			godata: [],
			val: {}
		}
	},
	props: {
		postshopData: {
			type: Object
		}
	},
	methods: {
		changeco(idx) {
			this.index = idx;
		},

		add() {
			this.take.num--;
			this.take.total -= Number(this.take.price);
		},
		minus() {
			this.take.num++;
			this.take.total += Number(this.take.price)
		},
		close() {
			this.show = false;
			this.$emit("showvalue", this.show)
		},
		changecolor(e) {
			var e = e || event;
			var target = e.target || e.srcElement;
			if (target.nodeName.toLowerCase() === 'button') {
				// 事件委托
				// console.log(1);
			}
		},
		changeList(index) {
			this.n = index; //this指向app
		},
		setItem() {
			localStorage.setItem("cards", JSON.stringify(this.godata));
		},
		addshop() {

			var brr = this.postshopData;
			// localStorage.setItem('card', JSON.stringify(brr));
			if (this.godata.length === 0) {
				this.godata.push(brr);
				this.setItem();
			} else {
				var flag = true;
				for (let i = 0; i < this.godata.length; i++) {
					if (this.godata[i].id === brr.id) {
						this.godata[i].num++;
						this.godata[i].total = this.godata[i].num * this.godata[i].price;
						// console.log(this.godata[i]);
						this.setItem();
						flag = false;
						// break;
					}
				}
				if (flag) {
					this.godata.push(brr);
					this.setItem();
				}
			}
			this.close();
		},
		buy() {
			console.log(12);
		},
		checked(value) {
			console.log(event.target.checked)
		}
	},
	created() {
		// console.log(localStorage.cards);
		if (localStorage.cards) {
			this.godata = JSON.parse(localStorage.cards);
			for (var i = 0; i < this.godata.length; i++) {
				if (this.godata[i].id == this.take.id) {
					this.take = this.godata[i];
					break;
				}
			}
		}
		this.take = this.postshopData;
	}
}
</script>
<style lang="less" scoped>
@import "../../style/goShop.less";
.imgsss {
	background: #ccc;
}
.imgsss.hover {
	background: red;
}
</style>
