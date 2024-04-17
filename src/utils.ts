import { ModuleKeys, ModuleVersionKey, ModuleVersion, data } from '.'

export function getModuleVersion<
  K extends ModuleKeys = ModuleKeys,
  V extends ModuleVersionKey = ModuleVersionKey,
>(module: K, version: V): ModuleVersion<K, V> {
  return data[module][version]
}
