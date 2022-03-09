import Request from './request';
const comRequest = new Request({
  // baseURL: import.meta.env.VITE_REQUEST_BASE_URL,
  baseURL: '',
  timeout: 1000 * 60 * 5,
  interceptors: {
    // 请求拦截器
    requestInterceptors: (config) => {
      console.log('实例请求拦截器');

      return config;
    },
    // 响应拦截器
    responseInterceptors: (result) => {
      console.log('实例响应拦截器');
      return result;
    }
  }
});
export { comRequest };
