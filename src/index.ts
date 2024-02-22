import { KeysOfUnion, PickDeep, UnionToIntersection, ValueOf } from 'type-fest'
import * as data from './data'
export { data }

export type ModuleTypes =
  | 'logicModule'
  | 'paymentProcessor'
  | 'authorizer'
  | 'fundingManager'

type BaseData = typeof data

// All the keys of the data object
export type ModuleKeys = keyof BaseData
// All the version keys
export type ModuleVersionKeys = KeysOfUnion<BaseData[ModuleKeys]>

// Selectable version
export type ModuleVersion<
  K extends ModuleKeys,
  V extends ModuleVersionKeys,
> = BaseData[K][V]

// All ModuleDatas
export type ModuleVersions = BaseData[ModuleKeys][ModuleVersionKeys]

// Selectable MethodMetas key
export type MethodKey<
  K extends ModuleKeys,
  V extends ModuleVersionKeys,
> = keyof ModuleVersion<K, V>['methodMetas']

// All the MethodMeta keys
export type MethodKeys = KeysOfUnion<ModuleVersions['methodMetas']>

// The value of the methodMetas object
export type MethodMeta<
  K extends ModuleKeys,
  V extends ModuleVersionKeys,
> = ModuleVersion<K, V>['methodMetas']

// All the methodMetas
export type MethodMetas = ValueOf<ModuleVersions['methodMetas']>

// Selectable tag key
export type TagKey<
  K extends ModuleKeys,
  V extends ModuleVersionKeys,
  MK extends MethodKeys,
> = keyof MethodMeta<K, V>[MK]['tags']

// All the tag keys
export type TagKeys = KeysOfUnion<MethodMetas['tags']>
// Selectable tag
export type Tag<
  K extends ModuleKeys,
  V extends ModuleVersionKeys,
  MK extends MethodKeys,
  TK extends TagKey<K, V, MK>,
> = MethodMeta<K, V>[MK]['tags'][TK]
// All Tags
export type Tags = UnionToIntersection<MethodMetas['tags']>

// Selectable description key
export type DescriptionKey<
  K extends ModuleKeys,
  V extends ModuleVersionKeys,
  MK extends MethodKeys,
> = keyof MethodMeta<K, V>[MK]['descriptions']
// All the description keys
export type DescriptionKeys = KeysOfUnion<MethodMetas['descriptions']>
export type ReturnDescriptionKeys = KeysOfUnion<
  UnionToIntersection<
    PickDeep<MethodMetas, 'descriptions.returns'>['descriptions']['returns']
  >
>
// Selectable description
export type Description<
  K extends ModuleKeys,
  V extends ModuleVersionKeys,
  MK extends MethodKeys,
  DK extends DescriptionKey<K, V, MK>,
> = MethodMeta<K, V>[MK]['descriptions'][DK]
// All Descriptions
export type Descriptions = ValueOf<MethodMetas['descriptions']>
// Selectable return description
export type ReturnDescription<
  K extends ModuleKeys,
  V extends ModuleVersionKeys,
  MK extends MethodKeys,
> = UnionToIntersection<
  Extract<
    MethodMeta<K, V>[MK],
    {
      descriptions: {
        returns: object
      }
    }
  >
>['descriptions']['returns']

export type ReturnDescriptions = ValueOf<
  UnionToIntersection<
    PickDeep<MethodMetas, 'descriptions.returns'>['descriptions']['returns']
  >
>
// Selectable Abi
export type Abi<
  K extends ModuleKeys,
  V extends ModuleVersionKeys,
> = ModuleVersion<K, V>['abi']
// All Abis
export type Abis = ModuleVersions['abi']

// Selectable AbiFunction
export type AbiFunction<
  K extends ModuleKeys,
  V extends ModuleVersionKeys,
> = Extract<Abi<K, V>[number], { type: 'function' }>
// All the function abis
export type AbiFunctions = Extract<Abis[number], { type: 'function' }>

// Selectable AbiEvent
export type AbiEvent<
  K extends ModuleKeys,
  V extends ModuleVersionKeys,
> = Extract<Abi<K, V>[number], { type: 'event' }>
// All the event abis
export type AbiEvents = Extract<Abis[number], { type: 'event' }>

// Selectable FunctionInputs
export type FunctionInput<
  K extends ModuleKeys,
  V extends ModuleVersionKeys,
> = AbiFunction<K, V>['inputs'][number]
// All the function inputs
export type FunctionInputs = AbiFunctions['inputs'][number]

// Selectable FunctionOutputs
export type FunctionOutput<
  K extends ModuleKeys,
  V extends ModuleVersionKeys,
> = AbiFunction<K, V>['outputs'][number]
// All the function outputs
export type FunctionOutputs = AbiFunctions['outputs'][number]
