<template>
	<view class="test wxsDrag" @touchstart="drag.init" @touchmove="drag.touchmove" ref="b"><view class="wxsDrag"></view></view>
</template>

<!-- #ifndef APP-PLUS -->
<script module="drag" lang="wxs" src="../common/wxs/drag.wxs"></script>
<!-- #endif -->

<script>
//#ifdef APP-PLUS
import { Drag } from '../common/BindingX_Preset.js';
//#endif
export default {
	data() {
		return {
			//#ifdef APP-PLUS
			drag:{
				init:()=>{},
				touchmove:()=>{},
			}
			//#endif
		};
	},
	onReady() {},
	mounted() {
		//#ifdef APP-PLUS
		Drag.b = new Drag(this.$refs.b);
		//#endif
	},
	methods: {},
	computed: {}
};
</script>

<style lang="scss">
.test {
	position: relative;
	margin-left: 100rpx;
	height: 100rpx;
	width: 100rpx;
	background-color: cornflowerblue;
	justify-content: center;
	align-items: center;
}
</style>
