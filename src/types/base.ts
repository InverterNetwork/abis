import { ModuleType } from './data'

export type Tag = 'any' | 'decimals'

export type UserFacingModuleType = Exclude<
  ModuleType,
  'external' | 'factories' | 'orchestrator' | 'base' | 'utils'
>
