import { ExtendedAbi } from '../../src/extendedAbi'
import { ModuleType } from '../../src/base'
import { DeploymentArgs } from './'

export type Compiled = {
  [key: string]: {
    [key: string]: {
      name: string
      description: string
      moduleType: ModuleType
      version: string
      deploymentArgs: DeploymentArgs
      abi: ExtendedAbi
    }
  }
}
