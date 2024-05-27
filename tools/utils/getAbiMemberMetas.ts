import {
  AbiMemberConfigs,
  AbiMemberMeta,
  AbiMeta,
  ParsedRawMetadata,
} from '../types'
import getAbiMemberDescriptions from './getAbiMemberDescriptions'

export default function (
  output: ParsedRawMetadata['output'],
  abiMembers: AbiMemberConfigs
) {
  const acc = {} as AbiMeta['abiMemberMetas']

  const desciptions = getAbiMemberDescriptions(output, abiMembers)

  // 1- Loop through each abi member
  for (const key in abiMembers) {
    if (!acc[key]) acc[key] = {} as any

    // 2- Set tags and returnNames
    acc[key].tags = abiMembers[key].tags
    acc[key].returnNames = abiMembers[key].returnNames
    // 3- Set descriptions
    if (!desciptions[key]) continue
    acc[key].descriptions = desciptions[key].reduce(
      (acc, { name, description }) => {
        // prune description from more than one space
        acc[name] = description.replace(/\s+/g, ' ').trim()
        return acc
      },
      {} as AbiMemberMeta['descriptions']
    )
  }

  return acc
}
