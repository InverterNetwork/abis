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

export type MethodKey<
  K extends ModuleKeys,
  V extends ModuleVersionKey,
> = ModuleVersion<K, V>['itterable'][number]['name']

export type Itterable<
  K extends ModuleKeys,
  V extends ModuleVersionKey,
  MK extends MethodKey<K, V> = MethodKey<K, V>,
> = Extract<
  ModuleVersion<K, V>['itterable'][number],
  {
    name: MK
  }
>
