import { _Function } from './types/index';

export interface Effect {
  id?: number,
  options?: EffectOptions,
  deps?: Set<Effect>[]
  (): _Function
}

export interface DefineProperty {
  get: _Function
  set: <T extends object>(value?: T) => T
}
export interface EffectOptions {
  computed?: boolean
  lazy?: boolean
  scheduler?(): void
}
