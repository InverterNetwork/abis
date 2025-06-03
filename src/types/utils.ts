import type { BaseData, ModuleName, ModuleType } from './data'

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
