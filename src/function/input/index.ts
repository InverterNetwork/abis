import { ArrayIndices } from 'type-fest'
import { ModuleKeys, ModuleVersionKeys, MethodKey, AbiFunction } from '../..'
import { FindIndex } from '../../utils'

// ==========IDENTIFIERS================
export type FunctionInput_Indice<
  K extends ModuleKeys,
  V extends ModuleVersionKeys,
  MK extends MethodKey<K, V>,
> = ArrayIndices<AbiFunction<K, V, MK>['inputs']> extends number
  ? ArrayIndices<AbiFunction<K, V, MK>['inputs']>
  : number

export type FunctionInput_Name<
  K extends ModuleKeys,
  V extends ModuleVersionKeys,
  MK extends MethodKey<K, V>,
> = AbiFunction<K, V, MK>['inputs'][number]['name']

export type FunctionInput_IndiceByName<
  K extends ModuleKeys,
  V extends ModuleVersionKeys,
  MK extends MethodKey<K, V>,
  N extends FunctionInput_Name<K, V, MK>,
> = FindIndex<AbiFunction<K, V, MK>['inputs'], N>
// ================================

// ===========GETTERS================
export type FunctionInput<
  K extends ModuleKeys,
  V extends ModuleVersionKeys,
  MK extends MethodKey<K, V>,
  I extends FunctionInput_Indice<K, V, MK> = FunctionInput_Indice<K, V, MK>,
> = AbiFunction<K, V, MK>['inputs'][I]
// ================================

// type t = FunctionInput<'BountyManager', 'v1.0', 'addClaim', 1>
