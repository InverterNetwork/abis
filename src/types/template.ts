import type { ExtractAbiFunctionNames } from 'abitype'
import type { ModuleName } from './data'
import type {
  GetModuleData,
  FilterBySuffix,
  GetAbiFunctionSelector,
} from './utils'

/**
 * @description Module names which are compatible with the Autorizer v2
 */
export type AutV2ModuleName = FilterBySuffix<ModuleName, '_v2' | '_v3'>

/**
 * @description Private role for the Autorizer v2
 * @template TModuleName - The module name
 * @property name - The name of the role
 * @property adminRole - The admin role
 * @property members - The members of the role
 * @property functions - The functions of the role
 * @returns The private role
 */
export type AuthorizerPrivateRole<TModuleName extends AutV2ModuleName> = {
  name: string
  adminRole: `0x${string}`
  members: `0x${string}`[]
  functions: GetAbiFunctionSelector<TModuleName>[]
}

/**
 * @description The Autorizer template config
 * @template TModuleName - The module name
 * @property name - The name of the template
 * @property module - The module name
 * @property roles - The roles of the template
 * @property publicFunctions - The public functions of the template
 */
export type AuthorizerTemplateConfig<TModuleName extends AutV2ModuleName> = {
  name: string
  module: TModuleName
  roles: Array<{
    name: string
    adminRole: `0x${string}`
    functions: ExtractAbiFunctionNames<GetModuleData<TModuleName>['abi']>[]
    members?: `0x${string}`[]
  }>
  publicFunctions?: ExtractAbiFunctionNames<GetModuleData<TModuleName>['abi']>[]
}

/**
 * @description Return type for defining an Autorizer template
 * @template TModuleName - The module name
 * @property name - The name of the template
 * @property module - The module name
 * @property roles - The roles of the template
 * @property publicRoles - The public functions of the template
 * @returns The Autorizer template
 */
export type DefineAuthorizerTemplateReturnType<
  TModuleName extends AutV2ModuleName,
> = {
  name: string
  module: TModuleName
  roles: AuthorizerPrivateRole<TModuleName>[]
  publicRoles: GetAbiFunctionSelector<TModuleName>[]
}
