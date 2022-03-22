//! https://github.com/intlify/vue-i18n-next/issues/391 警告信息：You are running the esm-bundler build of vue-i18n. It is recommended to configure your bundler to explicitly replac
import { App } from 'vue';
import { createI18n } from 'vue-i18n';
import { useLocalStorage } from '@vueuse/core';
const storage = useLocalStorage('site_locale', 'en');
const locale = storage.value;
const localPathPrefix = '../i18n/';
const messages = Object.fromEntries(
  Object.entries(import.meta.globEager('../i18n/*.y(a)?ml')).map(
    ([key, value]) => {
      const yaml = key.endsWith('.yaml');
      return [key.slice(localPathPrefix.length, yaml ? -5 : -4), value.default];
    }
  )
);
const install = (app: App) => {
  const i18n = createI18n({
    legacy: false,
    locale,
    globalInjection: true,
    messages
  });

  app.use(i18n);
};

export default install;
