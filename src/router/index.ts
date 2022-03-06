import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Layout from '../layout/index.vue';
import Wrapper from '../layout/Menu/Wrapper.vue';
type RouteType = RouteRecordRaw & {
  meta: {
    icon?: string;
    title: string;
    i18n?: boolean;
    hidden?: boolean;
  };
};
export const routes: Array<RouteType> = [
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
        path: '/ref',
        name: 'ref',
        meta: { title: 'ref全家桶', icon: 'i-apple', hidden: false },
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
        meta: { title: 'vue3全家桶' },
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
