<template>
	<view class="content">
		<Q-icon n="9" v-for="(item, i) in tabs" :key="item.pagePath">
			<text
				@click="
					current = i;
					$emit('current', current);
				"
				class="tab icon"
				:style="'width:' + 750 / (tabs.length + 1) + 'rpx;'"
			>
				{{ item[current == i ? 'selectedIconPath' : 'iconPath'] }}
			</text>
		</Q-icon>
	</view>
</template>

<script>
import { tabBar } from '@/common/configure.json';
export default {
	data() {
		return {
			tabs: tabBar,
			current: 0
		};
	},
	props: {},
	mounted() {},
	methods: {},
	computed: {}
};
</script>

<style lang="scss">
.content {
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	background-color: #ffffff;
	height: $footer-Height;
}
.tab {
	line-height: $footer-Height;
	text-align: center;
	height: $footer-Height;
	font-size: 40rpx;
	color: #d71762;
}
</style>
