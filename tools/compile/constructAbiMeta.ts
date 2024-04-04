import { DeploymentArgs, ParsedRawMetadata } from '../types'
import { AbiMeta } from '../types/meta'
import getParsedConfig from '../utils/getParsedConfig'
import getAbiMemberDescriptions from '../utils/getAbiMemberDescriptions'
import getModuleDetails from '../utils/getModuleDetails'

export default function (
  itemPath: string,
  parsedMetadata: ParsedRawMetadata
): AbiMeta {
  // 0- Get config data
  const configPath = itemPath.replace('.json', '_config.json'),
    { deploymentArgs, ...restConfig } = getParsedConfig(configPath),
    // 1- Get module details
    moduleMeta = getModuleDetails(
      parsedMetadata.output.userdoc.notice,
      itemPath
    ),
    // 2- Get abi member desciptions
    desciptions = getAbiMemberDescriptions(parsedMetadata.output),
    // 4- Combine abi member metas
    abiMemberMetas = (() => {
      const acc = {} as AbiMeta['abiMemberMetas']

      // 1- Loop through each abi member
      for (const key in restConfig) {
        if (!acc[key])
          acc[key] = {} as any

          // 2- Set descriptions
        ;(acc[key].descriptions = desciptions[key].reduce(
          (acc, { name, description }) => {
            acc[name] = description
            return acc
          },
          {}
        )),
          // 3- Set tags and returnsNames
          (acc[key].tags = restConfig[key].tags),
          (acc[key].returnsNames = restConfig[key].returnsNames)
      }

      return acc
    })()

  return {
    moduleMeta,
    abiMemberMetas,
    deploymentArgs: deploymentArgs as DeploymentArgs,
  }
}
