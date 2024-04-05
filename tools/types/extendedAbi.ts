import {
  AbiConstructor,
  AbiError,
  AbiEvent,
  AbiFallback,
  AbiFunction,
  AbiParameter,
  AbiReceive,
} from 'abitype'
import { Tag } from '../../src/base'

export type ExtendedAbiParameter = AbiParameter & {
  description?: string
  tag?: Tag
}

export type ExtendedAbiFunction = AbiFunction & {
  inputs: ExtendedAbiParameter[]
  outputs: ExtendedAbiParameter[]
}

export type ExtendedAbiEvent = AbiEvent & {
  inputs: ExtendedAbiParameter[]
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
