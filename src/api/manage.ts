import { http } from "../http"
import { RequestOptions } from "../http/type"
export const getAction = async (url: string, data: Object, config?: RequestOptions) => {
  return new Promise(async (resolve, reject) => {
    try {
      let res = await http.get(url, {}, config)
      resolve(res)
    } catch (error) {
      reject(error)
    }
  })
}