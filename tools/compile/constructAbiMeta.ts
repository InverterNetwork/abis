import { DeploymentArgs, ParsedRawMetadata } from '../types'
import { AbiMeta } from '../types/meta'
import getParsedConfig from '../utils/getParsedConfig'
import getModuleDetails from '../utils/getModuleDetails'
import getAbiMemberMetas from './getAbiMemberMetas'

export default function (
  itemPath: string,
  parsedMetadata: ParsedRawMetadata
): AbiMeta {
  // 0- Get config data
  const { deploymentArgs, abiMembers } = getParsedConfig(itemPath),
    // 1- Get module details
    moduleMeta = getModuleDetails(
      parsedMetadata.output.userdoc.notice,
      itemPath
    ),
    // 2- Combine abi member metas
    abiMemberMetas = getAbiMemberMetas(parsedMetadata.output, abiMembers)

  return {
    moduleMeta,
    abiMemberMetas,
    deploymentArgs: deploymentArgs as DeploymentArgs,
  }
}
