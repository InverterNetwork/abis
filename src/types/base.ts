import type { ModuleType } from './data'

export type TagSource = 'params' | 'contract'
export type TagLocation = 'exact' | 'indirect'

export type Tag =
  | 'approval'
  | 'any'
  | 'decimals'
  | 'decimals:extras:issuanceToken'
  | `decimals:${TagSource}:${TagLocation}:${string}`

export type UserFacingModuleType = Exclude<
  ModuleType,
  'external' | 'factories' | 'base' | 'utils'
>
