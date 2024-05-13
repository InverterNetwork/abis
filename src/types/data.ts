import { data } from '../data'

export type BaseData = typeof data

export type ModuleType = BaseData[number]['moduleType']
export type ModuleName = BaseData[number]['name']
