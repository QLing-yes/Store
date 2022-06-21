<template>
	<navigation class="navigation">
		<template v-slot:left>
			<drag-mask :icon="'\ue607'" n="11"></drag-mask>
			<!-- #ifdef MP -->
			<view class="tab">
				<text class="icon">&#xe608;</text>
				<Q-dragView pclass="drag">
					<text class="mark">99+</text>
				</Q-dragView>
			</view>
			<!-- #endif -->
		</template>
		<text class="title">Home</text>
		<template v-slot:right>
			<!-- #ifndef MP -->
			<drag-mask :icon="'\ue608'" n="9"></drag-mask>
			<drag-mask :icon="'\ue609'" n="99+" @click="nav()"></drag-mask>
			<!-- #endif -->
		</template>
	</navigation>
</template>

<script>
export default {
	data() {
		return {};
	},
	onLoad() {},
	onReady() {},
	mounted() {},
	methods: {
		nav() {
			uni.navigateTo({
				url: '../../pages/cart/cart'
			});
		}
	},
	computed: {}
};
</script>

<style lang="scss">
//#ifdef MP
.navigation {
	& > view :nth-of-type(1) {
		flex-direction: row;
	}
}
//#endif
.title {
	@include title-text;
}
.tab {
	@include tab;
	background-color: #ffffff;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
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
