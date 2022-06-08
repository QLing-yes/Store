<script>
import { getDate, EnumDate } from '@/Q-UI/common/date.js';
export default {
	//#ifdef MP
	externalClasses: ['pclass'],
	//#endif
	props: {
		//#ifndef MP
		pclass: {
			default: ''
		},
		//#endif
		user: {
			type: Array,
			default: () => ['imgSrc', '某某旗舰店']
		},
		content: {
			type: Array,
			default: () => ['content', 1654077736723]
		},
		n: {
			type: String,
			default: '0'
		}
	},
	computed: {
		jetlag() {
			const T = JSON.parse(getDate());
			let s = Math.floor((T.getTime - this.content[1]) / 1000);
			let m = Math.floor(s / 60) % 60;
			let h = Math.floor(s / 60 / 60) % 24;
			let d = Math.floor(s / 60 / 60 / 24);
			// console.log(`已过去${d}天${h}小时${m}分钟${s % 60}秒`);
			if (d > 1 && d <= 6) return '星期' + EnumDate[T.W];
			if (d <= 30 && d > 0) return `${d}天前`;
			if (h <= 24 && h > 0) return `${h}小时前`;
			if (m <= 59 && m > 0) return `${m}分钟前`;
			if (s <= 59 && s > 0) return '刚刚';

			const old = JSON.parse(getDate(new Date(this.content[1])));
			return `${old.Y}-${old.M}-${old.D}`;
		}
	}
};
</script>

<template>
	<view class="card5 pclass" :class="pclass">
		<!-- <Q-icon :n="n" pclass="img" tag="tag"> -->
		<view class="img"></view>
		<!-- </Q-icon> -->

		<view class="txtBox">
			<view class="box">
				<text class="head">{{ user[1] }}</text>
				<text class="date">{{ jetlag }}</text>
			</view>
			<text class="content">{{ content[0] }}</text>
		</view>
	</view>
</template>

<style lang="scss">
.card5 {
	background-color: #fff;
	flex-direction: row;
	padding: 10rpx;
}
.img {
	width: 100rpx;
	height: 100rpx;
	border-radius: 50rpx;
	background-color: #e7f5ff;
	margin-right: 20rpx;
}
.txtBox {
	flex: 1;
	justify-content: space-around;
	.box {
		flex-direction: row;
		justify-content: space-between;
		.head {
			font-weight: 600;
		}
		.date {
			font-size: 15rpx;
		}
	}
	.content {
		font-size: 25rpx;
	}
}
</style>
