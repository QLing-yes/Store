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
		<cell>
			<Q-scroll-tab-x :current="current" label_name="label">
				<text class="label" @click="current = i" v-for="(item, i) in labels">{{ item }}</text>
			</Q-scroll-tab-x>
		</cell>
		<cell class="swiper">
			<swiper class="swiper" :current="current" @change="current = $event.detail.current" skip-hidden-item-layout="true">
				<swiper-item v-for="(item, i) in labels">
					<scroll-view class="item" scroll-x="true" show-scrollbar="false">
						<view class="scroll_content">
							<card-3 v-for="c in 4"></card-3>
						</view>
					</scroll-view>
				</swiper-item>
			</swiper>
		</cell>
		<cell class="t_margin"><text class="t">Discount and Promo</text></cell>
		<cell v-for="(item, index) in 10"><card-4 class="card4"></card-4></cell>
	</list>
</template>

<script>
import { QueryAll } from '@/Q-UI/common/public.js';
export default {
	data() {
		return {
			current: 0,
			labels: ['All', 'Arapaima', 'Arowana', 'Betta Fish1', 'Betta Fish2', 'Betta Fish3', 'Betta Fish4', 'Betta Fish5']
		};
	},
	onPullDownRefresh(e) {},
	mounted() {},
	methods: {},
	computed: {}
};
</script>

<style lang="scss">
@import '@/Q-UI/common/public.scss';
.swiper {
	height: 434rpx;
	.item {
		display: flex;
		flex-direction: row;
		padding-right: 30rpx;
		.scroll_content {
			display: flex;
			flex-direction: row;
			// #ifndef APP-PLUS
			white-space: nowrap;
			// #endif
		}
	}
}
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
.label {
	// color: $grey;
	color: #fa608f;
	// background-color: cadetblue;
	margin-right: 40rpx;
}
</style>
