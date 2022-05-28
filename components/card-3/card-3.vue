<template>
	<view class="box">
		<view class="img"></view>
		<text style="font-weight: 600;">Halfmoon</text>
		<text class="price">$169</text>
		<text class="more">more detail</text>
	</view>
</template>

<script></script>

<style lang="scss">
.box {
	align-items: center;
	margin-right: 30rpx;
}
.img {
	width: 244rpx;
	height: 292rpx;
	margin-bottom: 25rpx;
	border-radius: 32rpx;
	background-color: #dcd6db;
}
.price {
	flex: 1;
	color: $grey;
}
.more {
	flex: 1;
	font-size: 25rpx;
}
</style>
