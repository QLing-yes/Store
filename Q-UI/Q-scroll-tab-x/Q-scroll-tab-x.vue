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
			<view class="line" :style="Variety_line + line_css"></view>
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
		//".line"位置
		current: {
			type: Number,
			default: 0
		},
		//".line"的更多样式
		line_css: {
			type: String,
			default: ''
		},
		//滚动到id
		scroll_to_id: {
			type: String,
			default: ''
		},
		//slot内容的class
		label_name: {
			type: String,
			default: ''
		}
	},
	mounted() {
		//#ifndef APP-PLUS
		this.$nextTick(this.init);
		//#endif
		//#ifdef APP-PLUS
		setTimeout(this.init, 300);
		//#endif
	},
	methods: {
		async init(){
			let l = await Query.call(this, 'scroll-view');
			left = l.left;
			this.el_label = await QueryAll.call(this.$parent.$parent, this.label_name, this.$refs.category);
		}
	},
	computed: {
		Variety_line() {
			if (this.el_label == undefined) return '';
			return `
			left: ${this.el_label[this.current]?.left - left}px;
			width: ${this.el_label[this.current]?.width}px;
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
		bottom: 10rpx;

		position: absolute;
		transition-property: width, left;
		transition-duration: 0.5s;
	}
}
</style>
