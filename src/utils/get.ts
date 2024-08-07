import { data } from '..'
import type { GetModuleData, ModuleName } from '..'

export function getModuleData<N extends ModuleName>(name: N) {
  const moduleData = data.find(
    (module): module is GetModuleData<N> => module.name === name
  )
  if (!moduleData) throw new Error('ModuleData Returned Undefined')
  return moduleData
}
