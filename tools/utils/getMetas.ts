import { Abi, AbiEventParameter, AbiParameter } from 'abitype'

const eventNames = (abi: Abi): string[] =>
  abi
    .map((entry) => {
      if ('type' in entry && entry.type === 'event') {
        return entry.name
      }
    })
    .filter((name): name is string => !!name)

const methodNames = (abi: Abi) =>
  abi
    .map((entry) => {
      if ('type' in entry && entry.type === 'function') {
        return entry.name
      }
    })
    .filter((name): name is string => !!name)

const abiMemberNames = (abi: Abi) => eventNames(abi).concat(methodNames(abi))

const returnNames = (abi: Abi) => {
  // 0- Initialize the accumulator fro returnNames memberName, returnName Array
  const acc = {} as Record<string, string[]>,
    // 1- get the abiMemberNames
    memberNames = abiMemberNames(abi),
    // 2- Filter out the abi entries that are not in the abiMemberNames
    memberEntries = abi.filter((entry) => {
      if ('name' in entry) {
        return memberNames.includes(entry.name)
      }
    })
  // 3- Iterate over the filtered entries
  for (const entry of memberEntries) {
    if ('outputs' in entry) {
      // 4- If the entry has outputs, map over the outputs and get the name or the index
      acc[entry.name] = entry.outputs.map(
        (output, index) => output.name || `_${index}`
      )
    }
  }

  return acc
}

const combinedNames = (abi: Abi) => ({
  abiMemberNames: eventNames(abi).concat(methodNames(abi)),
  returnNames: returnNames(abi),
})

const parameterNames = (abi: Abi) => {
  const combinedData = combinedNames(abi),
    acc = {} as Record<string, string[]>

  for (const entry of abi) {
    if ('name' in entry) {
      // First, check if the entry has a name that is in the list of abiMemberNames
      if (combinedData.abiMemberNames.includes(entry.name)) {
        let nameArr: string[]

        if ('outputs' in entry) nameArr = getFlatParameterNames(entry.outputs)

        nameArr = getFlatParameterNames(entry.inputs)
          .concat(combinedData.returnNames[entry.name])
          .filter((name): name is string => !!name && name !== '')

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
