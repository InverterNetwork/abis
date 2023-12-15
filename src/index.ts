import * as abis from './abis'
export { abis }

export type AbiKeys = keyof typeof abis
export type AbiVersionKeys = keyof (typeof abis)[AbiKeys]
