<template>
	<view ref="D" :style="TL + pstyle" class="pclass" :class="pclass"><slot></slot></view>
</template>

<script>
//#ifdef APP-PLUS
import { Drag, Timing, bounce, Binding } from '@/Q-UI/common/BindingX_Preset.js';
const dom = weex.requireModule('dom');
let ref = null;
//#endif

export default {
	data() {
		return {
			TL: ''
		};
	},
	//#ifdef MP
	externalClasses: ['pclass'],
	//#endif
	props: {
		//#ifndef MP
		pclass: {
			default: ''
		},
		//#endif
		pstyle: {
			default: ''
		}
	},
	computed: {},
	methods: {
		//将元素变为可拖动, 移动小于某值时回弹
		bind() {
			//#ifdef APP-PLUS
			//每次创建都"new"有点消耗性能
			this.T = new Timing({ ref });
			this.D = new Drag({ ref }, e => {
				bounce(e, 200, 1500, this.D, this.T, () => {
					this.$emit('end');
				});
			});
			//#endif
		}
	},
	mounted() {
		//#ifdef APP-PLUS
		ref = this.$refs.D;
		dom.getComponentRect(ref, e => {
			let { top, left, right, bottom, width, height } = e.size;
			this.TL = `
			position: fixed;
			top:${top}px;
			left:${left}px;
			right: ${right}px;
			bottom: ${bottom}px;
			width:${width}px;
			height${height}px;
			`;
			this.bind();
		});
		//#endif
	}
};
</script>

<style></style>
