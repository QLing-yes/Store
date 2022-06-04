<template>
	<navigation class="navigation">
		<template v-slot:left>
			<Q-icon n="9" class="tab"><text class="icon">&#xe607;</text></Q-icon>
			<!-- #ifdef MP -->
			<Q-icon n="9" class="tab"><text class="icon">&#xe608;</text></Q-icon>
			<!-- #endif -->
		</template>
		<text class="title">Home</text>
		<template v-slot:right>
			<!-- #ifndef MP -->
			<Q-icon n="9" class="tab"><text class="icon">&#xe608;</text></Q-icon>
			<Q-icon n="99+" class="tab"><text class="icon" @click="nav()">&#xe609;</text></Q-icon>
			<!-- #endif -->
		</template>
	</navigation>
</template>

<script>
export default {
	data() {
		return {};
	},
	onLoad() {},
	onReady() {},
	methods: {
		nav() {
			uni.navigateTo({
				url: '../../pages/cart/cart'
			});
		}
	},
	computed: {}
};
</script>

<style lang="scss">
//#ifdef MP
.navigation {
	& > view :nth-of-type(1) {
		flex-direction: row;
	}
}
//#endif
.title {
	@include title-text;
}
.tab {
	@include tab;
	background-color: #ffffff;
	//#ifdef MP
	display: flex;
	justify-content: center;
	align-items: center;
	//#endif
}
</style>
