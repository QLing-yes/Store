<template>
	<view ref="D"><slot></slot></view>
</template>

<script>
//#ifdef APP-PLUS
import { Drag, Timing, bounce } from '@/Q-UI/common/BindingX_Preset.js';
//#endif
export default {
	props: {
		pclass: {
			default: ''
		}
	},
	mounted() {
		//#ifdef APP-PLUS
		let ref = this.$refs.D;
		this.T = new Timing({ ref });
		//将元素变为可拖动, 移动小于某值时回弹
		this.D = new Drag({ ref }, e => {
			bounce(e, 1000, 3000, this.D, this.T);
		});
		//#endif
	}
};
</script>

<style></style>
