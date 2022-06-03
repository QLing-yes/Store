<template>
	<!-- #ifndef APP-PLUS -->
	<view :style="pstyle" :class="pclass"><slot></slot></view>
	<!-- #endif -->
	<!-- #ifdef APP-PLUS -->
		<cell :style="pstyle" :class="pclass"><slot></slot></cell>
	<!-- #endif -->
</template>
<script>
export default {
	props: {
		pclass: {
			type: String,
			default: ''
		},
		pstyle: {
			type: String,
			default: ''
		}
	},
	// props:['pclass','pstyle']
};
</script>