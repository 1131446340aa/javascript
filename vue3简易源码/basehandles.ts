import { track, trigger } from './effect';
import { strNumSym } from './types/index';
import { reactive } from './reactive'
import { isObject } from './util';
function get<T extends object>(target: T, key: strNumSym, receiver: T) {

  let res = Reflect.get(target, key, receiver)
  track(target, 'get', key)

  return isObject(target[key]) ? reactive(target[key]) : res;
}

function set<T>(target: any, key: strNumSym, value: T, receiver: object) {
  let hasKey = Object.prototype.hasOwnProperty.call(target, key)
  let oldval = target[key]
  let res = Reflect.set(target, key, value, receiver)
  if (!hasKey) {
    trigger(target, 'add', key, res)
  }
  else if (value !== oldval) {
    trigger(target, 'set', key, res)
  }
  return res
}

export const handle = {
  get, set
}
