import type { AxiosRequestConfig, AxiosResponse } from 'axios';

export interface RequestInterceptors<T = AxiosResponse> {
  //todo 请求拦截
  requestInterceptors?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  requestInterceptorsCatch?: (err: any) => any;
  //todo 响应拦截
  responseInterceptors?: (res: T) => T;
  responseInterceptorsCatch?: (err: any) => any;
}
//自定义传入参数
export interface RequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: RequestInterceptors<T>;
}
