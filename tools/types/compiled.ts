import { ExtendedAbi } from '../../src/types/extendedAbi'
import { ModuleType } from '../../src'
import { DeploymentArgs } from './'

export type Compiled = {
  name: string
  description: string
  moduleType: ModuleType
  deploymentArgs: DeploymentArgs
  abi: ExtendedAbi
}[]
