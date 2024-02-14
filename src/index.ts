import * as data from './data'
export { data }

export type AbiKeys = keyof typeof data
export type AbiVersionKeys = keyof (typeof data)[AbiKeys]
type Data = (typeof data)[AbiKeys][AbiVersionKeys]
export type MethodMeta = Data['methodMetas']
export type Abi = Data['abi']

export type ModuleTypes =
  | 'logicModule'
  | 'paymentProcessor'
  | 'authorizer'
  | 'fundingManager'
