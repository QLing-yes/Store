//#ifdef APP-PLUS
let isAppear = true;
const dom = uni.requireNativePlugin('dom');

function Foo(el, binding) {
	const v = binding.value;
	if (v[1]) {
		el.setSpecialEffects({
			id: v[0]
		});
		ToThenTop(el);
		return;
	}
	el.setSpecialEffects({});
}

function ToThenTop(el) {
	dom.scrollToElement(isAppear ? el.pureChildren[0] : el, {
		offset: 0,
		animated: !isAppear
	});
}
/**
 * @param binding [<父列表id>,<item == current>]
 */
function init(el, binding, vnode) {
	// #ifndef VUE3
	vnode.context.$nextTick(() => {
		//#endif
		const A = el.pureChildren;
		const B = vnode.children;
		for (var i = 0; i < A.length; i++) {
			let tag = A[i].type;
			if (tag == 'cell' || tag == 'header') {
				let elA = A[i];
				let elB = B[i];
				let event = A[i].event;
				if(!event.appear) elA.addEvent('appear');
				if(!event.disappear) elA.addEvent('disappear');
				event.appear.handler = () => {
					isAppear = true;
					// #ifdef VUE3
					elA._vei?.onAppear();
					//#endif
					//#ifndef VUE3
					elB.data?.on?.appear();
					//#endif
				};
				event.disappear.handler = () => {
					isAppear = false;
					// #ifdef VUE3
					elA._vei?.onDisappear();
					//#endif
					//#ifndef VUE3
					elB.data?.on?.disappear();
					//#endif
				};
				break;
			}
		}
		setTimeout(() => {
			Foo(el, binding);
		}, 500);
		//#ifndef VUE3
	});
	//#endif
}
export default {
	// #ifdef VUE3
	created: init,
	updated: Foo,
	//#endif
	// #ifndef VUE3
	bind: init,
	update: Foo
	//#endif
};
//#endif