import { AxiosRequestConfig, Method } from "axios";
import { AxiosErrorTip, ContentTypeEnum } from "../utils/enum";
import { isObj } from "../utils/utils"
export interface RequestCustom {
  // 是否返回原生响应头 比如：需要获取响应头时使用该属性
  isReturnNativeResponse?: boolean,
  // 需要对返回数据进行处理
  // isTransformResponse?: boolean,
  // post请求的时候添加参数到url
  // joinParamsToUrl?: boolean,
  // 格式化提交参数时间
  // formatDate?: boolean,
  // 消息提示类型
  errorMessageModal?: AxiosErrorTip.NONE | AxiosErrorTip.MESSAGE | AxiosErrorTip.MODAL,
  // 接口地址
  // apiUrl?: string,
  //  是否加入时间戳
  joinTime?: boolean,
  // 忽略重复请求
  ignoreRequest?: boolean,
  // 有请求重复是cancel提示信息
  ignoreMsg?: string,
  // 是否携带token
  withToken?: boolean,
  //查找某条请求时根据id查找
  id?: string,
}
// 基础配置项+自定义配置项 requestOptions
export interface RequestOptions extends AxiosRequestConfig {
  timeout?: number,
  baseUrl?: string,
  headers?: {
    'Content-Type'?: ContentTypeEnum.JSON | ContentTypeEnum.FORM_URLENCODED | ContentTypeEnum.FORM_DATA,
    token?: string,
    [key: string]: any
  },
  // 配置项，下面的选项都可以在独立的接口请求中覆盖
  requestOptions?: RequestCustom
}
// 初始化传参
export const configForm = <T = any>(src: any = {}, targer: any = {}) => {
  for (const key in targer) {
    src[key] = isObj(targer[key]) ? configForm(src[key], targer[key]) : targer[key]
  }
  return src
}
// 记录当前请求约束字段
export interface PendingType {
  url: string,
  data?: any,
  params?: any,
  method: Method,
  cancel: Function,
  ignoreMsg?: string,
  [key: string]: any
}
// 请求失败时返回结果
export interface ErrorInfo {
  status: number,
  statusText: string,
  success: boolean,
  response?: Object
}