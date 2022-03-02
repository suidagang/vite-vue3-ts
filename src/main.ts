import { createApp } from 'vue';
import App from './App.vue';
import "./assets/css/reset.less";
//全局注册组件
import Globle from "./components/Globle.vue";
createApp(App).component('Globle',Globle).mount('#app');
