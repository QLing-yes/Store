//#ifdef APP-PLUS
const dom = weex.requireModule('dom');
//#endif
//#ifndef APP-PLUS
import v from './view.vue'
//#endif

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
 * 元素边框信息查询
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
		dom.getComponentRect(this.$refs[e], data => {
			resolve(data.size);
		});
		//#endif
	})
}

/**
 * app查询所有ref直接子节点为参数一的边框信息;
 * 其他端查询所有为参数一的边框信息;
 * @param {className} name 
 * @param {refObj} ref 
 */
export function QueryAll(name, ref) {
	return new Promise((resolve, reject) => {
		//#ifndef APP-PLUS
		uni
			.createSelectorQuery()
			.in(this)
			.selectAll('.' + name)
			.boundingClientRect(data => {
				resolve(data)
			})
			.exec();
		//#endif
		//#ifdef APP-PLUS
		let data = [];
		if (ref.classList.includes(name)) {
			dom.getComponentRect(ref, d => {
				data.push(d)
			});
		}
		ref = ref.children.filter(e => e.classList.includes(name));
		for (let i = 0; i < ref.length; i++) {
			dom.getComponentRect(ref[i], d => {
				d = {
					result: d.result,
					...d.size
				}
				data.push(d)
				if (ref.length - 1 == i) {
					resolve(data);
				}
			});
		}
		//#endif
	})
}

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
