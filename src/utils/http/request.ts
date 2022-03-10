import axios, { AxiosResponse } from 'axios';
import type { AxiosInstance, AxiosRequestConfig } from 'axios';
import type {
  RequestInterceptors,
  RequestConfig,
  CancelRequestSource
} from './types';
class Request {
  /**
   * @name 存放取消方法的集合
   * 在创建请求后将取消请求方法 push 到该集合中
   * 封装一个方法，可以取消请求，传入 url: string|string[]
   * 在请求之前判断同一URL是否存在，如果存在就取消请求
   */
  cancelRequestSourceList?: CancelRequestSource[] = [];
  /**
   * @name 存放所有请求URL的集合
   * 请求之前需要将url push到该集合中
   * 请求完毕后将url从集合中删除
   * 添加在发送请求之前完成，删除在响应之后删除
   */
  requestUrlList?: string[] = [];
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
  /**
   * @name 获取指定 url 在 cancelRequestSourceList 中的索引
   * @param {string} url
   * @returns {number} 索引位置
   */
  private getSourceIndex(url: string): number {
    return this.cancelRequestSourceList?.findIndex(
      (item: CancelRequestSource) => {
        return Object.keys(item)[0] === url;
      }
    ) as number;
  }
  /**
   * @name 删除 requestUrlList 和 cancelRequestSourceList
   * @param {string} url
   * @returns {*}
   */
  private delUrl(url: string) {
    const urlIndex = this.requestUrlList?.findIndex((u) => u === url);
    const sourceIndex = this.getSourceIndex(url);
    // 删除url和cancel方法
    urlIndex !== -1 && this.requestUrlList?.splice(urlIndex as number, 1);
    sourceIndex !== -1 &&
      this.cancelRequestSourceList?.splice(sourceIndex as number, 1);
  }
  /**
   * @name 传一个==可以取消一个 穿多个数组 == 也可以取消多个
   * @param {string | string[]} url
   * @returns {*}
   */
  cancelRequest(url: string | string[]) {
    //取消单个
    if (typeof url === 'string') {
      const sourceIndex = this.getSourceIndex(url);
      sourceIndex >= 0 && this.cancelRequestSourceList?.[sourceIndex][url]();
    } else {
      // 存在多个需要取消请求的地址
      url.forEach((u) => {
        const sourceIndex = this.getSourceIndex(u);
        sourceIndex >= 0 && this.cancelRequestSourceList?.[sourceIndex][u]();
      });
    }
  }
  /**
   * @name 取消全部
   * @param {*}
   * @returns {*}
   */
  cancelAllRequest() {
    console.log('取消全部');

    this.cancelRequestSourceList?.forEach((source) => {
      const key = Object.keys(source)[0];
      source[key]();
    });
  }
  request<T>(config: RequestConfig<T>): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      // 如果我们为单个请求设置拦截器，这里使用单个请求的拦截器
      if (config.interceptors?.requestInterceptors) {
        console.log('单个请求拦截');
        config = config.interceptors.requestInterceptors(config);
      }
      // url存在保存取消请求方法和当前请求url
      const url = config.url;
      if (url) {
        this.requestUrlList?.push(url);
        config.cancelToken = new axios.CancelToken((c) => {
          this.cancelRequestSourceList?.push({
            [url]: c
          });
        });
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
        })
        .finally(() => {
          url && this.delUrl(url);
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
