import App from './App'
//#ifndef APP-PLUS
import v from './Q-UI/common/view.vue'
//#endif
function _component(app) {
	//#ifndef APP-PLUS
	app.component('list', v);
	// app.component('cell', v);
	app.component('header', v);
	app.component('waterfall', v);
	//#endif
}

// #ifndef VUE3
import Vue from 'vue'
_component(Vue);
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
	...App
})
app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
export function createApp() {
	const app = createSSRApp(App)
	_component(app);
	return {
		app
	}
}
// #endif
