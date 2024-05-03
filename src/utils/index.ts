import { ModuleKeys, ModuleVersionKey, ModuleVersion, data } from '..'

export function getModuleVersion<
  K extends ModuleKeys = ModuleKeys,
  V extends ModuleVersionKey = ModuleVersionKey,
>(module: K, version: V): ModuleVersion<K, V> {
  return data[module][version]
}

// Used for collapsing type into the final type-
// rather than displaying the type pre compilation
export type Pretty<T> = { [K in keyof T]: T[K] } & unknown
