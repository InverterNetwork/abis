import type {
  AbiMemberConfigs,
  AbiMemberDescriptions,
  ParsedRawMetadata,
} from '../types'
import { getEntries } from '.'

export default function getAbiMemberDescriptions(
  output: ParsedRawMetadata['output'],
  abiMemberConfigs: AbiMemberConfigs
) {
  const acc = {} as AbiMemberDescriptions

  // Get method and event descriptions
  for (const field of ['methods', 'events'] as const) {
    for (const [key, value] of getEntries(
      output.userdoc[field] || output.devdoc[field] || []
    )) {
      const name = String(key).split('(')[0]
      let description = ''
      if ('notice' in value) description = toSingleSpace(value?.notice || '')
      else if ('details' in value)
        description = toSingleSpace(value?.details || '')

      if (name === 'constructor') continue
      if (!acc[name]) acc[name] = []

      try {
        acc[name].push({ name: 'selfDescription', description })
      } catch {
        console.error(
          `Error at: acc[${name}]: description: ${description} \n`,
          acc[name]
        )
      }
    }
  }

  // Get the return and parameter descriptions
  for (const field of ['events', 'methods'] as const) {
    for (const [key, value] of getEntries(output.devdoc[field] || [])) {
      const name = String(key).split('(')[0]

      if (name === 'constructor') continue

      if (!acc[name]) acc[name] = []

      for (const type of ['params', 'returns'] as const) {
        if (type in value) {
          getEntries(value[type]!).forEach(([key, value], index) => {
            // if the type is returns, replace the key with the returnNames
            // this is to handle the case where the return value has been renamed
            // in the config file by the maintainers
            if (type === 'returns')
              key = abiMemberConfigs[name].returnNames[index]

            acc[name].push({
              name: key,
              description: toSingleSpace(value),
            })
          })
        }
      }
    }
  }

  return acc
}

const toSingleSpace = (str: string) => str.replace(/\s+/g, ' ').trim()
