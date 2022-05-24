import App from './App'
import {
	_component
} from "@/Q-UI/common/public.js"


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
