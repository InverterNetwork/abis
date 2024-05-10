import { ExtendedAbi } from '../../src/types/extendedAbi'
import { ModuleType } from '../../src'
import { DeploymentInputs } from './'

export type Compiled = {
  name: string
  description: string
  moduleType: ModuleType
  deploymentInputs: DeploymentInputs
  abi: ExtendedAbi
}[]
