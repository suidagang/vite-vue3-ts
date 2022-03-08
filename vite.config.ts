import { defineConfig, loadEnv, UserConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
// https://vitejs.dev/config/
export default defineConfig(({ mode }: UserConfig): UserConfig => {
  const env = loadEnv(mode, __dirname);
  return {
    base: process.env.NODE_ENV === 'production' ? './' : '/',
    server: {
      host: '127.0.0.1', //解决"vite use `--host` to expose"
      port: Number(env.VITE_PORT),
      open: true,
      proxy: {
        '^/api': {
          target: 'http://localhost:3000/',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        }
      }
    },
    css: {
      // https://github.com/vitejs/vite/issues/5833
      postcss: {
        plugins: [
          {
            postcssPlugin: 'internal:charset-removal',
            AtRule: {
              charset: (atRule) => {
                if (atRule.name === 'charset') {
                  atRule.remove();
                }
              }
            }
          }
        ]
      }
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    },
    plugins: [vue()],
    build: {
      // 是否开启sourcemap
      sourcemap: false,
      brotliSize: false,
      // 消除打包大小超过500kb警告
      chunkSizeWarningLimit: 2000
    }
  };
});
