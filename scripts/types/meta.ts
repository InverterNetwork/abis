import type { DeploymentArgData, DeploymentInputs } from '.'
import type { ModuleType, Tag } from '../../src'

export type Descriptions = Record<'selfDescription' | string, string>
export type Tags = Record<string, Tag[]>

export type ModuleMeta = {
  name: string
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

export type ExtendedDeploymentInputs = {
  configData?: ExtendedDeploymentArgData[]
}

export type AbiMeta = {
  deploymentInputs: DeploymentInputs
  moduleMeta: ModuleMeta
  abiMemberMetas: AbiMemberMetas
}
