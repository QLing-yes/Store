<template>
	<!-- #ifdef APP-PLUS -->
	<!-- 只要一个简单的区域滚动 -->
	<list>
		<cell>
			<!-- #endif -->
			<view class="body">
				<!-- user -->
				<view class="user">
					<view class="img"></view>
					<view class="txt">
						<text class="name">Ling凌沫</text>
						<text class="uid">UID:12423419478</text>
						<!-- 				<view class="counts">
					<text class="follow">关注 999</text>
					<text class="line">|</text>
					<text class="follower">粉丝 999</text>
				</view> -->
					</view>
					<!-- #ifndef MP -->
					<text class="icon">&#xe613;</text>
					<!-- #endif -->
				</view>
				<!-- counts -->
				<view class="counts">
					<view class="item" v-for="(item, index) in counts">
						<text class="t1">{{ item.num }}</text>
						<text class="t2">{{ item.name }}</text>
					</view>
				</view>
				<!-- like -->
				<view class="box">
					<view class="u like">
						<text class="t">我的喜欢</text>
						<text class="icon">&#xe611;</text>
					</view>
					<view style="padding-left: 20rpx;"></view>
					<view class="u collect">
						<text class="t">我的收藏</text>
						<text class="icon">&#xe665;</text>
					</view>
				</view>
				<!-- partition -->
				<view class="partition">
					<view class="item" v-for="(item, index) in tab">
						<view class="tab" v-for="(item2, index) in item">
							<text class="icon_2">{{ item2.icon }}</text>
							<text class="t">{{ item2.name }}</text>
						</view>
					</view>
				</view>
				<view class="line"></view>
				<!-- 其他 -->
				<view class="nav">
					<text class="icon icon1">&#xe609;</text>
					<text class="txt">活动中心</text>
					<text class="icon icon2">&#xe62d;</text>
				</view>
				<view class="nav">
					<text class="icon icon1">&#xe609;</text>
					<text class="txt">活动中心</text>
					<text class="icon icon2">&#xe62d;</text>
				</view>
				<!-- #ifdef MP -->
				<view class="nav">
					<text class="icon icon1">&#xe609;</text>
					<text class="txt">设置</text>
					<text class="icon icon2">&#xe62d;</text>
				</view>
				<!-- #endif -->
			</view>
			<!-- #ifdef APP-PLUS -->
		</cell>
	</list>
	<!-- #endif -->
</template>

<script>
export default {
	data() {
		return {
			counts: [{ name: '关注', num: 100 }, { name: '粉丝', num: 100 }, { name: '推荐', num: 100 }],
			tab: [
				[{ name: '待付款', icon: '\ue612' }, { name: '待发货', icon: '\ue633' }, { name: '待收货', icon: '\ue61a' }, { name: '待评价', icon: '\ue772' }],
				[{ name: '退款/售后', icon: '\ue6d3' }, { name: '订阅店铺', icon: '\ue683' }, { name: '足迹', icon: '\ue771' }, { name: '零钱', icon: '\uedbc' }]
			]
		};
	}
};
</script>

<style lang="scss">
.body {
	padding-left: $tabs-padding + $Margins;
	padding-right: $tabs-padding + $Margins;
}
.user {
	flex-direction: row;
	$h: 150rpx;
	height: $h;
	margin-top: 20rpx;
	& > .img {
		background-color: #dcd6db;
		width: $h;
		border-radius: $h;
	}
	& > .txt {
		flex: 1;
		justify-content: center;
		margin-left: 23rpx;
		.name {
			font-weight: 600;
		}
		.uid {
			margin-top: 8rpx;
			margin-bottom: 8rpx;
			color: $grey;
			font-size: 25rpx;
		}
		// & > .counts {
		// 	flex-direction: row;
		// 	align-items: center;
		// 	.follow {
		// 		font-size: 27rpx;
		// 	}
		// 	.line {
		// 		font-size: 27rpx;
		// 		color: $grey;
		// 		margin-right: 12rpx;
		// 		margin-left: 12rpx;
		// 	}
		// 	.follower {
		// 		font-size: 27rpx;
		// 		// margin-left: 30rpx;
		// 	}
		// }
	}
	& > .icon {
		width: 50rpx;
		// line-height: $h;
		margin-top: 25rpx;
		text-align: center;
		font-size: 60rpx;
		color: #495057;
	}
}
.counts {
	height: 120rpx;
	flex-direction: row;
	justify-content: space-between;
	& > .item {
		flex: 1;
		justify-content: center;
		align-items: center;
		.t1 {
			font-weight: 600;
			font-size: 30rpx;
		}
		.t2 {
			font-weight: 500;
			font-size: 25rpx;
			color: $grey;
		}
	}
}
.box {
	height: 120rpx;
	flex-direction: row;
	// justify-content: center;
	justify-content: space-around;
	align-items: center;
	// background-color: aquamarine;
	.u {
		flex: 1;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		height: 120rpx;
		border-radius: 20rpx;
		border: 0.3rpx solid #ced4da;
		.t {
			font-weight: 600;
			color: #343a40;
			font-size: 35rpx;
		}
		.icon {
			line-height: 40rpx;
			text-align: center;
			font-size: 40rpx;
		}
	}
	& > .like {
		.icon {
			color: #ec5e83;
		}
	}
	& > .collect {
		.icon {
			color: #2f2f2f;
		}
	}
}
.partition {
	margin-top: 60rpx;
	& > .item {
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
	.tab {
		flex: 1;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-bottom: 40rpx;
		& > .icon_2 {
			font-size: 40rpx;
		}
		& > .t {
			margin-top: 20rpx;
			font-size: 25rpx;
			color: #495057;
		}
	}
}
.line {
	// border-bottom: 0.3rpx solid #ced4da;
	height: 0.3rpx;
	background-image: linear-gradient(to right, #ced4da, #ced4da);
	margin-left: 55rpx;
	margin-right: 55rpx;
}
.nav {
	flex-direction: row;
	height: 60rpx;
	// background-color: #ec5e83;
	align-items: center;
	margin-top: 30rpx;
	padding-right: 20rpx;
	padding-left: 20rpx;
	& > .icon1 {
	}
	& > .txt {
		padding-left: 30rpx;
	}
	& > .icon2 {
		flex: 1;
		text-align: right;
	}
}
</style>
