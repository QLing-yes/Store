<template>
	<view class="tab">
		<text class="icon">{{icon}}</text>
		<Q-dragView pclass="drag"><text class="mark">{{n}}</text></Q-dragView>
	</view>
</template>

<script>
export default {
	props: {
		icon: {
			type: String,
			default: ''
		},
		n: {
			type: String,
			default: '0'
		}
	}
};
</script>

<style lang="scss">
.tab {
	@include tab;
	background-color: #ffffff;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	//控制气泡初始位置
	.drag {
		position: absolute;
		top: 0rpx;
		right: 0rpx;
	}
	.mark {
		// width: 50rpx;
		height: 30rpx;
		padding-left: 10rpx;
		padding-right: 10rpx;
		font-size: 25rpx;
		font-weight: 500;
		color: #ffffff;
		background-color: #eb5a80;
		border-radius: 20rpx;
		text-align: center;
		line-height: 30rpx;
	}
}
</style>
