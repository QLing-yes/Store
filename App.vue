<script>
//#ifdef APP-PLUS
const dom = weex.requireModule('dom');
const URL = {
	iconfont1: '//at.alicdn.com/t/font_3378040_eqoh1ehujt5.ttf?t=1654349154422',
	iconfont2: '//at.alicdn.com/t/font_3439911_6qx547g17k.ttf?t=1653960778872'
};
Object.keys(URL).forEach(e => {
	dom.addRule('fontFace', {
		fontFamily: e,
		src: `url('https:${URL[e]}')`
	});
});
plus.navigator.setStatusBarStyle('dark'); //系统状态栏样式
plus.screen.lockOrientation('portrait-primary'); //锁定屏幕方向
//#endif

export default {
	onLaunch: function() {
		console.log('App 启动');
	},
	onShow: function() {
		console.log('App 展示');
	},
	onHide: function() {
		console.log('App 隐藏');
	}
};
</script>

<style lang="scss">
/*每个页面公共css */
//#ifndef APP-PLUS
@font-face {
	font-family: 'iconfont1';
	src: url('//at.alicdn.com/t/font_3378040_eqoh1ehujt5.ttf?t=1654349154422') format('truetype');
}
@font-face {
	font-family: 'iconfont2';
	src: url('//at.alicdn.com/t/font_3439911_6qx547g17k.ttf?t=1653960778872') format('truetype');
}
//#endif
.icon {
	font-family: iconfont1;
}
.icon_2 {
	font-family: iconfont2;
}
// #ifdef H5
::-webkit-scrollbar{
	// width: 8rpx;
	width: 0rpx;
	height: 15rpx;
}
::-webkit-scrollbar-thumb{
	border-radius: 5rpx;
	background-color: #c7deec;
}
// #endif
</style>
