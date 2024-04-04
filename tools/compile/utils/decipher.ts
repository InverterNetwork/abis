import { AbiParameter } from 'abitype'
import { MethodMeta } from '../../types'

export default function decipher(
  variant: 'input' | 'output',
  inputOrOutput: AbiParameter,
  methodMeta: MethodMeta
) {
  const { descriptions, tags } = methodMeta

  if (inputOrOutput.type === 'tuple[]' || inputOrOutput.type === 'tuple') {
    const { name, components } = inputOrOutput as AbiParameter & {
      name: string
      components: AbiParameter[]
    }

    const tag = tags?.[name],
      description = [
        variant === 'input' ? descriptions : descriptions?.returns,
      ]?.[name]

    return {
      ...inputOrOutput,
      tag,
      description,
      components: components.map((component) => {
        const { name, type } = component as (typeof components)[number] & {
          name: string
        }

        if (type === 'tuple[]' || type === 'tuple')
          return decipher(variant, component, methodMeta)

        const tag = tags?.[name],
          description = [
            variant === 'input' ? descriptions : descriptions?.returns,
          ]?.[name]

        return {
          ...component,
          tag,
          description,
        }
      }),
    }
  }

  const { name } = inputOrOutput as AbiParameter & { name: string }

  const tag = tags?.[name],
    description = [
      variant === 'input' ? descriptions : descriptions?.returns,
    ]?.[name]

  return {
    ...inputOrOutput,
    tag,
    description,
  }
}
