import instance from './request'

export const get = () => {
  instance.get('', { data: { d: 1 } }).then(d => {
    console.log(d);

  })
}
// post < T = any > (config: AxiosRequestConfig, options ?: RequestOptions): Promise < T > {
//   return this.request({ ...config, method: 'POST' }, options);
// }