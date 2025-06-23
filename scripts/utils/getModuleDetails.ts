import type { ModuleType } from '../../src/'
import type { ParsedRawMetadata } from '../types'

export default function (
  userdocNotice: ParsedRawMetadata['output']['userdoc']['notice'],
  itemPath: string
) {
  // 2- Split the path of the JSON file
  const parts = itemPath.split('/'),
    // 3- Extract the module metas
    rawDescription = userdocNotice || '',
    moduleType = parts[parts.length - 2] as ModuleType,
    name = parts[parts.length - 1].replace('.json', '')

  // prune the description from more than one space
  const description = rawDescription.replace(/\s+/g, ' ').trim()

  return { name, moduleType, description }
}
