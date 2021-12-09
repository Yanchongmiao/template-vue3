const is = (val: any, type: string) => {
  return toString.call(val) == `[object ${type}]`
}
export const isObj = (val: any) => {
  return is(val, 'Object')
}
// 指定长度和基数
export const uuid = (len?: number, radix?: number) => {
  let chars: Array<string> = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
  let uuid: Array<string> = [];
  let i: number = 0;
  radix = radix || chars.length;
  if (len) {
    for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random() * radix];
  } else {
    // rfc4122, version 4 form
    let r;
    // rfc4122 requires these characters
    uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
    uuid[14] = '4';
    for (i = 0; i < 36; i++) {
      if (!uuid[i]) {
        r = 0 | Math.random() * 16;
        uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
      }
    }
  }
  return uuid.join('');
}
/**
 * 递归深拷贝
**/
export const DeepCopy = (source: any) => {
  let target: any = {}
  if (typeof source === 'object') {
    target = Array.isArray(source) ? [] : {}
    for (let key in source) {
      if (source.hasOwnProperty(key)) {
        if (typeof source[key] !== 'object') {
          target[key] = source[key]
        } else {
          target[key] = DeepCopy(source[key])
        }
      }
    }
  } else {
    target = source
  }
  return target
}
/**
 * 平铺节点转换树结构
**/
export const flatTree = (treeArr: Array<any>) => {
  let map: Record<string, any> = []
  let arr = []
  for (const key of treeArr) {
    map[key.id] = key
  }
  for (const key of treeArr) {
    if (key.parentId == 0) {
      arr.push(key)
    } else {
      if (!map[key.parentId].children) {
        map[key.parentId].children = [key]
      } else {
        map[key.parentId].children.push(key)
      }
    }
  }
  return arr
}
