import * as data from './data'
export { data }

export type AbiKeys = keyof typeof data
export type AbiVersionKeys = keyof (typeof data)[AbiKeys]

export type ModuleTypes =
  | 'logicModule'
  | 'paymentProcessor'
  | 'authorizer'
  | 'fundingManager'
