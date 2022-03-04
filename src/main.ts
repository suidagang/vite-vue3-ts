import { createApp, Directive } from 'vue';
import App from './App.vue';
import { router } from './router';
//  重置浏览器样式
import './assets/css/reset.less';
//全局注册组件
import Globle from './components/Globle.vue';

// 全局指令
// directive(自定义指令)
import * as directives from './comDirective/comNumber';
const app = createApp(App);
Object.keys(directives).forEach((key) => {
  app.directive(key, (directives as { [key: string]: Directive })[key]);
});
app.component('Globle', Globle).use(router).mount('#app');
