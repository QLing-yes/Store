<template>
	<view class="tabd">
		<slot><text>🎨</text></slot>
		<slot name="tag">
			<text v-if="n != '0'" class="default">{{ n }}</text>
		</slot>
	</view>
</template>

<script>
export default {
	props: {
		n: {
			type: String,
			default: '0'
		}
	}
};
</script>

<style lang="scss" scoped>
.tabd {
	width: 60rpx;
	height: 60rpx;
	justify-content: center;
	align-items: center;
}
.default {
	$w: 28rpx;
	$h: 28rpx;
	font-size: 25rpx;
	border-radius: 25rpx;
	background-color: #eb5a80;
	color: aliceblue;
	padding-left: $w / 4;
	padding-right: $w / 4;
	height: $h;
	line-height: $h;
	text-align: center;
	//主要样式
	position: absolute;
	right: 0rpx;
	top: 0rpx;
}
</style>
