import { DeploymentInputs, ParsedRawMetadata } from '../types'
import { AbiMeta } from '../types/meta'
import getParsedConfig from './getParsedConfig'
import getModuleDetails from './getModuleDetails'
import getAbiMemberMetas from './getAbiMemberMetas'

export default function (
  itemPath: string,
  parsedMetadata: ParsedRawMetadata
): AbiMeta {
  // 0- Get config data
  const { deploymentInputs, abiMembers } = getParsedConfig(itemPath),
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
    deploymentInputs: deploymentInputs as DeploymentInputs,
  }
}
