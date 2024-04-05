import {
  AbiMemberConfigs,
  AbiMemberMeta,
  AbiMeta,
  ParsedRawMetadata,
} from '../types'
import getAbiMemberDescriptions from '../utils/getAbiMemberDescriptions'

export default function (
  output: ParsedRawMetadata['output'],
  abiMembers: AbiMemberConfigs
) {
  const acc = {} as AbiMeta['abiMemberMetas']

  const desciptions = getAbiMemberDescriptions(output, abiMembers)

  // 1- Loop through each abi member
  for (const key in abiMembers) {
    if (!acc[key]) acc[key] = {} as any

    // 2- Set tags and returnsNames
    acc[key].tags = abiMembers[key].tags
    acc[key].returnsNames = abiMembers[key].returnsNames
    // 3- Set descriptions
    acc[key].descriptions = desciptions[key].reduce(
      (acc, { name, description }) => {
        acc[name] = description
        return acc
      },
      {} as AbiMemberMeta['descriptions']
    )
  }

  return acc
}
