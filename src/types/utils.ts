import type { ExtractAbiFunctionNames } from 'abitype'
import type { BaseData, ModuleName, ModuleType } from './data'
import type { ExtendedAbi } from './extended-abi'

export type GetModuleNameByType<T extends ModuleType> = Extract<
  BaseData[number],
  { moduleType: T }
>['name']

export type GetModuleData<N extends ModuleName> = Extract<
  BaseData[number],
  { name: N }
>

// HELPERS
// ------------------------------------------------------------

/**
 * Filter a string by a suffix
 * @template T - The string to filter
 * @template Suffix - The suffix to filter by
 * @returns The string filtered by the suffix
 */
export type FilterBySuffix<
  T,
  Suffix extends string,
> = T extends `${string}${Suffix}` ? T : never

/**
 * @description Function selector for an ABI
 * @template T - The module name or extended ABI
 * @property selector - The function selector
 * @property name - The name of the function
 */
export type GetAbiFunctionSelector<T extends ModuleName | ExtendedAbi> = {
  selector: `0x${string}`
  name: ExtractAbiFunctionNames<
    T extends ModuleName ? GetModuleData<T>['abi'] : T
  >
}
