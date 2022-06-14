import {
	addEvent
} from "./Tools.js"
export const Binding = uni.requireNativePlugin('bindingx');




/**
 * @param {ref} ref
 * @param {Function?} callback
 * @callback 返回"timing"的回调事件
 */
class Preset_1 {
	TokenObj = null;
	ref = null;
	refObj = null;
	eventType = '';
	/**
	 * @param {{ref:refObj}} param0 
	 */
	constructor({
		ref
	}) {
		this.ref = getEl(ref);
		this.refObj = ref;
	}
	//返回目标相关属性
	getStyle() {
		return Binding.getComputedStyle(this.ref);
	};
	updateXY() {
		let {
			translateX,
			translateY
		} = this.getStyle();

		this.refObj.myX = translateX;
		this.refObj.myY = translateY;
	}
	//解绑
	unbind() {
		Binding.unbind({
			token: this.TokenObj.token,
			eventType: this.eventType
		})
	}
}

/**简单拖动;具有回调时须手动调用"move"*/
export class Drag extends Preset_1 {
	callback = null;
	/**
	 * @param {Preset_1} e 
	 * @param {Function} callback 
	 */
	constructor(e, callback) {
		super(e);
		this.callback = callback;
		this.eventType = 'pan';
		addEvent(e.ref, "touchstart");
		setTimeout(() => {
			this.move()
		}, 500)
	}
	/**
	 * 触摸移动
	 * @param {number} offsetX 
	 * @param {number} offsetY 
	 * @param {string} EE exitExpression
	 */
	move(offsetX = 0, offsetY = 0, EE) {
		this.updateXY();
		let options = {
			anchor: this.ref, //触发事件的元素
			eventType: this.eventType,
			props: [{
					element: this.ref, //被控制元素
					property: 'transform.translateX',
					expression: `x+${this.refObj.myX+offsetX}`
				},
				{
					element: this.ref,
					property: 'transform.translateY',
					expression: `y+${this.refObj.myY+offsetY}`
				}
			]
		}
		if (EE) options.exitExpression = EE;
		this.TokenObj = Binding.bind(options, e => {
			if (this.callback) this.callback(e);
			else if (e.state != 'start') this.move();
		});
	}
}

export class Timing extends Preset_1 {
	/** @param {Preset_1} e */
	constructor(e) {
		super(e);
		this.eventType = "timing";
	}
	//示例:{ x: ~1, y: ~1, duration: 800, animation: 'easeOutElastic', cubicBezier: ',1,-0.81,0,-0.04' }
	move({
		x,
		y,
		duration = 0.1, //持续时间和exit
		animation = 'cubicBezier', //动画函数
		cubicBezier = '' //贝塞尔曲线
	}, callback) {
		let options = {
			eventType: this.eventType,
			exitExpression: `t>${duration}`,
			props: [{
					element: this.ref,
					property: 'transform.translateX',
					expression: `${animation}(t,${this.refObj.myX},${x},${duration}${cubicBezier})`
				},
				{
					element: this.ref,
					property: 'transform.translateY',
					expression: `${animation}(t,${this.refObj.myY},${y},${duration}${cubicBezier})`
				},
			]
		}
		this.TokenObj = Binding.bind(options, e => {
			this.updateXY();
			if (callback) callback(e);
		});
	}

}




/** @param {refObj} el */
function getEl(el) {
	if (typeof el === 'string' || typeof el === 'number') return el;
	return el.ref || el.$el.ref;
}
/**
 * 将元素变为可拖动, 移动范围小于"range"时回弹
 * @param {Drag<callback<param>>} e
 * @param {number} range //范围
 * @param {number} duration //持续时间
 * @param {Drag} drag
 * @param {Timing} timing
 */
export function bounce(e, range, duration, drag, timing) {
	let {
		state,
		deltaY,
		deltaX
	} = e;
	if (state != 'start') {
		if (Math.max(...[Math.abs(deltaY), Math.abs(deltaX)]) < range) {
			drag.unbind();
			let {
				translateX,
				translateY
			} = drag.getStyle();
			let op = {
				x: ~translateX,
				y: ~translateY,
				duration,
				animation: 'easeOutElastic',
				// cubicBezier: ',1,-0.81,0,-0.04'
			};
			timing.updateXY();
			timing.move(op, e => {
				// if (e.state == 'exit') drag.move();
				if (e.state != 'start') drag.move();
			});
		} else drag.move();
	}
}
