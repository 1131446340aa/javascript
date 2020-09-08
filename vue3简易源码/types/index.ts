import { DefineProperty } from './../interface';
export type strNumSym = string | number | symbol
export type isFunOrObject = Function | undefined | null
export type effectTypeGet = 'get'
export type effectTypeSet = 'set' | 'add'
export type computedOptiobs = DefineProperty | Function

export type _Function = <T extends object>() =>T