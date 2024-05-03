import { BaseData, ModuleType } from './data'

export type Pretty<T> = { [K in keyof T]: T[K] } & unknown

export type GetModuleNameByType<T extends ModuleType> = Extract<
  BaseData[number],
  { moduleType: T }
>['name']
