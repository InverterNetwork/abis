export type ModuleType =
  | 'logicModule'
  | 'paymentProcessor'
  | 'authorizer'
  | 'fundingManager'
  | 'orchestrator'
  | 'external'
  | 'factories'
  | 'base'
  | 'utils'

export type UserFacingModuleType =
  | 'logicModule'
  | 'paymentProcessor'
  | 'authorizer'
  | 'fundingManager'

export type Tuple = { type: 'tuple' | 'tuple[]' }

export type Tag = 'any' | 'decimals'
