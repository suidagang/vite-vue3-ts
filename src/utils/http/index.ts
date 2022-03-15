import Request from './request';
import type { RequestConfig } from './types';
interface ComRequestConfig<T> extends RequestConfig {
  data?: T;
}
const request = new Request({
  // baseURL: import.meta.env.VITE_REQUEST_BASE_URL,
  baseURL: '',
  timeout: 1000 * 60 * 5,
  interceptors: {
    // 请求拦截器
    requestInterceptors: (config) => {
      //此处token在开发中可从localStorage中获取，token一般从服务器获取存在pinia中，然后转存到localStorage中，自己封装关于localStorage的方法，此处用一个常量代替
      //const token = localCache.getCache('token')
      // console.log('实例请求拦截器');
      const token = 'this ia a token';
      if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    // 响应拦截器
    responseInterceptors: (result) => {
      // console.log('实例响应拦截器');
      return result;
    }
  }
});
interface ComResponse<T> {
  code: number;
  message: string;
  data: T;
}
/**
 * @name 公共请求入口封装
 * @interface D 请求参数的interface
 * @interface T 响应结构的intercept
 * @param {YWZRequestConfig} config 不管是GET还是POST请求都使用data
 * @returns {Promise}
 */
export const comRequest = <D, T = any>(config: ComRequestConfig<D>) => {
  const { method = 'GET' } = config;
  if (method === 'get' || method === 'GET') {
    config.params = config.data;
  }
  return request.request<ComResponse<T>>(config);
};
//取消请求
export const cancelRequest = (url: string | string[]) => {
  return request.cancelRequest(url);
};
export const cancelAllRequest = () => {
  return request.cancelAllRequest();
};
