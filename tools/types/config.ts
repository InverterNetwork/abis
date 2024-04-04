import { Tag } from '../../src/base'

export type DeploymentArgData = {
  name: string
  type: string
}

export type DeploymentArgs = {
  configData?: DeploymentArgData[]
  dependencyData?: DeploymentArgData[]
}

export type AbiMemberConfig = {
  tags: Record<string, Tag>
  returnsNames: string[]
}

export type AbiMemberConfigs = Record<string, AbiMemberConfig>

export type Config =
  | {
      deploymentArgs: DeploymentArgs
    }
  | AbiMemberConfigs
