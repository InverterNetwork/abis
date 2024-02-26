import { ModuleKeys, ModuleVersionKeys, MethodKey, MethodKeys } from '../..'
import { AbiFunction } from '..'

// ==========NAMES================
export type FunctionOutputName<
  K extends ModuleKeys,
  V extends ModuleVersionKeys,
  MK extends MethodKey<K, V> = MethodKeys,
> = AbiFunction<K, V, MK>['outputs'][number]['name']

export type FunctionReadOutputName<
  K extends ModuleKeys,
  V extends ModuleVersionKeys,
  MK extends MethodKey<K, V> = MethodKeys,
> = Extract<
  AbiFunction<K, V, MK>,
  { stateMutability: 'view' | 'pure' }
>['outputs'][number]['name']

export type FunctionWriteOutputName<
  K extends ModuleKeys,
  V extends ModuleVersionKeys,
  MK extends MethodKey<K, V>,
> = Extract<
  AbiFunction<K, V, MK>,
  { stateMutability: 'nonpayable' | 'payable' }
>['outputs'][number]['name']
// ================================

// ===========GETTERS================
export type FunctionOutput<
  K extends ModuleKeys,
  V extends ModuleVersionKeys,
  MK extends MethodKey<K, V> = MethodKeys,
  N extends AbiFunction<K, V, MK>['outputs'][number]['name'] = AbiFunction<
    K,
    V,
    MK
  >['outputs'][number]['name'],
> = Extract<AbiFunction<K, V, MK>['outputs'][number], { name: N }>
// ================================
