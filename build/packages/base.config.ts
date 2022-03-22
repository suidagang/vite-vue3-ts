import { resolve } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// 文档: https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      packages: resolve(__dirname, './packages')
    }
  },
  plugins: [vue({ include: [/\.vue$/] })]
});
