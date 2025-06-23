import type { ModuleType, ExtendedAbi } from '../../src'
import type { DeploymentInputs } from '.'

export type Compiled = {
  name: string
  description: string
  moduleType: ModuleType
  deploymentInputs: DeploymentInputs
  abi: ExtendedAbi
}[]
