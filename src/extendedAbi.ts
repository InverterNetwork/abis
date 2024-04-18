import {
  AbiConstructor,
  AbiError,
  AbiEvent,
  AbiFallback,
  AbiFunction,
  AbiInternalType,
  AbiReceive,
  AbiType,
} from 'abitype'
import { Tag } from './base'

export type ExtendedAbiParameter =
  | {
      type: AbiType
      name?: string | undefined
      internalType?: AbiInternalType | undefined
      description?: string
      tag?: Tag
    }
  | {
      type: 'tuple' | `tuple[${string}]`
      name?: string | undefined
      internalType?: AbiInternalType | undefined
      components: readonly ExtendedAbiParameter[]
      description?: string
      tag?: Tag
    }

export type ExtendedAbiFunction = Omit<AbiFunction, 'inputs' | 'outputs'> & {
  inputs: readonly ExtendedAbiParameter[]
  outputs: readonly ExtendedAbiParameter[]
}

export type ExtendedAbiEvent = Omit<AbiEvent, 'inputs'> & {
  inputs: readonly ExtendedAbiParameter[]
}

export type ExtendedAbi = (
  | AbiConstructor
  | AbiError
  | ExtendedAbiEvent
  | AbiEvent
  | AbiFallback
  | ExtendedAbiFunction
  | AbiFunction
  | AbiReceive
)[]
