import { ModuleType } from './data'

export type Tag =
  | 'any'
  | 'decimals'
  | `decimals:${'internal' | 'external'}:${'exact' | 'indirect'}:${string}`

export type UserFacingModuleType = Exclude<
  ModuleType,
  'external' | 'factories' | 'base' | 'utils'
>
