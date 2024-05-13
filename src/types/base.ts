import { ModuleType } from './data'

export type Tag =
  | 'any'
  | 'decimals'
  | `decimals:external:indirect:${string}`
  | `decimals:internal:${'exact' | 'indirect'}:${string}`

export type UserFacingModuleType = Exclude<
  ModuleType,
  'external' | 'factories' | 'orchestrator' | 'base' | 'utils'
>
