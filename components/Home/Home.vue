<template>
	<list>
		<cell>
			<view class="title">
				<text class="text">Most Popular</text>
				<text class="icon">&#xe60a;</text>
			</view>
			<scroll-view class="content" :scroll-x="true" show-scrollbar="false">
				<card-1 :bj="img2[i % 2]" :src="img[i % 2]" v-for="(item, i) in 20"></card-1>
			</scroll-view>
		</cell>
		<cell>
			<view class="title" style="margin-bottom: 60rpx;">
				<text class="text">Lowest Prices</text>
				<text class="icon">&#xe60a;</text>
			</view>
			<scroll-view class="content" :scroll-x="true" show-scrollbar="false">
				<image class="img" :lazy-load="true" :draggable="false" mode="scaleToFill" :src="img3[i % 2]" v-for="(item, i) in 20"></image>
			</scroll-view>
		</cell>
	</list>
</template>

<script>
export default {
	data() {
		return {
			img: ['../../static/card/y2.png', '../../static/card/y4.png'],
			img2: ['../../static/card/y1.png', '../../static/card/y3.png'],
			img3: ['../../static/card/y5.png', '../../static/card/y6.png']
		};
	},
	onLoad() {},
	onReady() {},
	methods: {

	},
	computed: {}
};
</script>

<style lang="scss">
.img {
	$cardH: 336rpx * 2;
	$cardW: 186rpx * 2;
	width: $cardW;
	height: $cardH;
	margin-left: 35rpx;
	margin-right: 20rpx;
}
.title {
	flex-direction: row;
	justify-content: space-between;
	padding: 35rpx;
	padding-bottom: 0rpx;
	margin-top: 50rpx;
	& > .text {
		font-size: 35rpx;
		font-weight: 600;
	}
	& > .icon {
		font-size: 35rpx;
		font-weight: 600;
	}
}
.content {
	flex-direction: row;
	//#ifndef APP-PLUS
	white-space: nowrap;
	//#endif
}
</style>
