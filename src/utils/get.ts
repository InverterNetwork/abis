import { GetModuleData, ModuleName, GetModuleVersion, data } from '..'

export function getModuleData<
  N extends ModuleName,
  V extends GetModuleVersion<N>,
>(name: N, version: V) {
  return data.find(
    (module): module is GetModuleData<N, V> =>
      module.name === name && module.version === version
  )
}
