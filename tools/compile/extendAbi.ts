import { AbiMemberMeta, AbiMemberMetas } from '../types'
import { Abi, AbiParameter } from 'abitype'
import { ExtendedAbiParameter, ExtendedAbi } from '../../src'

export default function (
  abi: Abi,
  abiMemberMetas: AbiMemberMetas
): ExtendedAbi {
  return abi.map((item) => {
    if ('name' in item && !!abiMemberMetas[item.name]) {
      const name = item.name
      const description =
        abiMemberMetas[name]?.descriptions?.['selfDescription']
      return {
        ...item,
        ...(description && { description }),
        // Map over the inputs to extend them
        inputs: item.inputs.map((input) => extend(input, abiMemberMetas[name])),
        // Check if the item has outputs, if so map over them to extend them
        ...('outputs' in item && {
          outputs: item.outputs.map((output) =>
            extend(output, abiMemberMetas[name])
          ),
        }),
      }
    }

    return item
  }) as any
}

function extend(
  parameter: AbiParameter,
  abiMemberMeta: AbiMemberMeta
): AbiParameter | ExtendedAbiParameter {
  const { descriptions, tags } = abiMemberMeta

  // 0- Check if the parameter has a name else return the parameter unchanged
  if (!parameter.name) return parameter

  const name = parameter.name

  const tag = tags?.[name],
    description = descriptions?.[name]

  return {
    ...parameter,
    ...(!!tag && { tag }),
    ...(!!description && { description }),
    // 1- Check if the parameter has components
    ...('components' in parameter && {
      components: parameter.components.map((component) => {
        const extendedComp = extend(component, abiMemberMeta)
        return extendedComp
      }),
    }),
  } as ExtendedAbiParameter
}
