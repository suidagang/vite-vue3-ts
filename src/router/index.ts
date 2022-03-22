import { createRouter, createWebHashHistory } from 'vue-router';
import Layout from '../layout/index.vue';
import Wrapper from '../layout/Menu/Wrapper.vue';
import { RouteConfigs } from '../layout/types';
export const routes: Array<RouteConfigs> = [
  {
    path: '/:pathMatch(.*)',
    name: 'error',
    component: () => import('@/views/404.vue'),
    meta: { title: '404' }
  },
  {
    path: '/',
    name: 'Home',
    component: Layout,
    redirect: '/home',
    meta: {
      icon: 'home-filled',
      title: '主页',
      i18n: true,
      hidden: false
    },
    children: [
      {
        path: '/home',
        name: 'home',
        meta: { title: '首页', icon: 'i-camera', hidden: false },
        component: () => import('@/components/PropsAndEmits.vue')
      },
      {
        path: '/echarts',
        name: 'Echarts',
        meta: {
          title: 'echarts',
          icon: 'i-ice-cream-round',
          hidden: false
        },
        component: Wrapper,
        redirect: '/echarts/pie',
        children: [
          {
            path: '/echarts/pie',
            name: 'Pie',
            meta: { title: '饼图' },
            component: () => import('@/components/echarts/pie.vue')
          },
          {
            path: '/echarts/bar',
            name: 'Bar',
            meta: { title: '柱状图' },
            component: () => import('@/views/EchartsBar.vue')
          },
          {
            path: '/echarts/template',
            name: 'Template',
            meta: { title: '大屏模板' },
            component: () => import('@/views/EchartsTemplate.vue')
          },
          {
            path: '/echarts/docs-bar',
            name: 'Docs-bar',
            meta: { title: '柱状图参数' },
            component: () => import('../docs/bar.md')
          }
        ]
      },
      {
        path: '/ref',
        name: 'ref',
        meta: { title: 'ref全家桶', icon: 'i-orange', hidden: false },
        component: () => import('@/components/Ref.vue')
      },
      {
        path: '/link',
        name: 'link',
        meta: { title: '外部链接', icon: 'i-apple', hidden: false },
        component: Wrapper,
        redirect: '/link/transition',
        children: [
          {
            path: '/link/transition',
            name: 'Transition',
            meta: { title: 'Transition动画' },
            component: () => import('@/components/Transition.vue')
          },
          {
            path: '/baidu',
            name: 'https://www.baidu.com/',
            redirect: '',
            meta: { title: 'test' }
            // component: () => import('@/components/ProvideInject.vue')
          }
        ]
      },
      {
        path: '/reactive',
        name: 'reactive',
        meta: { title: 'reactive全家桶', icon: 'i-van' },
        component: () => import('@/components/Reactive.vue')
      },
      {
        path: '/vue3',
        name: 'vue3',
        redirect: '/vue3/slots',
        meta: { title: 'vue3全家桶', icon: 'i-goblet-square-full' },
        component: Wrapper,
        children: [
          {
            path: '/vue3/slots',
            name: 'SloteAndAttrs',
            meta: { title: '插槽slots和属性attrs' },
            component: () => import('@/components/SloteAndAttrs.vue')
          },
          {
            path: '/vue3/expose',
            name: 'expose',
            meta: { title: 'expose暴露组件' },
            component: () => import('@/components/Expose.vue')
          },
          {
            path: '/vue3/test4',
            name: 'test4',
            meta: { title: '测试4' },
            component: Wrapper,
            children: [
              {
                path: '/vue3/test4/watch',
                name: 'Watch',
                meta: { title: 'Watch监听' },
                component: () => import('@/components/Watch.vue')
              },
              {
                path: '/vue3/test4/watchEffect',
                name: 'WatchEffect',
                meta: { title: 'watchEffect' },
                component: () => import('@/components/WatchEffect.vue')
              },
              {
                path: '/vue3/test4/async',
                name: 'async',
                meta: { title: '动态组件' },
                component: () => import('@/components/async.vue')
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/components/Slots.vue')
  }
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  }
});
export { router };
