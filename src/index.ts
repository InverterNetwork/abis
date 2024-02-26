import { KeysOfUnion } from 'type-fest'
import * as data from './data'
export * from './function'
export * from './base'
export * from './meta'
export { data }

type BaseData = typeof data

// All the keys of the data object
export type ModuleKeys = keyof BaseData
// All the version keys
export type ModuleVersionKeys = KeysOfUnion<BaseData[ModuleKeys]>

// Selectable version
export type ModuleVersion<
  K extends ModuleKeys,
  V extends ModuleVersionKeys,
> = BaseData[K][V]

// All ModuleDatas
type ModuleVersions = BaseData[ModuleKeys][ModuleVersionKeys]

// Selectable MethodMetas key
export type MethodKey<
  K extends ModuleKeys,
  V extends ModuleVersionKeys,
> = ModuleVersion<K, V>['methodMetas'][number]['name']

// All the MethodMeta keys
export type MethodKeys = ModuleVersions['methodMetas'][number]['name']

// Selectable Abi
export type Abi<
  K extends ModuleKeys,
  V extends ModuleVersionKeys,
> = ModuleVersion<K, V>['abi']
