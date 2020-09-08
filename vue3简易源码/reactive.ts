import { isObject } from "./util"
import { handle } from './basehandles'
function createReactive<T>(target: T): T {
  if (isObject(target)) {
    return new Proxy(target, handle)
  }
  return target
}
export const reactive = <T extends object>(target: T) => {
  return createReactive(target)
}



