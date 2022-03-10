import type { AxiosRequestConfig, AxiosResponse } from 'axios';

export interface RequestInterceptors {
  //todo 请求拦截
  requestInterceptors?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  requestInterceptorsCatch?: (err: any) => any;
  //todo 响应拦截
  responseInterceptors?: <T = AxiosResponse>(config: T) => T;
  responseInterceptorsCatch?: (err: any) => any;
}
//自定义传入参数
export interface RequestConfig extends AxiosRequestConfig {
  interceptors?: RequestInterceptors;
}

//定义取消
export interface CancelRequestSource {
  [index: string]: () => void;
}
