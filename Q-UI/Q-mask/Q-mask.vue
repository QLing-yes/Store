<template>
	<view :class="'popup ' + pclass" :style="'padding-top:' + bar + 'px;' + pstyle"><slot></slot></view>
</template>

<script>
export default {
	props: {
		//小程序需父组件调整"options.styleIsolation"选项方可使用"pclass"
		pclass: {
			default: ''
		},
		pstyle: {
			default: ''
		}
	},
	data() {
		return {
			bar: uni.getSystemInfoSync().statusBarHeight
		};
	},
	methods: {}
};
</script>

<style lang="scss">
.popup {
	position: fixed;
	//#ifndef APP-PLUS
	z-index: 999;
	//#endif
	background-color: rgba(#dee2e6, 0.3);
	top: 0rpx;
	bottom: 0rpx;
	left: 0rpx;
	right: 0rpx;
}
</style>
