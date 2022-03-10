import axios, { AxiosResponse } from 'axios';
import type { AxiosInstance, AxiosRequestConfig } from 'axios';
import type { RequestInterceptors, RequestConfig } from './types';
class Request {
  //! axios实例
  instance: AxiosInstance;
  //! 拦截器对象
  interceptorsObj?: RequestInterceptors;

  constructor(config: RequestConfig) {
    this.instance = axios.create(config);
    this.interceptorsObj = config.interceptors;
    this.instance.interceptors.request.use(
      (res: AxiosRequestConfig) => {
        console.log('全局请求拦截器');
        return res;
      },
      (err: any) => err
    );
    //todo 使用实例连接器 start
    this.instance.interceptors.request.use(
      this.interceptorsObj?.requestInterceptors,
      this.interceptorsObj?.requestInterceptorsCatch
    );
    this.instance.interceptors.response.use(
      this.interceptorsObj?.responseInterceptors,
      this.interceptorsObj?.requestInterceptorsCatch
    );
    //todo 使用实例连接器 end
    // 全局响应拦截器保证最后执行
    this.instance.interceptors.response.use(
      // 因为我们接口的数据都在res.data下，所以我们直接返回res.data
      (res: AxiosResponse) => {
        console.log('全局响应拦截器');
        return res.data;
      },
      (err: any) => err
    );
  }
  request<T>(config: RequestConfig<T>): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      // 如果我们为单个请求设置拦截器，这里使用单个请求的拦截器
      if (config.interceptors?.requestInterceptors) {
        console.log('单个请求拦截');
        config = config.interceptors.requestInterceptors(config);
      }
      this.instance
        .request<any, T>(config)
        .then((res) => {
          // 如果我们为单个响应设置拦截器，这里使用单个响应的拦截器
          if (config.interceptors?.responseInterceptors) {
            console.log('单个响应拦截');
            res = config.interceptors.responseInterceptors(res);
          }
          resolve(res);
        })
        .catch((err: any) => {
          reject(err);
        });
    });
  }

  get<T = any>(config: RequestConfig<T>): Promise<T> {
    return this.request<T>({
      ...config,
      method: 'GET'
    });
  }
  post<T = any>(config: RequestConfig<T>): Promise<T> {
    return this.request<T>({
      ...config,
      method: 'POST'
    });
  }
}

export default Request;
