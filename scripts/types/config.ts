import type { Tags } from './meta'

export type DeploymentArgData = {
  name: string
  type: string
  tags: Tags
}

export type DeploymentInputs = {
  configData?: DeploymentArgData[]
  bytecode?: string
}

export type AbiMemberConfig = {
  tags: Tags
  returnNames: string[]
}

export type AbiMemberConfigs = Record<string, AbiMemberConfig>

export type Config = {
  deploymentInputs: DeploymentInputs
  abiMembers: AbiMemberConfigs
}
