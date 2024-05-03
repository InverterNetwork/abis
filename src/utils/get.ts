import { ModuleData, ModuleName, GetModuleVersion, data } from '..'

export function getModuleVersion<
  N extends ModuleName,
  V extends GetModuleVersion<N>,
>(name: N, version: V) {
  return data.find(
    (module): module is ModuleData<N, V> =>
      module.name === name && module.version === version
  )
}
