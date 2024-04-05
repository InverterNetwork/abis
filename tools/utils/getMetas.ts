import { ParsedRawMetadata } from '../types'
import { getEntries } from '.'
import { AbiEventParameter, AbiParameter } from 'abitype'

const eventNames = (output: ParsedRawMetadata['output']) =>
  Object.keys(output.userdoc.events || output.devdoc.events || []).map(
    (key) => key.split('(')[0]
  )

const methodNames = (output: ParsedRawMetadata['output']) =>
  Object.keys(output.userdoc.methods || output.devdoc.methods || []).map(
    (key) => key.split('(')[0]
  )

const returnNames = (output: ParsedRawMetadata['output']) => {
  const acc = {} as Record<string, string[]>
  // Get the return and parameter descriptions
  for (const field of ['events', 'methods'] as const) {
    for (const [key, value] of getEntries(output.devdoc[field] || [])) {
      const name = String(key).split('(')[0]

      if (!!value.returns) acc[name] = Object.keys(value['returns'])
    }
  }

  return acc
}

const combinedNames = (output: ParsedRawMetadata['output']) => ({
  abiMemberNames: eventNames(output).concat(methodNames(output)),
  returnsNames: returnNames(output),
})

const parameterNames = (output: ParsedRawMetadata['output']) => {
  const abi = output.abi,
    combinedData = combinedNames(output),
    acc = {} as Record<string, string[]>

  for (const entry of abi) {
    if ('name' in entry) {
      // First, check if the entry has a name that is in the list of abiMemberNames
      if (combinedData.abiMemberNames.includes(entry.name)) {
        const nameArr = getFlatParameterNames(entry.inputs)
          .concat(combinedData.returnsNames[entry.name])
          .filter((name): name is string => !!name)

        acc[entry.name] = nameArr
      }
    }
  }

  return acc
}

export default {
  eventNames,
  methodNames,
  returnNames,
  combinedNames,
  parameterNames,
}

const getFlatParameterNames = (
  parameters: readonly (AbiParameter | AbiEventParameter)[]
) =>
  parameters
    .flatMap((input) => {
      if (['tuple', 'tuple[]'].includes(input.type) && 'components' in input) {
        return input.components
          .map((component) => component.name)
          .concat(input.name)
      }

      return input.name
    })
    .filter((name): name is string => !!name)
