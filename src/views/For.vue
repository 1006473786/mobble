<template>
	<div>
		<h2>vue响应式操作</h2>
		<div v-for="(item, index) in state" :key="index">
			<div class="student">
				<span>
					<span>小五</span>
				</span>
				<span
					><button @click="attence(index)">{{ item }}</button></span
				>
			</div>
		</div>
		<van-button router-like to="/goShop">go goShop页面</van-button>
		<router-view></router-view>
	</div>
</template>
<script>

export default {
	data() {
		return {
			id: 1,
			state: ['未知', '未知', '未知', '未知', '未知', '未知']
		}
	},
	methods: {
		attence: function (num) {
			if (this.state[num] == '未知') {
				this.$set(this.state, [num], '出勤')
			}
			else if (this.state[num] == '出勤') {
				this.$set(this.state, num, '请假');
			}
			else if (this.state[num] == '请假') {
				this.$set(this.state, num, '缺勤');
			}
			else if (this.state[num] == '缺勤') {
				this.$set(this.state, num, '未知');
			}
		}
	}
}
</script>
