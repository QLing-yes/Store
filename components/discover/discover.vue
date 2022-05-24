<template>
	<list class="list">
		<!-- #ifdef APP-NVUE  -->
		<cell>
			<!-- #endif -->
			<text class="t">Discover</text>
			<!-- #ifdef APP-NVUE  -->
		</cell>
		<!-- #endif -->
		<header class="sticky discover" style="z-index: 0;">
			<text class="icon">&#xe603;</text>
			<input placeholder-style="color: #ffffff;" class="input" type="text" placeholder="Search..." />
		</header>
		<cell class="category">
			<view class="line"></view>
			<text class="label">All</text>
			<text class="label">Arapaima</text>
			<text class="label">Arowana</text>  
			<text class="label">Betta Fish</text>
		</cell>
		<cell style="background-color: bisque;height: 300rpx;"></cell>
		<cell><text class="t">Discount and Promo</text></cell>
		<card-4 v-for="(item, index) in 10"></card-4>
	</list>
</template>

<script></script>

<style lang="scss">
@import '@/Q-UI/common/public.scss';
.t {
	font-weight: 600;
	font-size: 35rpx;
	margin: 30rpx;
	margin-left: 0rpx;
}
.list {
	margin: $tabs-padding + $Margins;
	margin-top: 0rpx;
	display: flex;
	flex-direction: column;
}
.discover {
	height: 102rpx;
	$r: 52rpx;
	border-radius: $r;
	flex-direction: row;
	align-items: center;
	background-image: linear-gradient(to bottom, #f54ea2, #ff7676);
	.icon {
		color: #ffffff;
		font-size: 40rpx;
		margin-left: $r;
	}
	.input {
		color: #ffffff;
		font-weight: 600;
		margin-left: 20rpx;
		flex: 1;
		margin-right: $r;
	}
}
.category {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	height: 90rpx;
	position: relative;
	& > .line {
		position: absolute;
		width: 50rpx;
		height: 10rpx;
		bottom: 10rpx;
		border-radius: 10rpx;
		background-color: #fa618d;
	}
	& > .label {
		// color: $grey;
		color: #fa608f;
	}
}
</style>
