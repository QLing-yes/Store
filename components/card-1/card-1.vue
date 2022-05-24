<template>
	<view class="card">
		<view class="flex">
			<view class="bottom">
				<text class="text t1">Month</text>
				<text class="text t2">Halfmoon</text>
				<text class="icon">&#xe60b;&#xe60b;&#xe60b;&#xe60b;&#xe60b;</text>
				<text class="text t3">Kaiya Franci</text>
				<text class="price">$169</text>
			</view>
			<view class="top">
				<image class="film" :lazy-load="true" :draggable="false" style="position: absolute;right: -20rpx;" mode="scaleToFill" :src="bj"></image>
				<image @click="nav()" class="img" :lazy-load="true" :draggable="false" mode="scaleToFill" :src="src"></image>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	props: {
		bj: {
			type: String,
			default: ''
		},
		src: {
			type: String,
			default: ''
		}
	},
	mounted() {},
	methods: {
		nav() {
			uni.navigateTo({
				url: '../../pages/details/details'
			});
		}
	},
	computed: {}
};
</script>

<style lang="scss">
$cardH: 336rpx * 2;
$cardW: 186rpx * 2;
.card {
	height: $cardH;
	width: $cardW;
	margin-top: 50rpx;
	margin-right: 20rpx;
	margin-left: 35rpx;
	//#ifndef APP-PLUS
	display: inline-block;
	will-change: opacity; //
	content-visibility: auto; //
	//#endif
}
.flex {
	display: flex;
	flex-direction: column-reverse;
	height: $cardH;
}
$flex: 0.5; //".top" 与 ".bottom" 的占比值
$y: 200; //".top" 与 ".bottom" 的交集
.top {
	top: $y + rpx;
	height: ($cardH * $flex);
	// background-color: rgba(85, 255, 127, 0.2);
	// border-bottom: 0.1rpx solid #f54ea2;
	& > .img {
		width: $cardW;
		margin-top: -150rpx;
	}
	& > .film {
		width: $cardW;
		margin-top: -100rpx;
	}
}
.bottom {
	height: $cardH - ($cardH * $flex) + $y;
	border-radius: 30rpx;
	background-color: #ffffff;
	padding-left: 20rpx;
	.text {
		font-weight: 600;
	}
	& > .t1 {
		margin-top: $y + 20rpx;
		margin-bottom: 30rpx;
		border-radius: 16rpx;
		height: 60rpx;
		width: 140rpx;
		line-height: 60rpx;
		text-align: center;
		color: #ffffff;
		background-image: linear-gradient(to bottom, #f54ea2, #ff7676);
	}
	& > .t2 {
		flex: 1;
		font-size: 40rpx;
	}
	& > .icon {
		flex: 1;
		color: $star;
		font-size: 22rpx;
		margin-left: 0;
	}
	& > .t3 {
		flex: 1;
		font-size: 30rpx;
		margin-left: 0;
	}
	& > .price {
		flex: 1;
		color: $grey;
	}
}
</style>
