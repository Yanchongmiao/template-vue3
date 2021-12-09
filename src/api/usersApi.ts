import { RequestOptions } from "../http/type";
import { permissionsUrl } from "./ApiUrl";
import { getAction } from "./manage";
// 权限接口
// export const permissions = (url: string, data: Object, config?: RequestOptions) => getAction(base_url + url, data, config)
export const permissions = (data: Object = {}, config?: RequestOptions) => getAction(permissionsUrl, data, config)