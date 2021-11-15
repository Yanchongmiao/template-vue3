import axios, { AxiosRequestConfig, Method } from 'axios'
// 请求头
interface AxiosRequest {
  baseUrl?: string,
  url: string,
  data?: any,
  params?: any,
  timeout: number,
  headers?: any,
  responseType?: ResponseType,
  method: Method,
}
// 响应头
interface AxiosResponse {
  data: any,
  headers: any,
  request?: any,
  status: number,
  statusText: string,
  config: AxiosRequest;
}
// 每次请求接口
interface pendingType {
  url: string,
  data?: any,
  params?: any,
  method: Method,
  cancel: Function
}
// 记录取消请求队列
const pending: Array<pendingType> = []
const cancelToken = axios.CancelToken
// 创建示例
const instance = axios.create({
  timeout: 1000 * 10,
  responseType: 'json',
})
// 移除请求
const removePending = (config: AxiosRequestConfig) => {

}
// 拦截器
instance.interceptors.request.use(request => {
  // 请求前
  removePending(request)
  request.cancelToken = new cancelToken(c => {
    pending.push({ url: request.url as string, method: request.method as Method, params: request.params, data: request.data, cancel: c })
  })
  return request
}, error => {
  return Promise.reject(error)
  // 失败
})
instance.interceptors.response.use(respone => {
  removePending(respone.config)
  const errCode = respone.data?.errCode
  // switch (errCode) {
  //   case 400:
  //     console.log('异常');
  // }
  return respone
}, error => {
  const response = error.response
  switch (response?.status) {
    case 301:
      console.log('资源地址已改动');
      break;
    case 400:
      console.log('请求错误');
      break;
    case 401:
      console.log('token失效 身份验证失败');
      break;
    case 403:
      console.log('权限不足');
      break;
    case 404:
      console.log('资源部存在');
      break;
    case 500:
      console.log('服务器异常');
      break;
    case 501:
      console.log('服务器不支持此请求');
      break;
    case 503:
      console.log('服务器暂时无法处理请稍等');
      break;
    case 505:
      console.log('不支持此版本协议');
      break;
  }
  const config = error.config;
  const [RETRY_COUNT, RETRY_INTERVAL] = [3, 1000];
  if (config && RETRY_COUNT) {
    config.retry_count = config.retry_count || 0;
    if (config.retry_count >= RETRY_COUNT) {
      return Promise.reject(response || { message: error.message })
    }
    config.retry_count++
    const backSend = new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, RETRY_INTERVAL || 1);
    });
    return backSend.then(() => {
      return instance(config)
    })
  }
})
export default instance
// {
//   // See https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication#authentication_schemes
//   // authentication schemes，e.g: Bearer
//   // authenticationScheme: 'Bearer',
//   authenticationScheme: '',
//     timeout: 10 * 1000,
//       // 基础接口地址
//       // baseURL: globSetting.apiUrl,

//       headers: { 'Content-Type': ContentTypeEnum.JSON },
//   // 如果是form-data格式
//   // headers: { 'Content-Type': ContentTypeEnum.FORM_URLENCODED },
//   // 数据处理方式
//   transform,
//     // 配置项，下面的选项都可以在独立的接口请求中覆盖
//     requestOptions: {
//     // 默认将prefix 添加到url
//     joinPrefix: true,
//       // 是否返回原生响应头 比如：需要获取响应头时使用该属性
//       isReturnNativeResponse: false,
//         // 需要对返回数据进行处理
//         isTransformResponse: true,
//           // post请求的时候添加参数到url
//           joinParamsToUrl: false,
//             // 格式化提交参数时间
//             formatDate: true,
//               // 消息提示类型
//               errorMessageMode: 'message',
//                 // 接口地址
//                 apiUrl: globSetting.apiUrl,
//                   // 接口拼接地址
//                   urlPrefix: urlPrefix,
//                     //  是否加入时间戳
//                     joinTime: true,
//                       // 忽略重复请求
//                       ignoreCancelToken: true,
//                         // 是否携带token
//                         withToken: true,
//         },
// },
