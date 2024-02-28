import { AbiParameter } from 'abitype'
import { MethodMeta } from '../types'

export default function decipher(
  variant: 'input' | 'output',
  inputOrOutput: AbiParameter,
  methodMeta: MethodMeta
) {
  const { descriptions, tags } = methodMeta

  if (inputOrOutput.type === 'tuple[]' || inputOrOutput.type === 'tuple') {
    const { name, type, components } = inputOrOutput as AbiParameter & {
      name: string
      components: AbiParameter[]
    }

    const tag = tags?.[name],
      description = [
        variant === 'input' ? descriptions : descriptions?.returns,
      ]?.[name]

    return {
      name,
      type,
      tag,
      description,
      components: components.map((component) => {
        const { name, type } = component as (typeof components)[number] & {
          name: string
        }
        const tag = tags?.[name],
          description = [
            variant === 'input' ? descriptions : descriptions?.returns,
          ]?.[name]

        return {
          name,
          type,
          tag,
          description,
        }
      }),
    }
  }

  const { name, type } = inputOrOutput as AbiParameter & { name: string }

  const tag = tags?.[name],
    description = [
      variant === 'input' ? descriptions : descriptions?.returns,
    ]?.[name]

  return {
    name,
    type,
    tag,
    description,
  }
}
