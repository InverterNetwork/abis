import { data } from '../data'

export type BaseData = typeof data

export type ModuleType = BaseData[number]['moduleType']
export type ModuleName = BaseData[number]['name']
export type GetModuleVersion<N extends ModuleName> = Extract<
  BaseData[number],
  { name: N }
>['version']

export type ModuleData<
  N extends ModuleName,
  V extends GetModuleVersion<N>,
> = Extract<BaseData[number], { name: N; version: V }>
