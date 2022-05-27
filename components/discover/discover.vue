<template>
	<list class="list" show-scrollbar="false">
		<!-- #ifdef APP-NVUE  -->
		<cell>
			<!-- #endif -->
			<text class="t">Discover</text>
			<!-- #ifdef APP-NVUE  -->
		</cell>
		<!-- #endif -->
		<cell class="discover" style="z-index: 0;">
			<text class="icon">&#xe603;</text>
			<input placeholder-style="color: #ffffff;" class="input" type="text" placeholder="Search..." />
		</cell>
		<cell ref="category" class="category">
			<view class="line" :style="Variety_line"></view>
			<text class="label" @click="current = 0">All</text>
			<text class="label" @click="current = 1">Arapaima</text>
			<text class="label" @click="current = 2">Arowana</text>
			<text class="label" @click="current = 3">Betta Fish</text>
		</cell>
		<cell style="background-color: bisque;height: 300rpx;"></cell>
		<cell class="t_margin"><text class="t">Discount and Promo</text></cell>
		<cell v-for="(item, index) in 10"><card-4 class="card4"></card-4></cell>
	</list>
</template>

<script>
import { QueryAll } from '@/Q-UI/common/public.js';
// import uniScss from '@/uni.scss';
// console.log(uniScss)
let uniScss = {
	//$tabs-padding + $Margins
	margin: 30
};
export default {
	data() {
		return {
			el_label: undefined,
			current: 0
		};
	},
	onPullDownRefresh(e) {},
	mounted() {
		// this.$nextTick(() => {});
		setTimeout(async () => {
			this.el_label = await QueryAll.call(this, 'label', this.$refs.category);
			console.log(this.el_label);
		}, 300);
	},
	methods: {},
	computed: {
		Variety_line() {
			if (this.el_label == undefined) return '';
			let l = this.el_label[this.current].left - uniScss.margin / 2;
			let w = this.el_label[this.current].width;
			return `left: ${l}px;width: ${w}px;`;
		}
	}
};
</script>

<style lang="scss">
@import '@/Q-UI/common/public.scss';
.t {
	font-weight: 600;
	font-size: 35rpx;
	margin: 30rpx;
	margin-left: 0rpx;
}
//#ifdef MP
.t_margin {
	margin: 30rpx;
	margin-left: 0rpx;
}
//#endif
.list {
	margin: $tabs-padding + $Margins;
	margin-top: 0rpx;
	display: flex;
	flex-direction: column;
}
.card4 {
	margin-bottom: 16rpx;
	//#ifdef MP
	& > view {
		margin-bottom: 16rpx;
	}
	//#endif
}
.discover {
	display: flex;
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
	.line {
		position: absolute;
		width: 50rpx;
		height: 10rpx;
		bottom: 10rpx;
		border-radius: 10rpx;
		background-color: #fa618d;
		transition-property: width, left;
		transition-duration: 0.5s;
	}
	.label {
		// color: $grey;
		color: #fa608f;
	}
}
</style>
