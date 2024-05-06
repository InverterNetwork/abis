import { GetModuleData, ModuleName, GetModuleVersion, data } from '..'

export function getModuleData<
  N extends ModuleName,
  V extends GetModuleVersion<N>,
>(name: N, version: V) {
  const moduleData = data.find(
    (module): module is GetModuleData<N, V> =>
      module.name === name && module.version === version
  )
  if (!moduleData) throw new Error('ModuleData Returned Undefined')
  return moduleData
}
