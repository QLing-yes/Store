<template>
	<Q-layout class="bj" :statusbar="false">
		
		<list class="list" show-scrollbar="false">
			<Q-cell v-for="s in 20"><card-2></card-2></Q-cell>
			<Q-cell class="padd"></Q-cell>
		</list>

		<template v-slot:footer>
			<view class="footer">
				<view class="button">
					<!-- <Q-icon class="icon" n="3"> -->
					<text class="icon">&#xe60d;</text>
					<!-- </Q-icon> -->
					<text class="txt">Add to Cart</text>
				</view>
				<view style="flex: 1;align-items: center;"><text class="jg">$99</text></view>
				<view style="flex: 1;align-items: center;"><text style="font-weight: 600;">Total(3):</text></view>
			</view>
		</template>
	</Q-layout>
</template>

<script>
export default {
	data() {
		return {};
	},
	mounted() {},
	methods: {},
	computed: {}
};
</script>

<style lang="scss">
.bj {
	background-color: $bj;
}
.list {
	flex: 1;
	//#ifndef APP-PLUS
	overflow: auto;
	//#endif
	margin-left: $Margins + $tabs-padding;
	margin-right: $Margins + $tabs-padding;
}
.padd {
	padding-bottom: $Margins + $tabs-padding;
}
.footer {
	background-color: #ffffff;
	padding: 20rpx;
	border-top-left-radius: 32rpx;
	border-top-right-radius: 32rpx;
	flex-direction: row-reverse;
	align-items: center;
	justify-content: space-between;
	& > .button {
		flex-direction: row-reverse;
		background-color: #cf1669;
		// width: 400rpx;
		background-image: linear-gradient(to bottom, #f54ea2, #ff7676);
		border-radius: 30rpx;
		padding-left: 30rpx;
		justify-content: space-between;
		align-items: center;
		& .icon {
			color: #ffffff;
			background-color: #f783ac;
			@include tab;
			width: 50rpx;
			height: 80rpx;
			margin: 10rpx;
			line-height: 80rpx;
		}
		& > .txt {
			font-size: 30rpx;
			color: #ffffff;
		}
	}
}
.jg {
	font-weight: 600;
	color: #ff0000;
}
</style>
