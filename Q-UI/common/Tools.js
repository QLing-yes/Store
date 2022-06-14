//#ifdef APP-PLUS
export const dom = weex.requireModule('dom');
//#endif
/**
 * 元素添加事件或handler
 * @param {object} ref 
 * @param {string} EventName 
 * @param {Function?} handler 
 * @return {Number} //返回当前handler的Flow位置
 */
export function addEvent(ref, EventName, handler) {
	ref = ref.ref ? ref : ref.$el;
	const Flow = EventName + "HandlerFlow";
	const P = EventName + "Proxy";
	let event = ref.event[EventName];

	if (!Array.isArray(ref[Flow])) ref[Flow] = [];
	if (handler instanceof Function) ref[Flow].push(handler);

	function foo() {
		ref[Flow].forEach(f => f());
	}

	if (!event) {
		ref.addEvent(EventName);
		event = ref.event[EventName];
		event.handler = foo;
		ref[P] = true;
	} else if (!ref[P]) {
		ref.event[EventName] = new Proxy(ref.event[EventName], {
			get(o, k) {
				if (k == 'handler') foo();
				return o[k];
			},
			set(o, k, v) {
				o[k] = v;
			}
		});
		ref[P] = true;
	}
	return ref[Flow].length - 1;
}

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
 * 元素边框信息查询;
 * Query.cell;
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
 * QueryAll.cell;
 * app查询所有ref直接子节点为"参数一"的边框信息;
 * 其他端查询所有为"参数一"的边框信息;
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
