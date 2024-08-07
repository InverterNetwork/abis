import type { BaseData, ModuleName, ModuleType } from './data'

export type GetModuleNameByType<T extends ModuleType> = Extract<
  BaseData[number],
  { moduleType: T }
>['name']

export type GetModuleData<N extends ModuleName> = Extract<
  BaseData[number],
  { name: N }
>
