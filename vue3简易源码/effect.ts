import { strNumSym, effectTypeSet, effectTypeGet } from './types';
import { Effect, EffectOptions } from './interface'
let uid = 0
let activeEffect: Effect
let effectStack: Effect[] = []
function createEffect(fn: Function, options: EffectOptions = {}) {
  let effect: Effect = function effectReactive() {
    if (!effectStack.includes(effect)) {
      try {
        effectStack.push(effect)
        activeEffect = effect
        return fn()
      } finally {
        effectStack.pop()
        activeEffect = effectStack[effectStack.length - 1]
      }
    }
  }
  effect.id = uid++
  effect.options = options
  effect.deps = []
  return effect
}

export const effect = (fn: Function, options: EffectOptions = {
  lazy: false
}) => {
  let effect = createEffect(fn, options)
  if (!options.lazy) {
    effect()
  }
  return effect
}

let targetMap: WeakMap<object, Map<strNumSym, Set<Effect>>> = new WeakMap()
export const track = <T extends object>(target: T, type: effectTypeGet, key: strNumSym) => {
  if (activeEffect === undefined) return
  let depsMap = targetMap.get(target)
  if (!depsMap) {
    targetMap.set(target, (depsMap = new Map()))
  }
  let dep = depsMap.get(key)
  if (!dep) {
    depsMap.set(key, (dep = new Set()))
  }
  if (!dep.has(activeEffect)) {
    dep.add(activeEffect)
    activeEffect.deps.push(dep)
  }
}
export const trigger = <T extends object>(target: T, type: effectTypeSet, key: strNumSym, value?: any) => {
  let depsMap = targetMap.get(target)

  if (!depsMap) return
  let ComputedRunner: Set<Effect> = new Set()
  let effectRunner: Set<Effect> = new Set()
  const run = (effects: Set<Effect>) => {
    if (effects) {
      effects.forEach(effect => {
        if (effect.options.computed) {
          ComputedRunner.add(effect)
        } else {
          effectRunner.add(effect)
        }
      })
    }
  }
  if (type === 'add') {


    run(depsMap.get(Array.isArray(target) ? 'length' : ''))

  }


  run(depsMap.get(key))
  effectRunner.forEach(effect => {
    if (effect.options.scheduler) {
      effect.options.scheduler()
    }
  })
  effectRunner.forEach(effect => {
    effect()
  })

}

