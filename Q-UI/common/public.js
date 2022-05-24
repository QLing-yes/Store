/** 小程序胶囊位置*/
export function MP_Menu() {
	//#ifdef MP
	let u = uni.getMenuButtonBoundingClientRect();
	return this.mp_menu ? `height: ${u.top > u.height ? u.top : u.height}px;` : '';
	//#endif
	//#ifndef MP
	return '';
	//#endif
}

/**
 * 元素信息查询
 * Query.cell(this)
 * @param {className & refName} e 
 */
export function Query(e) {
	return new Promise((resolve, reject) => {
		//#ifndef APP-PLUS
		uni.createSelectorQuery().in(this).select('.' + e)
			.boundingClientRect(data => {
				resolve(data);
			})
			.exec();
		//#endif
		//#ifdef APP-PLUS
		weex.requireModule('dom').getComponentRect(this.$refs[e], data => {
			resolve(data.size);
		});
		//#endif
	})
}

//#ifndef APP-PLUS
import v from './view.vue'
//#endif
/**
 * 覆盖组件
 * @param {createSSRApp} app 
 */
export function _component(app) {
	//#ifndef APP-PLUS
	app.component('list', v);
	app.component('cell', v);
	app.component('header', v);
	app.component('waterfall', v);
	//#endif
}
