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
	</div>
</template>
<script>
import { Toast } from 'vant';

export default {
	data() {
		return {
			value: '',
		};
	},
	methods: {
		onSearch(val) {
			Toast(val);
		},
		onCancel() {
			Toast('取消');
		},
	},
}
</script>