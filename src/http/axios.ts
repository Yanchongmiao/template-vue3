import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, Method } from "axios";
import { filterRequestUrl, responseErrInfo, RETRY_COUNTCODE } from "../config/config";
import { AxiosErrorTip } from "../utils/enum";
import { PendingType, RequestOptions, ErrorInfo, } from "./type";
import { createErrorModal, createErrorMsg } from "../utils/message";
// import { store } from '../store/index'
import { resultType } from '@/type/index'
import { axiosRequestStore } from "@/pinia/axiosRequest";
interface dataObj {
  [key: string]: Object
}
export class Vaxios {
  AxiosInstance: AxiosInstance
  options: RequestOptions
  cancelToken = axios.CancelToken
  constructor(options: AxiosRequestConfig) {
    this.AxiosInstance = axios.create(options) //创建axios实例
    this.options = options//默认传递options
    this.initHttp()//初始化拦截器
  }
  /**
* @description init
**/
  initHttp() {
    this.setRequestInterceptors()
    this.setResponseInterceptors()
  }
  /**
   * @description 请求拦截
  **/
  setRequestInterceptors() {
    this.AxiosInstance.interceptors.request.use(async (request: RequestOptions) => {
      let { joinTime, withToken, ignoreRequest }: any = request.requestOptions //读取自定义配置
      joinTime && await this.setJoinTime(request)//是否添加请求时间字段
      withToken && await !filterRequestUrl.includes(request.url as string) && await this.setToken(request)//添加token
      this.removePending(request, ignoreRequest)//查询历史请中是否包含和本次请求一致 一致则cancel
      this.setCancel(request, ignoreRequest)//设置cancel
      return request
    }, error => {
      createErrorMsg({ title: '请求异常', content: error })
      return Promise.reject(error)
    })
  }
  /**
 * @description 响应拦截
**/
  setResponseInterceptors() {
    this.AxiosInstance.interceptors.response.use((response: AxiosResponse) => {
      let config = response.config as any
      this.accept(response.config)//历史记录中删除本次请求
      if (config.requestOptions.isReturnNativeResponse) {//是否需要对原生头处理
        return response
      } else {
        return response.data
      }
    }, (error: any) => {
      // 判断error是否是取消重复的
      if (axios.isCancel(error)) {
        let ignore: ErrorInfo = {
          status: 4004,
          statusText: error.message,
          success: false,
        }
        return Promise.reject(ignore)
      } else {
        const config = error.config;
        const [RETRY_COUNT, RETRY_INTERVAL] = [config.requestOptions.count, config.requestOptions.interval];
        if ((config && RETRY_COUNT && config.requestOptions.isInterval) || (error.response && RETRY_COUNTCODE.includes(error.response.status))) {
          config.retry_count = config.retry_count || 0;
          if (config.retry_count >= RETRY_COUNT) {
            return Promise.reject(error.response || { message: error.message })
          }
          config.retry_count++
          const backSend = new Promise<void>((resolve, reject) => {
            setTimeout(() => {
              resolve()
            }, RETRY_INTERVAL || 1);
          });
          return backSend.then(() => {
            return this.AxiosInstance(config)
          })
        }
        if (error.code === 'ECONNABORTED' && error.message.indexOf('timeout') !== -1) {//判断是否是超时
          let ignore: ErrorInfo = {
            status: 4004,
            statusText: '请求超时',
            success: false,
          }
          createErrorMsg({ title: '系统异常', content: '请求超时' })
          return Promise.reject(ignore)
        } else if (error.config) {// 接口错误
          this.tipMsg(error)
          let result: ErrorInfo = {
            status: error.response.status,
            statusText: error.response.statusText,
            success: false,
            response: error.config.requestOptions.isReturnNativeResponse ? error.response : null
          }
          this.accept(error.config)
          return Promise.reject(result)
        } else {
          return Promise.reject(error)
        }
      }
    })
  }
  /**
* @description 错误信息提示
  支持 msg model 和 不提示 none
**/
  tipMsg(response: any) {
    let strMsg: string = responseErrInfo[response?.response.status];
    switch (response.config.requestOptions.errorMessageModal) {
      case AxiosErrorTip.MESSAGE://message提示
        createErrorMsg({ title: '系统错误', content: response?.response.status + strMsg || `${response?.response.status}请联系管理员` })
        break;
      case AxiosErrorTip.MODAL://弹框
        createErrorModal({ title: '系统错误', content: response?.response.status + strMsg || `${response?.response.status}请联系管理员` })
        break;
      case AxiosErrorTip.NONE://不提示
        // console.log('none');
        break;
    }
  }
  /**
* @description 请求完成删除
**/
  accept(config: RequestOptions) {
    let requestOptions = config.requestOptions as any
    let useStore = axiosRequestStore()
    // let pendingList: Array<PendingType> = store.getters['axiosRequest/getAllPending']
    let pendingList: Array<PendingType> = useStore.getAllPending

    if (pendingList.length > 0) {
      for (const key in pendingList) {
        const item: number = +key;
        const list: PendingType = pendingList[key];
        // 当前请求在数组中存在时执行函数体
        if (
          list.url === config.url &&
          list.method === config.method &&
          JSON.stringify(list.params) === JSON.stringify(config.params) &&
          JSON.stringify(list.data) === JSON.stringify(config.data) &&
          list.url === config.url && list.ignoreRequest == requestOptions.ignoreRequest) {
          // store.commit('axiosRequest/removePending', item)
          useStore.removePending(item)
        }
      }
    }
  }
  /**
* @description 添加cancel
**/
  setCancel(request: RequestOptions, ignoreRequest: Number) {
    let pendingObj: any
    request.cancelToken = new this.cancelToken((c: Function) => {
      pendingObj = { url: request.url as string, method: request.method as Method, params: request.params, data: request.data, cancel: c, ignoreRequest: ignoreRequest, ignoreMsg: request.requestOptions?.ignoreMsg, id: request.requestOptions?.id }
    })
    let useStore = axiosRequestStore()
    useStore.setPending(pendingObj)
    // store.commit('axiosRequest/setPending', pendingObj)
  }
  /**
* @description 移除请求   判断正在请求中是数据是否有和本次重复
**/
  removePending(config: RequestOptions, ignoreRequest: Number) {
    let useStore = axiosRequestStore()
    // let pendingList: Array<PendingType> = store.getters['axiosRequest/getAllPending']
    let pendingList: Array<PendingType> = useStore.getAllPending
    if (pendingList.length > 0) {
      for (const key in pendingList) {
        const item: number = +key;
        const list: PendingType = pendingList[key];
        // 当前请求在数组中存在时执行函数体
        if (
          list.url === config.url &&
          list.method === config.method &&
          JSON.stringify(list.params) === JSON.stringify(config.params) &&
          JSON.stringify(list.data) === JSON.stringify(config.data) && ignoreRequest) {
          // 执行取消操作
          list.cancel(list.ignoreMsg);
          // store.commit('axiosRequest/removePending', item)
          // store.commit('axiosRequest/removePending', item)
          useStore.removePending(item)

        }
      }
    }

  }
  /**
* @description 是否携带token
  可以灵活配置是否传递token 请求中配置项可以设置 同时也可以在config总配置哪些url不需要携带token
**/
  async setToken(request: any) {
    request.headers.token = 'set token'
  }
  /**
* @description 设置传参时间
**/
  async setJoinTime(request: RequestOptions) {
    let method = (request.method as string)
    if (['get', 'delete'].includes(method)) {
      request.params ? request.params['time'] = Date.now() : request.params = { time: Date.now() }
    } else if (['post', 'put', 'patch'].includes(method as string)) {
      request.data ? request.data['time'] = Date.now() : request.data = { time: Date.now() }
    }
  }
  get<T = any>(url: string, params?: dataObj, config?: RequestOptions): Promise<T> {
    return this.AxiosInstance.get(url, { params, ...config })
  }
  post<T = any>(url: string, params?: dataObj, config?: RequestOptions): Promise<resultType<T>> {
    return this.AxiosInstance.post(url, params, { headers: { ...config?.headers } })
  }
  delete<T = any>(url: string, params?: dataObj, config?: RequestOptions): Promise<resultType<T>> {
    return this.AxiosInstance.delete(url, { params, headers: { ...config?.headers } })
  }
  put<T = any>(url: string, params?: dataObj, config?: RequestOptions): Promise<resultType<T>> {
    return this.AxiosInstance.put(url, params, { headers: { ...config?.headers } })
  }
  patch<T = any>(url: string, params?: dataObj, config?: RequestOptions): Promise<resultType<T>> {
    return this.AxiosInstance.patch(url, params, { headers: { ...config?.headers } })
  }
}