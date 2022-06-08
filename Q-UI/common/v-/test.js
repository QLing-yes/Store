function Foo(el, binding, vnode) {

}
// #ifndef VUE3
export default {
	// 指令第一次绑定到元素时调用
	// bind: ,
	// 被绑定元素插入父节点时调用。
	// inserted: ,
	// 所在组件的 VNode 更新时调用
	// update: ,
	//当前和子VNode全部更新后调用
	// componentUpdated:,
	//指令解绑时调用。
	// unbind() {}
}
// #endif
// #ifdef VUE3
export default {
	// 在绑定元素的 attribute 前
	// 或事件监听器应用前调用
	created(el, binding, vnode, prevVnode) {},
	// 在元素被插入到 DOM 前调用
	beforeMount(el) {},
	// 在绑定元素的父组件
	// 及他自己的所有子节点都挂载完成后调用
	mounted(el, binding, vnode) {},
	// 绑定元素的父组件更新前调用
	beforeUpdate() {},
	// 在绑定元素的父组件
	// 及他自己的所有子节点都更新后调用
	updated() {},
	// 绑定元素的父组件卸载前调用
	beforeUnmount() {},
	// 绑定元素的父组件卸载后调用
	unmounted() {}
};
// #endif
