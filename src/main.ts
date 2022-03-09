import { createApp, Directive } from 'vue';
import App from './App.vue';
// 引入路由
import { router } from './router';
// 引入全局pinia
import { createPinia } from 'pinia';
const pinia = createPinia();
//  重置浏览器样式和公共样式
import './style/index.less';
//全局注册组件
import Globle from './components/Globle.vue';
// 全局引入element-plus
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import * as ElIcons from '@element-plus/icons';
import { transElIconName } from './utils/index';

// 获取当前路由及页面
import './permission';

// 全局指令
// directive(自定义指令)
import * as directives from './comDirective/comNumber';
const app = createApp(App);
Object.keys(directives).forEach((key) => {
  app.directive(key, (directives as { [key: string]: Directive })[key]);
});
for (const name in ElIcons) {
  /*
   * 以i为前缀的命名规则，是为了适配已经使用属性名添加图标的内置组件，
   * 例如：<el-icon :size='20'><i-edit /></el-icon>
   */
  app.component(transElIconName(name), (ElIcons as any)[name]);
}
app
  .component('Globle', Globle)
  .use(router)
  .use(pinia)
  .use(ElementPlus)
  .mount('#app');
