import * as data from './data'
export * from './base'
export * from './flat'
export { data }

type BaseData = typeof data

export type ModuleKeys = keyof BaseData

export type ModuleVersionKey<K extends ModuleKeys = ModuleKeys> =
  keyof BaseData[K]

export type ModuleVersion<
  K extends ModuleKeys = ModuleKeys,
  V extends ModuleVersionKey = ModuleVersionKey,
> = BaseData[K][V]

export function getModuleVersion<
  K extends ModuleKeys = ModuleKeys,
  V extends ModuleVersionKey = ModuleVersionKey,
>(module: K, version: V): ModuleVersion<K, V> {
  return data[module][version]
}
