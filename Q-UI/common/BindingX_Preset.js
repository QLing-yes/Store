import {
	addEvent
} from "./public.js"

export const Binding = uni.requireNativePlugin('bindingx');

/**
 * 具有回调时须手动调用"move"
 * constructor(ref, callback => state);
 * 拖动;
 */
export class Drag {
	x = 0;
	y = 0;
	TokenObj = null;
	ref = null;
	callback = null;
	constructor(ref, callback) {
		addEvent(ref, "touchstart");
		this.ref = getEl(ref);
		this.callback = callback;
		this.move();
	}
	//成功constructor后@touchstart事件调用move即可
	move(offsetX = 0, offsetY = 0) {
		this.TokenObj = Binding.bind({
				anchor: this.ref,
				eventType: 'pan',
				props: [{
						element: this.ref,
						property: 'transform.translateX',
						expression: `x+${this.x+offsetX}`
					},
					{
						element: this.ref,
						property: 'transform.translateY',
						expression: `y+${this.y+offsetY}`
					}
				]
			},
			e => {
				this.x += e.deltaX;
				this.y += e.deltaY;
				if (this.callback) this.callback(e);
				else if (e.state != 'start') this.move();
			}
		);
	}
	//解绑实例
	unbind() {
		Binding.unbind({
			token: this.TokenObj.token,
			eventType: 'pan'
		})
	}
}



function getEl(el) {
	if (typeof el === 'string' || typeof el === 'number') return el;
	if (WXEnvironment) {
		return el.ref;
	} else {
		return el instanceof HTMLElement ? el : el.$el;
	}
}
