<template>
	<view class="card">
		<view class="left"></view>
		<view class="right">
			<text class="t1">Halfmoon</text>
			<text class="t2">Solid Male</text>
			<view class="item">
				<text class="t3">$169</text>
				<view class="but">
					<text class="ra" @click="num > 0 ? num-- : num">-</text>
					<text class="num">{{ num }}</text>
					<text class="ra" @click="num < 100 ? num++ : num">+</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			num: 1
		};
	},
	props: {},
	mounted() {},
	methods: {},
	computed: {}
};
</script>

<style lang="scss">
$m: 20rpx;
$h: 254rpx;
.card {
	margin-top: 30rpx;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	border-radius: 32rpx;
	background-color: #ffffff;
	& > .left {
		border-radius: 32rpx;
		// border-radius: inherit;
		background-color: #eeeff4;
		width: $h - $m * 2;
		height: $h - $m * 2;
		margin: $m;
		//#ifndef APP-PLUS
		content-visibility: auto;
		//#endif
	}
	& > .right {
		margin: $m;
		flex: 1;
		// height: inherit;
		height: $h - $m * 2;
		//#ifndef APP-PLUS
		content-visibility: auto;
		//#endif
		& > .t1 {
			// margin-top: $m;
			font-weight: 600;
		}
		& > .t2 {
			font-size: $m;
			color: $grey;
			flex: 1;
		}
		& > .item {
			flex-direction: row;
			align-items: center;
			& > .t3 {
				font-weight: 600;
				font-size: 30rpx;
				color: $grey;
				flex: 1;
			}
			& > .but {
				width: 164rpx;
				height: 66rpx;
				border-radius: 16rpx;
				flex-direction: row;
				justify-content: center;
				align-items: center;
				background-color: #eeeff4;
				padding: 20rpx;
				& > .ra {
					font-weight: 600;
					background-color: #ffffff;
					$hw: 35rpx;
					width: $hw;
					height: $hw;
					line-height: $hw;
					text-align: center;
					border-radius: 10rpx;
				}
				& > .num {
					font-weight: 600;
					font-size: 30rpx;
					margin: 10rpx;
				}
			}
		}
	}
}
</style>
