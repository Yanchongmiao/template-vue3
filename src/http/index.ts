import { RETRY_COUNT, RETRY_INTERVAL } from "@/config/config";
import { AxiosErrorTip, ContentTypeEnum, ignoreTip } from "../utils/enum";
import { Vaxios } from "./axios";
import { configForm, RequestOptions } from "./type";
let data: RequestOptions = {
  timeout: 10 * 1000,//超时
  baseUrl: '',//基础接口地址
  headers: { 'Content-Type': ContentTypeEnum.JSON },
  // 如果是form-data格式
  // headers: { 'Content-Type': ContentTypeEnum.FORM_URLENCODED },
  // 配置项，下面的选项都可以在独立的接口请求中覆盖
  requestOptions: {
    // 是否返回原生响应头 比如：需要获取响应头时使用该属性
    isReturnNativeResponse: false,
    // 需要对返回数据进行处理
    // isTransformResponse: true,
    // // post请求的时候添加参数到url
    // joinParamsToUrl: false,
    // 格式化提交参数时间
    // formatDate: true,
    // 消息提示类型
    errorMessageModal: AxiosErrorTip.MESSAGE,
    // 重复信息提示
    ignoreMsg: ignoreTip,
    // 接口地址
    // apiUrl: 'urllll',
    //  是否加入时间戳
    joinTime: true,
    // 忽略重复请求
    ignoreRequest: true,
    // 是否携带token
    withToken: true,
    // 重试次数
    count: RETRY_COUNT,
    // 重试间隔
    interval: RETRY_INTERVAL,
    // 默认不开启错误重试
    isInterval: false,
  },
}
const createHttp = (request?: RequestOptions) => {
  return new Vaxios(configForm(data, request || {}))
}
export const http = createHttp()