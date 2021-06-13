import { createApp } from 'vue'
import router from './router';
import App from './App.vue'
import flash from './directives/flash';

createApp(App)
	.use(router)
	.directive('flash', flash)
	.mount('#app');