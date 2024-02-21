import { KeysOfUnion, PickDeep, UnionToIntersection, ValueOf } from 'type-fest'
import * as data from './data'
export { data }

type BaseData = typeof data

export type AbiKey = keyof BaseData
export type AbiVersionKey = keyof BaseData[AbiKey]
export type Data = BaseData[AbiKey][AbiVersionKey]

export type MethodMetas = Data['methodMetas']
export type MethodMeta = ValueOf<MethodMetas>
export type Tags = UnionToIntersection<MethodMeta['tags']>[KeysOfUnion<
  MethodMeta['tags']
>]

export type Description = ValueOf<MethodMeta['descriptions']>
export type ReturnDescription = PickDeep<
  MethodMeta,
  'descriptions.returns'
>['descriptions']['returns']

export type Abi = Data['abi']

export type AbiFunctions = Extract<Abi[number], { type: 'function' }>
export type AbiEvents = Extract<Abi[number], { type: 'event' }>
export type FunctionInputs = AbiFunctions['inputs']
export type FunctionOutputs = AbiFunctions['outputs']

export type ModuleTypes =
  | 'logicModule'
  | 'paymentProcessor'
  | 'authorizer'
  | 'fundingManager'
