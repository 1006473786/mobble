<template>
	<div>
		<div
			v-for="(item, index) in question"
			:key="index"
			style="padding-top: 10px"
		>
			<div v-if="item.item">
				<div
					v-for="(item3, index3) in item.item"
					:key="index3"
					@click="chooseHobbied(item3)"
					style="margin-right: 20px"
				>
					<input type="checkbox" :value="item3" v-model="checkbox" /><span>
						{{ item3 }}</span
					>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			checkbox: [],
			question: [
				{
					title: "2、请选择你的爱好",
					item: [
						'打球', '读书', '画画', '游泳', '跑步'
					]
				}
			],
		};
	},
	methods: {
		chooseHobbied(item) {
			var box = [];
			if (box.indexOf(item) === -1) {
				box.push(item);
				this.checkbox = box;
				console.log("点击", item, "值", box);
			} else {
				box.splice(box.indexOf(item), 1);
				console.log("box值", box);
				this.checkbox = box;
			}
		}
	}
}
</script>