import { computedOptiobs } from './types/index';
import { track, effect, trigger } from './effect';


interface GetValue {
  value: any
}

export function computed(options: computedOptiobs) {

  let get: Function
  let set: (key?: any) => void
  if (typeof options === 'function') {
    get = options
    set = () => { }
  }
  else {
    get = options.get
    set = options.set
    // set =options.set
  }
  let computed: GetValue
  let value: any
  let dirty = true
  let runner = effect(get, {
    lazy: true,
    computed: true,
    scheduler() {
      if (!dirty) {
        dirty = true
      }
      trigger(computed, 'set', 'value')
    }
  })
  return computed = {
    get value() {
      if (dirty) {
        value = runner()
        dirty = false
        track(computed, 'get', 'value')
      }
      return value
    },
    set value(val) {
      set(val)
    }
  }
}