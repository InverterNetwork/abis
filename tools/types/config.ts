import { Tags } from './meta'

export type DeploymentArgData = {
  name: string
  type: string
  tags: Tags
}

export type DeploymentArgs = {
  configData?: DeploymentArgData[]
  dependencyData?: DeploymentArgData[]
}

export type AbiMemberConfig = {
  tags: Tags
  returnNames: string[]
}

export type AbiMemberConfigs = Record<string, AbiMemberConfig>

export type Config = {
  deploymentArgs: DeploymentArgs
  abiMembers: AbiMemberConfigs
}
