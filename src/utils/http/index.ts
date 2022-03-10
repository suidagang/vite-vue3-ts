import Request from './request';
const comRequest = new Request({
  // baseURL: import.meta.env.VITE_REQUEST_BASE_URL,
  baseURL: '',
  timeout: 1000 * 60 * 5,
  interceptors: {
    // 请求拦截器
    requestInterceptors: (config) => {
      //此处token在开发中可从localStorage中获取，token一般从服务器获取存在pinia中，然后转存到localStorage中，自己封装关于localStorage的方法，此处用一个常量代替
      //const token = localCache.getCache('token')
      console.log('实例请求拦截器');
      const token = 'this ia a token';
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    // 响应拦截器
    responseInterceptors: (result) => {
      console.log('实例响应拦截器');
      return result;
    }
  }
});
//取消请求
export const cancelRequest = (url: string | string[]) => {
  return comRequest.cancelRequest(url);
};
export const cancelAllRequest = () => {
  return comRequest.cancelAllRequest();
};
export { comRequest };
