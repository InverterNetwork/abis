export type ModuleTypes =
  | 'logicModule'
  | 'paymentProcessor'
  | 'authorizer'
  | 'fundingManager'

export type Tuple = { type: 'tuple' | 'tuple[]' }
