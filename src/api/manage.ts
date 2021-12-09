import { http } from "../http"
import { RequestOptions } from "../http/type"
import { resultType } from '@/type/index'
export const getAction = async (url: string, data: Object, config?: RequestOptions): Promise<resultType<any>> => {
  return new Promise(async (resolve, reject) => {
    try {
      let res: resultType = await http.get(url, {}, config)
      resolve(res)
    } catch (error) {
      reject(error)
    }
  })
}