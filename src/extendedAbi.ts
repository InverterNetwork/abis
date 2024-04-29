import {
  AbiConstructor,
  AbiError,
  AbiEvent,
  AbiFallback,
  AbiFunction,
  AbiReceive,
  AbiType,
  AbiInternalType,
  SolidityTuple,
  SolidityArrayWithTuple,
} from 'abitype'
import { Tag } from './base'

type ExtendedAbiParameterBase = {
  name?: string
  description?: string
  /** Representation used by Solidity compiler */
  internalType?: AbiInternalType
}

// Tuple and Tuple array types, AbiParamters with these types have a components field
export type TupleType = 'tuple' | 'tuple[]'

// Non-tuple types, AbiParameters with these types do not have a components field
export type NonTupleType = Exclude<
  AbiType,
  SolidityTuple | SolidityArrayWithTuple
>

// AbiParameter without components field + description, tags fields
export type NonTupleExtendedAbiParameter = ExtendedAbiParameterBase & {
  type: NonTupleType
  tags?: readonly Tag[]
}

// AbiParameter with components field, components field is an array of FormattedAbiParameters
export type TupleExtendedAbiParameter = ExtendedAbiParameterBase & {
  type: TupleType
  components: readonly ExtendedAbiParameter[]
}

// FormattedAbiParameter is either a NonTupleFormattedAbiParameter or a TupleFormattedAbiParameter
export type ExtendedAbiParameter =
  | NonTupleExtendedAbiParameter
  | TupleExtendedAbiParameter

export type ExtendedAbiFunction = Omit<AbiFunction, 'inputs' | 'outputs'> & {
  inputs: readonly ExtendedAbiParameter[]
  outputs: readonly ExtendedAbiParameter[]
  description?: string
}

export type ExtendedAbiEvent = Omit<AbiEvent, 'inputs'> & {
  inputs: readonly ExtendedAbiParameter[]
  description?: string
}

export type ExtendedAbi = readonly (
  | AbiConstructor
  | AbiError
  | ExtendedAbiEvent
  | AbiFallback
  | ExtendedAbiFunction
  | AbiReceive
)[]
