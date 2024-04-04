import { Abi } from 'abitype'
import { AbiMemberMetas } from '../types'

export default function (abi: Abi, methodMetas: AbiMemberMetas) {
  // 1- Itterate over the method metas
  for (const method in methodMetas) {
    // 2- Get the method metas -> returnsNames field
    const methodMeta = methodMetas[method],
      returnsNames = methodMeta.returnsNames

    // 3- Check if the returnsNames is defined
    if (!!returnsNames) {
      // 4- Get the name with index
      const nameWithIndex = returnsNames.map(
          (key, index) => [index, key] as const
        ),
        // 5- Find the index of the method in the ABI
        methodIndex = abi.findIndex(
          (item) => 'name' in item && item.name === method
        )

      // 6- Check if the method index is found
      if (methodIndex !== -1) {
        // 7- Update the outputs of the method with the nameWithIndex
        const updatedOutputs = nameWithIndex.map(([index, value]) => {
          const output = (abi[methodIndex] as any)?.outputs[index]
          if (!isCapitalLetter(value[0])) output.name = value
          return output
        })

        if (updatedOutputs) (abi[methodIndex] as any).outputs = updatedOutputs
      }
    }
  }

  return abi
}

function isCapitalLetter(letter: string) {
  return letter === letter.toUpperCase()
}
