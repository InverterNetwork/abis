import * as data from './data'
export * from './base'
export { data }

type BaseData = typeof data

export type ModuleKeys = keyof BaseData

export type ModuleVersionKey<K extends ModuleKeys = ModuleKeys> =
  keyof BaseData[K]

export type ModuleVersion<
  K extends ModuleKeys,
  V extends ModuleVersionKey,
> = BaseData[K][V]

export type Abi<
  K extends ModuleKeys,
  V extends ModuleVersionKey,
> = ModuleVersion<K, V>['abi']

export type MethodKey<K extends ModuleKeys, V extends ModuleVersionKey> = Abi<
  K,
  V
>[number]['name']

export type AbiItem<
  K extends ModuleKeys,
  V extends ModuleVersionKey,
  MK extends MethodKey<K, V> = MethodKey<K, V>,
> = Extract<
  Abi<K, V>[number],
  {
    name: MK
  }
>
