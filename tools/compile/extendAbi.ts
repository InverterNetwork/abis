import {
  AbiMemberMeta,
  AbiMemberMetas,
  ExtendedAbi,
  ExtendedAbiParameter,
} from '../types'
import { Abi, AbiParameter } from 'abitype'

export default function (
  abi: Abi,
  abiMemberMetas: AbiMemberMetas
): ExtendedAbi {
  return abi.map((item) => {
    if ('name' in item && !!abiMemberMetas[item.name]) {
      const name = item.name
      return {
        ...item,
        description: abiMemberMetas[name].descriptions['selfDescription'],
        inputs: item.inputs.map((input) => extend(input, abiMemberMetas[name])),
        ...('outputs' in item && {
          outputs: item.outputs.map((output) =>
            extend(output, abiMemberMetas[name])
          ),
        }),
      }
    }

    return item
  })
}

function extend(
  parameter: AbiParameter,
  abiMemberMeta: AbiMemberMeta
): AbiParameter | ExtendedAbiParameter {
  const { descriptions, tags } = abiMemberMeta

  // 0- Check if the parameter has a name else return the parameter unchanged
  if (!parameter.name) return parameter

  // 1- Check if the parameter is a tuple or tuple[]
  if (
    (parameter.type === 'tuple[]' || parameter.type === 'tuple') &&
    'components' in parameter
  ) {
    const { name, components } = parameter

    const tag = tags?.[name],
      description = descriptions?.[name]

    return {
      ...parameter,
      ...(!!tag && { tag }),
      ...(!!description && { description }),
      components: components.map((component) => {
        const { name, type } = component

        if (type === 'tuple[]' || type === 'tuple')
          return extend(component, abiMemberMeta)

        if (!name) return component

        const tag = tags?.[name],
          description = descriptions?.[name]

        return {
          ...component,
          ...(!!tag && { tag }),
          ...(!!description && { description }),
        }
      }),
    } as ExtendedAbiParameter
  }

  const name = parameter.name

  const tag = tags?.[name],
    description = descriptions?.[name]

  return {
    ...parameter,
    ...(!!tag && { tag }),
    ...(!!description && { description }),
  } as ExtendedAbiParameter
}
