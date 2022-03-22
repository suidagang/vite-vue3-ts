import { App, Plugin } from 'vue';
import Button from './index.vue';

export const ButtonPlugin: Plugin = {
  install(app: App) {
    app.component('MyButton', Button);
  }
};

export { Button };
