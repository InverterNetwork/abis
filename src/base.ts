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

export type Tuple = { type: 'tuple' | 'tuple[]' }

export type Tag = 'any' | 'decimals'
