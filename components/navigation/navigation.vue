<template>
	<view class="content">
		<view class="tabs" style="flex-direction: row;">
			<slot name="left"></slot>
		</view>
		<slot></slot>
		<view class="tabs" style="flex-direction: row-reverse;">
			<slot name="right"></slot>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	props: {},
	mounted() {},
	methods: {
	},
	computed: {}
};
</script>

<style lang="scss" scoped>
.content {
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	height: $header-Height;
}
.tabs {
	flex: 1;
	padding: $tabs-padding;
}
</style>
