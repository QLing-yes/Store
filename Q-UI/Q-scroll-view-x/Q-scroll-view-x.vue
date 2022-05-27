<template>
	<scroll-view
		class="scroll-view"
		ref="scroll-view"
		:scroll-into-view="scroll_to_id"
		scroll-x="true"
		scroll-with-animation="true"
		show-scrollbar="false"
		scroll-anchoring="true"
		enable-flex="true"
	>
		<view ref="category" class="category">
			<view class="line" :style="Variety_line"></view>
			<slot></slot>
		</view>
	</scroll-view>
</template>

<script>
import { QueryAll, Query } from '../common/public.js';
let left = 0;
export default {
	data() {
		return {
			el_label: undefined
		};
	},
	props: {
		//下标线位置
		current: {
			type: Number,
			default: 0
		},
		//滚动到id
		scroll_to_id: {
			type: String,
			default: ''
		},
		//元素class
		label_name: {
			type: String,
			default: ''
		}
	},
	mounted() {
		// this.$nextTick(() => {});
		setTimeout(async () => {
			let l = await Query.call(this, 'scroll-view');
			left = l.left;
			this.el_label = await QueryAll.call(this.$parent, this.label_name, this.$refs.category);
		}, 300);
	},
	methods: {},
	computed: {
		Variety_line() {
			if (this.el_label == undefined) return '';
			return `
			left: ${this.el_label[this.current].left - left}px;
			width: ${this.el_label[this.current].width}px;
			`;
		}
	}
};
</script>

<style lang="scss">
.scroll-view {
	//#ifdef APP-PLUS
	display: flex;
	flex-direction: row;
	//#endif
}
.category {
	display: flex;
	flex-direction: row;
	// justify-content: space-between;
	align-items: center;
	height: 90rpx;
	position: relative;
	//#ifndef APP-PLUS
	white-space: nowrap;
	//#endif
	.line {
		width: 50rpx;
		height: 10rpx;
		border-radius: 10rpx;
		background-color: #fa618d;

		position: absolute;
		bottom: 10rpx;
		transition-property: width, left;
		transition-duration: 0.5s;
	}
}
</style>
