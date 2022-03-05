import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Layout from '../layout/index.vue';
import Wrapper from '../layout/Menu/Wrapper.vue';

export const routes: Array<RouteRecordRaw> = [
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
        component: () => import('@/components/PropsAndEmits.vue'),
        children: [
          {
            path: '/about/test1',
            name: 'test1',
            meta: { title: '测试1', icon: 'i-watch' },
            component: () => import('@/components/SloteAndAttrs.vue')
          },
          {
            path: '/about/test3',
            name: 'test3',
            meta: { title: '测试3', icon: 'i-watch' },
            component: () => import('@/components/Expose.vue')
          },
          {
            path: '/about/test4',
            name: 'test4',
            meta: { title: '测试4', icon: 'i-watch' },
            component: Wrapper,
            children: [
              {
                path: '/about/test4/test1',
                name: 'test4-1',
                meta: { title: '测试4-1', icon: 'i-watch' },
                component: () => import('@/components/Watch.vue')
              },
              {
                path: '/about/test4/test3',
                name: 'test4-3',
                meta: { title: '测试4-1', icon: 'i-watch' },
                component: () => import('@/components/WatchEffect.vue')
              },
              {
                path: '/about/test4/test4',
                name: 'test4-4',
                meta: { title: '测试4-4', icon: 'i-watch' },
                component: () => import('@/layout/index.vue')
              }
            ]
          }
        ]
      },
      {
        path: '/ref',
        name: 'ref',
        meta: { title: 'ref全家桶', icon: 'i-apple', hidden: false },
        component: () => import('@/components/Ref.vue')
      },
      {
        path: '/reactive',
        name: 'reactive',
        meta: { title: 'reactive全家桶', icon: 'i-van' },
        component: () => import('@/components/Reactive.vue')
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
