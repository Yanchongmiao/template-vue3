import NProgress from 'nprogress'
import 'nprogress/nprogress.css' // 注意要引入css样式文件
// 开始
export const NProgressStart = () => {
  NProgress.start()
}
// 设置进度
export const NProgressSet = (num: number) => {
  NProgress.set(num)
}
// 自定义进度 不会为100%
export const NProgressInc = () => {
  NProgress.inc()
}
// 结束
export const NProgressDone = () => {
  NProgress.done()
}