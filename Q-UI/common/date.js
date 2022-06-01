export const EnumDate = {
	0: '一',
	1: '二',
	2: '三',
	3: '四',
	4: '五',
	5: '六',
	6: '天'
}
/**
 * 
 * @param {Date} o 
 * @return {string} {Y年,M月,D日,h时,m分,s秒,ms毫秒,W周几,getTime时间戳}
 */
export function getDate(o = new Date()) {
	return JSON.stringify({
		Y: o.getFullYear(),
		M: o.getMonth() + 1,
		D: o.getDate(),
		h: o.getHours(),
		m: o.getMinutes(),
		s: o.getSeconds(),
		ms: o.getMilliseconds(),
		W: o.getDay(),
		getTime: o.getTime()
	});
}
/*
	let s = ms / 1000;
	let m = Math.floor(s / 60) % 60;
	let h = Math.floor(s / 60 / 60) % 24;
	let D = Math.floor(s / 60 / 60 / 24);
*/
