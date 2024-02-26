import { Abi, MethodKey, MethodKeys, ModuleKeys, ModuleVersionKeys } from '..'

export * from './input'
export * from './output'

// Selectable AbiFunction
export type AbiFunction<
  K extends ModuleKeys,
  V extends ModuleVersionKeys,
  MK extends MethodKey<K, V>,
> = Extract<
  Abi<K, V>[number],
  {
    type: 'function'
    name: MK
  }
>

// ==========NAMES================
export type AbiFunctionReadName<
  K extends ModuleKeys,
  V extends ModuleVersionKeys,
> = Extract<
  AbiFunction<K, V, MethodKeys>,
  { stateMutability: 'view' | 'pure' }
>['name']

export type AbiFunctionWriteName<
  K extends ModuleKeys,
  V extends ModuleVersionKeys,
> = Extract<
  AbiFunction<K, V, MethodKeys>,
  { stateMutability: 'nonpayable' | 'payable' }
>['name']
// ===============================
