import { Abi } from 'abitype'
import { AbiMemberMetas } from '../types'

export default function (abi: Abi, abiMemberMetas: AbiMemberMetas) {
  // 1- Itterate over the member metas
  for (const member in abiMemberMetas) {
    // 2- Get the member metas -> returnNames field
    const { returnNames } = abiMemberMetas[member]
    // 3- Check if the returnNames is defined
    if (!!returnNames) {
      // 4- Map the { name with index }
      const nameWithIndexArr = returnNames.map(
          (name, index) => ({ index, name }) as const
        ),
        // 5- Find the index of the member in the ABI
        memberIndex = abi.findIndex(
          (item) => 'name' in item && item.name === member
        )

      // 6- Check if the member index is found
      if (memberIndex !== -1) {
        // 7- Update the outputs of the member with the nameWithIndexArr
        const updatedOutputs = nameWithIndexArr.map(({ index, name }) => {
          const output = (abi[memberIndex] as any)?.outputs[index]
          output.name = name
          return output
        })

        if (updatedOutputs) (abi[memberIndex] as any).outputs = updatedOutputs
      }
    }
  }

  return abi
}
