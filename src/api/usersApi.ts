import { RequestOptions } from "../http/type";
import { getAction } from "./manage";
let base_url = '/api'
// 权限接口
export const permissions = (url: string, data: Object, config?: RequestOptions) => getAction(base_url + url, data, config)