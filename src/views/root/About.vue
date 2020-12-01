<template>
	<div>
		<div class="radio">
			<form>
				naem:<input type="radio" v-model="checkedValue" name="aa" /> age:<input
					type="radio"
					v-model="checkedValue"
					name="aa"
				/>
				num: <input type="radio" v-model="checkedValue" name="aa" />
			</form>
			<button @click="add">441621</button>
		</div>
	</div>
</template>
 
<script>
export default {
	data() {
		return {
			radioData: [
				{ value: '5年', id: '5' },
				{ value: '10年', id: '10' },
				{ value: '20年', id: '20' },
				{ value: '长期有效', id: '30' },
			],
			checkedValue: '',
			answer: [],
		};
	},
	//checkedValue的值就是选中的值，我们只需要实时监控他的值就可以了
	watch: {
		checkedValue: function () {
			this.answer = [];
			// this.answer.push(this.radioData[index]);
			// this.answer = this.$refs.getvalue.value;
			console.log(this.$refs.getvalue.checkedValue)
			// console.log(this.answer);
		}
	},
	methods: {
		add() {
			// console.log(this.$refs.getvalue.inner)
		}
	}
}
</script>