<template>
	<div>
		<h2>商品展示</h2>
		<van-swipe :autoplay="3000">
			<van-swipe-item v-for="(image, index) in images" :key="index">
				<img v-lazy="image" class="imgs" />
			</van-swipe-item>
		</van-swipe>
		<div>
			<h2 class="statics">风景展示</h2>
			<ul class="min_Hight">
				<li class="listimage" v-for="(item, index) in lists" :key="index">
					{{ item.name }}
					<img class="imgs" :src="item.src" v-lazy="item.src" />
				</li>
				<h2>加载完毕....</h2>
			</ul>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			images: [
				'https://img.yzcdn.cn/vant/apple-1.jpg',
				'https://img.yzcdn.cn/vant/apple-2.jpg',
			],
			lists: [
				{
					id: 1,
					name: '枫叶',
					src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605723617146&di=2e45662fd983fbb5606b36d6aad53968&imgtype=0&src=http%3A%2F%2Fpic1.nipic.com%2F2009-03-09%2F200939203936123_2.jpg'
				},
				{
					id: 2,
					name: '西湖',
					src: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3420531094,1110434589&fm=26&gp=0.jpg'
				},
				{
					id: 3,
					name: '仙境',
					src: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1928605622,483186303&fm=26&gp=0.jpg'
				},
				{
					id: 4,
					name: '花园',
					src: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1779892427,1063783027&fm=26&gp=0.jpg'
				},
				{
					id: 5,
					name: '日历',
					src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605723591649&di=83c3622455568fb49ceb6d213249a270&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2Fc%2F547c26b05cf4a.jpg'
				},
				{
					id: 6,
					name: '大海',
					src: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3477640359,4104345390&fm=26&gp=0.jpg'
				},
				{
					id: 7,
					name: '美女',
					src: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2181733409,749205463&fm=15&gp=0.jpg'
				},
				{
					id: 8,
					name: '美女2',
					src: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4013900254,2912134884&fm=26&gp=0.jpg'
				},
			]
		};
	},
}
</script>
<style scoped>
.imgs {
	width: 100%;
}
.statics {
	position: sticky;
	top: 1rem;
}
.min_Hight {
	min-height: 10rem;
	margin-bottom: 3rem;
}
.listimage {
	padding: 0.2rem;
	border: 2px solid #ccc;
	border-radius: 5px;
	background: #0094ff;
	margin: 0.1rem 0;
	color: #fff;
	font-weight: 600;
	font-size: 0.36rem;
}
</style>