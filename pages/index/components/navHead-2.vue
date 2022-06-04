<template>
	<view class="box">
		<!-- #ifndef MP -->
		<text class="title">消息</text>
		<text class="icon read">&#xe65f;清除未读</text>
		<view style="flex: 1;"></view>
		<!-- #endif -->
		<text class="icon but">&#xe603;</text>
		<text class="icon but">&#xe635;</text>
		<text class="icon but" @click="Popup">&#xe632;</text>
		<!-- #ifdef MP -->
		<text class="icon read">&#xe65f;清除未读</text>
		<!-- #endif -->
		<view class="popup" v-if="isPopup" @click="Popup" :style="'padding-top:' + bar + 'px;'"></view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			bar: uni.getSystemInfoSync().statusBarHeight,
			isPopup: false
		};
	},
	methods: {
		Popup() {
			this.isPopup = !this.isPopup;
		}
	}
};
</script>

<style lang="scss">
$m: $tabs-padding + $Margins;
.popup {
	position: fixed;
	// background-color: rgba(#dee2e6, 0.3);
	background-color: rgba(#dee2e6, 1);
	padding-left: $m;
	padding-right: $m;
	top: 0rpx;
	bottom: $footer-Height;
	left: 0rpx;
	right: 0rpx;
}
.box {
	flex-direction: row;
	align-items: center;
	padding: 20rpx;
	padding-left: $m;
	padding-right: $m;
	background-color: #fff;
}
.title {
	font-weight: 600;
	font-size: 40rpx;
}
.read {
	margin-left: 20rpx;
	font-size: 25rpx;
	color: #adb5bd;
}
.but {
	font-weight: 500;
	font-size: 40rpx;
	margin-right: 30rpx;
	padding: 5rpx;
	//#ifndef MP
	left: $m;
	//#endif
}
</style>
