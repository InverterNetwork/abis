import { ParsedRawMetadata } from '../../types'
import { getEntries } from '../../utils'

const eventNames = (events: ParsedRawMetadata['output']['userdoc']['events']) =>
  Object.keys(events).map((key) => key.split('(')[0])

const methodNames = (
  methods: ParsedRawMetadata['output']['userdoc']['methods']
) => Object.keys(methods).map((key) => key.split('(')[0])

const returnNames = (output: ParsedRawMetadata['output']) => {
  const acc = {} as Record<string, string[]>
  // Get the return and parameter descriptions
  for (const field of ['events', 'methods'] as const) {
    for (const [key, value] of getEntries(output.devdoc[field])) {
      const name = key.split('(')[0]

      if ('returns' in value) acc[name] = Object.keys(value['returns'])
    }
  }

  return acc
}

export default {
  eventNames,
  methodNames,
  returnNames,
}
