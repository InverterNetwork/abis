import {
  AbiConstructor,
  AbiError,
  AbiEvent,
  AbiFallback,
  AbiFunction,
  AbiReceive,
  AbiParameter,
} from 'abitype'
import { Tag } from './base'

export type ExtendedAbiParameter = AbiParameter & {
  description?: string
  tag?: Tag
}

export type ExtendedAbiFunction = Omit<AbiFunction, 'inputs' | 'outputs'> & {
  inputs: readonly ExtendedAbiParameter[]
  outputs: readonly ExtendedAbiParameter[]
  description?: string
}

export type ExtendedAbiEvent = Omit<AbiEvent, 'inputs'> & {
  inputs: readonly ExtendedAbiParameter[]
  description?: string
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
