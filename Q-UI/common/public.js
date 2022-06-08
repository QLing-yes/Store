/**
 * 元素添加事件或修改代理
 * @param {object} ref 
 * @param {string} EventName 
 * @param {Function?} handler 
 */
export function addEvent(ref,EventName,handler) {
	if (!ref.event[EventName])ref.addEvent(EventName);
	ref.event.touchstart.handler = () => {
		// #ifdef VUE3
		ref._vei?.onDisappear();
		//#endif
		//#ifndef VUE3
		ref.data?.on?.disappear();
		//#endif
		if(typeof handler == "function")handler();
	};
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
 * @param {weexDom} dom
 */
export function Query(e,dom) {
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
 * @param {weexDom} dom
 */
export function QueryAll(name, ref,dom) {
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