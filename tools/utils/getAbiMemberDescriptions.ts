import {
  AbiMemberConfigs,
  AbiMemberDescriptions,
  ParsedRawMetadata,
} from '../types'
import { getEntries } from '.'

export default function (
  output: ParsedRawMetadata['output'],
  abiMemberConfigs: AbiMemberConfigs
) {
  const acc = {} as AbiMemberDescriptions

  // Get method and event descriptions
  for (const field of ['methods', 'events'] as const) {
    for (const [key, value] of getEntries(output.userdoc[field] || [])) {
      const name = String(key).split('(')[0]
      let description = ''
      if ('notice' in value) description = toSingleSpace(value?.notice || '')

      if (!acc[name]) acc[name] = []
      acc[name].push({ name: 'selfDescription', description })
    }
  }

  // Get the return and parameter descriptions
  for (const field of ['events', 'methods'] as const) {
    for (const [key, value] of getEntries(output.devdoc[field] || [])) {
      const name = String(key).split('(')[0]

      if (!acc[name]) acc[name] = []

      for (const type of ['params', 'returns'] as const) {
        if (type in value) {
          getEntries(value[type]!).forEach(([key, value], index) => {
            // if the type is returns, replace the key with the returnsNames
            // this is to handle the case where the return value has been renamed
            // in the config file by the maintainers
            if (type === 'returns')
              key = abiMemberConfigs[name].returnsNames[index]

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
