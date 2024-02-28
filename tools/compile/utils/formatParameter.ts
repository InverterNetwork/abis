import { AbiParameter } from 'abitype'
import { Tags } from '../../../src/base'

type FormatReturn = {
  name?: string
  type: string
  description?: string
  components?: {
    description?: string
    name: string
    type: string
  }[]
}

export default function formatParameter(
  input: AbiParameter & { tag?: Tags; description?: string }
): FormatReturn {
  if (input.type === 'tuple[]' || input.type === 'tuple')
    return {
      description: input.description,
      name: input.name,
      type: input.type,
      // @ts-expect-error not picked
      components: input?.components?.map?.(formatParameter),
    }

  if (input.tag === 'any(string)') {
    return {
      description: input.description,
      name: input.name,
      type: 'bytes',
    }
  }

  if (input.tag === 'decimal') {
    return {
      description: input.description,
      name: input.name,
      type: 'tuple',
      components: [
        {
          name: 'value',
          type: 'uint256',
        },
        {
          name: 'decimals',
          type: 'uint256',
        },
      ],
    }
  }

  return {
    description: input.description,
    name: input.name,
    type: input.type,
  }
}
