/**
 * @retryErrorCode:  请求异常时，是否开启重试功能
 */
export const RETRY: Boolean = true
/**
 * @retryErrorCode:  请求异常时，哪些状态码可以直接重试不需要在配置是否重试重试次数等
 * @ params [401, 404,500]
 */
export const RETRY_COUNTCODE: Array<Number> = [401,]
/**
 * @retryErrorCode:  请求异常时，重试次数
 */
export const RETRY_COUNT: number = 3
/**
 * @retryErrorCode:  请求异常时，重试间隔时间
 */
export const RETRY_INTERVAL: number = 1500
// 过滤掉哪些url不需要 token
export const filterRequestUrl: Array<string> = ['/login', '/1',]
// 接口异常 状态码提示信息
export const responseErrInfo: {
  [key: number]: string
} = {
  301: '请求失败,资源地址已改动',
  302: '请求失败,资源地址临时移动',
  303: '请求失败,资源错误',
  // 304:'后端资源未变,前端使用缓存,一般不做提示',
  305: '请求失败,请使用代理访问',
  307: '请求失败,临时重定向',
  400: '请求错误,请检查语法',
  401: '身份验证失败，请重新登录',
  403: '权限不足',
  404: '资源不存在',
  405: '禁用此请求方式',
  500: '服务器内部错误',
  501: '不支持此请求',
  502: '无效请求',
  503: '暂时无法处理此请求',
  505: '不支持此版本协议',
}
// 是否显示tabs
const isHidd = {
  tabs: true,//tabs
  full: true,//全屏
  msg: true,//消息
  language: true,//语言切换
  settings: true,//设置
  menuFold: true,//菜单折叠按钮
  menuLogo: true,//菜单上部logo
}
