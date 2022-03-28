import { App, Plugin } from 'vue';
import MyButton from './index.vue';

export const ButtonPlugin: Plugin = {
  install(app: App) {
    app.component('MyButton', MyButton);
  }
};

export { MyButton };
