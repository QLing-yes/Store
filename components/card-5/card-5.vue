<template>
	<view class="card5">
		<view class="img"></view>
		<view class="txtBox">
			<view class="box">
				<text class="head">{{ user[1] }}</text>
				<text class="date">{{ jetlag }}</text>
			</view>
			<text class="content">{{ content[0] }}</text>
		</view>
	</view>
</template>

<script>
import { getDate, EnumDate } from '@/Q-UI/common/date.js';
export default {
	props: {
		user: {
			type: Array,
			default: () => ['imgSrc', '某某旗舰店']
		},
		content: {
			type: Array,
			default: () => ['content', 1654077736723]
		}
	},
	computed: {
		jetlag() {
			const T = JSON.parse(getDate());
			let s = Math.floor((T.getTime - this.content[1]) / 1000);
			let m = Math.floor(s / 60) % 60;
			let h = Math.floor(s / 60 / 60) % 24;
			let d = Math.floor(s / 60 / 60 / 24);

			if (d > 1 && d <= 7) return '星期' + EnumDate[T.W];
			if (d <= 30 && d > 0) return `${h}天前`;
			if (h <= 24 && h > 0) return `${h}小时前`;
			if (m <= 59 && m > 0) return `${m}分钟前`;
			if (s <= 59 && s > 0) return '刚刚';

			const old = JSON.parse(getDate(new Date(this.content[1])));
			return `${old.Y}-${old.M}-${old.D}`;
		}
	}
};
</script>

<style lang="scss">
.card5 {
	flex-direction: row;
	background-color: #fff;
	padding: 20rpx;
	$wh: 120rpx;
	& > .img {
		background-color: cadetblue;
		margin-right: 20rpx;
		width: $wh;
		height: $wh;
		border-radius: $wh;
	}
	& > .txtBox {
		flex: 1;
		justify-content: space-around;
		& > .content {
			color: #495057;
			font-size: 30rpx;
		}
	}
	.box {
		flex-direction: row;
		justify-content: space-between;
		& > .head {
			font-weight: 600;
			font-size: 35rpx;
		}
		& > .date {
			color: #868e96;
			font-size: 20rpx;
		}
	}
}
</style>
