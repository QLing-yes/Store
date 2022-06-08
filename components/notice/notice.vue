<template>
	<list>
		<Q-cell v-for="i in 20">
			<card-5 pclass="card-5" :user="['imgSrc', '旗舰店' + i]" :content="['content', 1654077736723]"></card-5>
			<view class="line"></view>
		</Q-cell>
	</list>
</template>

<script>
export default {
	data() {
		return {};
	}
};
</script>

<style lang="scss">
.card-5 {

}
.line {
	width: 160rpx;
	// #ifdef APP-PLUS
	height: 1rpx;
	//#endif
	// #ifndef APP-PLUS
	height: 2rpx;
	//#endif
	background-color: #fff;
}
</style>
