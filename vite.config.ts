import { defineConfig, loadEnv, UserConfig } from 'vite';
import { visualizer } from 'rollup-plugin-visualizer';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import vueI18n from '@intlify/vite-plugin-vue-i18n';
// https://vitejs.dev/config/
export default defineConfig(({ mode }: UserConfig): UserConfig => {
  const env = loadEnv(mode, __dirname);
  const lifecycle = process.env.npm_lifecycle_event;
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
    plugins: [
      vue(),
      vueI18n({
        // if you want to use Vue I18n Legacy API, you need to set `compositionOnly: false`
        // compositionOnly: false,

        // you need to set i18n resource including paths !
        include: path.resolve(__dirname, 'src/plugin/i18n/**')
      }),
      // 打包分析
      lifecycle === 'report'
        ? visualizer({ open: true, brotliSize: true, filename: 'report.html' })
        : null
    ],
    build: {
      // 是否开启sourcemap
      sourcemap: false,
      brotliSize: false,
      // 消除打包大小超过500kb警告
      chunkSizeWarningLimit: 2000
    }
  };
});
