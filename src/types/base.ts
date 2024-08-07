import type { ModuleType } from './data'

export type Tag =
  | 'approval'
  | 'any'
  | 'decimals'
  | `decimals:${'params' | 'contract'}:${'exact' | 'indirect'}:${string}`

export type UserFacingModuleType = Exclude<
  ModuleType,
  'external' | 'factories' | 'base' | 'utils'
>
