import { BaseData, ModuleName, ModuleType } from './data'

export type GetModuleNameByType<T extends ModuleType> = Extract<
  BaseData[number],
  { moduleType: T }
>['name']

export type GetModuleVersion<N extends ModuleName> = Extract<
  BaseData[number],
  { name: N }
>['version']

export type GetModuleData<
  N extends ModuleName,
  V extends GetModuleVersion<N> | string,
> = Extract<BaseData[number], { name: N; version: V }>
