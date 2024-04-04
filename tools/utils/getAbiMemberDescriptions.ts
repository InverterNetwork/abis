import { ParsedRawMetadata } from '../types'
import { getEntries } from '.'

export default function (output: ParsedRawMetadata['output']) {
  const accumulated = {} as Record<
    string,
    {
      name: 'selfDescription' | string
      description: string
    }[]
  >

  // Get method and event descriptions
  for (const field of ['methods', 'events'] as const) {
    for (const [key, value] of getEntries(output.userdoc[field])) {
      const name = key.split('(')[0]
      let description = ''
      if ('notice' in value) description = toSingleSpace(value.notice)

      if (!accumulated[name]) accumulated[name] = []
      accumulated[name].push({ name: 'selfDescription', description })
    }
  }

  // Get the return and parameter descriptions
  for (const field of ['events', 'methods'] as const) {
    for (const [key, value] of getEntries(output.devdoc[field])) {
      const name = key.split('(')[0]

      if (!accumulated[name]) accumulated[name] = []

      for (const type of ['params', 'returns'] as const) {
        if (type in value)
          getEntries(value[type]).forEach(([key, value]) => {
            accumulated[name].push({
              name: key,
              description: toSingleSpace(value),
            })
          })
      }
    }
  }

  return accumulated
}

const toSingleSpace = (str: string) => str.replace(/\s+/g, ' ').trim()
