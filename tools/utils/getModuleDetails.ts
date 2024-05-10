import { ModuleType } from '../../src/'
import { ParsedRawMetadata } from '../types'

export default function (
  userdocNotice: ParsedRawMetadata['output']['userdoc']['notice'],
  itemPath: string
) {
  // 2- Split the path of the JSON file
  const parts = itemPath.split('/'),
    // 3- Extract the module metas
    description = userdocNotice || '',
    moduleType = parts[parts.length - 2] as ModuleType,
    name = parts[parts.length - 1].replace('.json', '')

  return { name, moduleType, description }
}
