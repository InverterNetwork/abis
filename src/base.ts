export type ModuleType =
  | 'logicModule'
  | 'paymentProcessor'
  | 'authorizer'
  | 'fundingManager'
  | 'orchestrator'

export type Tuple = { type: 'tuple' | 'tuple[]' }

export type Tags = 'any(string)' | 'decimal'
