<template>
	<view :class="'content '+pclass" :style="pstyle">
		<view class="sticky">
			<!-- 状态栏 -->
			<view v-if="statusbar" :style="'height:' + StatusbarHeight + 'px;' + 'background-color:' + statusbar_color + ';'">
				<slot name="statusbar"></slot>
			</view>
			<!-- Header -->
			<slot name="header"></slot>
		</view>

		<slot><view style="flex: 1;justify-content: center;"></view></slot>

		<view class="sticky"><slot name="footer"></slot></view>
	</view>
</template>

<script>
export default {
	props: {
		//用于在微信小程序该组件在最外层时样式绑定失效修复
		pstyle: {
			default: ''
		},
		pclass: {
			default: ''
		},
		statusbar: {
			type: Boolean,
			default: true
		},
		statusbar_color: {
			type: String,
			default: ''
		}
	},
	computed: {
		//状态栏高度
		StatusbarHeight() {
			return uni.getSystemInfoSync().statusBarHeight;
		}
	}
};
</script>

<style lang="scss" scoped>
@import '@/Q-UI/common/public.scss';
.content {
	//#ifndef APP-PLUS
	// min-height: 100vh;
	// height: 100vh;
	//#endif
	//#ifdef APP-PLUS
	flex: 1;
	//#endif
}
</style>
