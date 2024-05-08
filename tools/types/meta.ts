import { DeploymentArgData, DeploymentArgs } from '.'
import { ModuleType, Tag } from '../../src/'

export type Descriptions = Record<'selfDescription' | string, string>
export type Tags = Record<string, Tag[]>

export type ModuleMeta = {
  name: string
  version: `${number}`
  moduleType: ModuleType
  description: string
}

export type AbiMemberMeta = {
  descriptions: Descriptions
  tags: Tags
  returnNames?: string[]
}

export type AbiMemberMetas = Record<string, AbiMemberMeta>

type ExtendedDeploymentArgData = DeploymentArgData & {
  description: string
}

export type ExtendedDeploymentArgs = {
  configData?: ExtendedDeploymentArgData[]
  dependencyData?: ExtendedDeploymentArgData[]
}

export type AbiMeta = {
  // deploymentArgs: ExtendedDeploymentArgs
  deploymentArgs: DeploymentArgs
  moduleMeta: ModuleMeta
  abiMemberMetas: AbiMemberMetas
}
