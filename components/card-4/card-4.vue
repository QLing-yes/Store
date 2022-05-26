<template>
	<view class="card">
		<view class="img"></view>
		<view class="content">
			<text class="title">lincah Sarawak</text>
			<view class="price" style="flex-direction: row;">
				<text class="new">$125</text>
				<text class="old">$169</text>
			</view>
		</view>
		<text class="icon tab">&#xe60f;</text>
	</view>
</template>

<script>
	
</script>

<style lang="scss">
.card {
	background-color: #ffffff;
	flex-direction: row;
	padding: 20rpx;
	border-radius: 20rpx;
	align-items: center;
	$h: 160rpx;
	& > .img {
		width: 160rpx;
		height: $h;
		border-radius: 20rpx;
		background-color: #dcd6db;
	}
	& > .content {
		flex: 1;
		height: $h;
		margin-left: 20rpx;
		margin-right: 10rpx;
		justify-content: space-around;
		.title {
			font-weight: 600;
			color: #f06595;
		}
		.new {
			padding-right: 60rpx;
			color: #f06595;
			font-weight: 600;
			font-size: 35rpx;
		}
		.old {
			color: mix($grey, #ffffff);
			font-weight: 600;
			font-size: 35rpx;
			text-decoration: line-through;
		}
	}
	& > .tab {
		@include tab;
		margin: 10rpx;
		font-size: 38rpx;
		background-color: #f06595;
		color: #ffffff;
	}
}
</style>
