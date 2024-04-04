import { MethodMetas } from '../../types'
import decipher from './decipher'
import { Abi } from 'abitype'

export default function (abi: Abi, methodMetas: MethodMetas) {
  return abi.map((item) => {
    if ('name' in item && !!methodMetas[item.name]) {
      return {
        ...item,
        description: methodMetas[item.name].descriptions.method,
        inputs: item.inputs.map((input) =>
          decipher('input', input, methodMetas[item.name])
        ),
        ...('outputs' in item && {
          outputs: item.outputs.map((output) =>
            decipher('output', output, methodMetas[item.name])
          ),
        }),
      }
    }

    return item
  })
}
