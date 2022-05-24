<script>
var icon_url = '//at.alicdn.com/t/font_3378040_qh0d67l1i5g.ttf';
//#ifdef APP-PLUS
		const dom = weex.requireModule('dom');
		dom.addRule('fontFace', {
			fontFamily: 'iconfont',
			src: `url('https:${icon_url}')`
		});
		plus.navigator.setStatusBarStyle('dark'); //系统状态栏样式
		plus.screen.lockOrientation('portrait-primary'); //锁定屏幕方向
//#endif

export default {
	onLaunch: function() {
		console.log('App Launch');
	},
	onShow: function() {
		console.log('App Show');
	},
	onHide: function() {
		console.log('App Hide');
	}
};
</script>

<style lang="scss">
/*每个页面公共css */
//#ifndef APP-PLUS
@font-face {
	font-family: 'iconfont';
	src: url('//at.alicdn.com/t/font_3378040_qh0d67l1i5g.ttf?t=1652748563427') format('truetype');
}
//#endif
.icon {
	font-family: iconfont;
}
// #ifdef H5
::-webkit-scrollbar {
	width: 0 !important;
	display: none;
}
// #endif
</style>
