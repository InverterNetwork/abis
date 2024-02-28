import { MethodMetas } from '../types'
import decipher from './decipher'
import getAbiMethods from './getAbiMethods'
import { Abi } from 'abitype'

export default function itterate(abi: Abi, methodMetas: MethodMetas) {
  const read = getAbiMethods.readFunctions(abi).map((method) => {
    return {
      type: 'read',
      name: method.name,
      description: methodMetas[method.name].descriptions.method,
      inputs: method.inputs.map((input) =>
        decipher('input', input, methodMetas[method.name])
      ),
      outputs: method.outputs.map((output) =>
        decipher('output', output, methodMetas[method.name])
      ),
    }
  })

  const write = getAbiMethods.writeFunctions(abi).map((method) => {
    return {
      type: 'write',
      name: method.name,
      description: methodMetas[method.name].descriptions.method,
      inputs: method.inputs.map((input) =>
        decipher('input', input, methodMetas[method.name])
      ),
      outputs: method.outputs.map((output) =>
        decipher('output', output, methodMetas[method.name])
      ),
    }
  })

  return [...read, ...write]
}
