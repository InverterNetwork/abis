import { getModuleMethodMetas } from './getMetas'

function outputName(
  indexValueArr: (readonly [number, string])[],
  outputs: any[]
) {
  if (!outputs) return

  const updatedOutputs = indexValueArr.map(([index, value]) => {
    const output = outputs[index]
    output.name = value

    return output
  })

  return updatedOutputs
}

export default function updateAbiOutputs(
  abi: any[],
  methodMetas: ReturnType<typeof getModuleMethodMetas>
) {
  // Update abi outputs with decipher return names
  for (const method in methodMetas) {
    const methodMeta = methodMetas[method]
    const { descriptions } = methodMeta
    const { returns } = descriptions
    if (returns) {
      const indexValueArr = Object.keys(returns).map(
        (key, index) => [index, key] as const
      )

      const methodIndex = abi.findIndex((item) => item.name === method)
      if (methodIndex !== -1) {
        const updatedOutputs = outputName(
          indexValueArr,
          abi[methodIndex].outputs
        )
        if (updatedOutputs) {
          abi[methodIndex].outputs = updatedOutputs
        }
      }
    }
  }

  return abi
}
