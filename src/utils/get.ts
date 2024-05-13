import { GetModuleData, ModuleName, data } from '..'

export function getModuleData<N extends ModuleName>(name: N) {
  const moduleData = data.find(
    (module): module is GetModuleData<N> => module.name === name
  )
  if (!moduleData) throw new Error('ModuleData Returned Undefined')
  return moduleData
}
