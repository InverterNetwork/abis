import { Abi } from 'abitype'

type LinkReferences = Record<string, unknown>
export type MethodIdentifiers = Record<
  string,
  {
    notice?: string
    returns?: Record<string, string>
    params?: Record<string, string>
  }
>
type ExportedSymbols = Record<string, number[]>

type Bytecode = {
  object: string
  sourceMap: string
  linkReferences: LinkReferences
}

type Metadata = {
  compiler: { version: string }
  language: string
  output: { abi: Abi; devdoc: DocBase; userdoc: DocBase }
  settings: Settings
  sources: Sources
  version: number
}

type DocBase = {
  kind: string
  methods: MethodIdentifiers
  version: number
}

type ParsedDevDoc = DocBase & { events?: MethodIdentifiers }
type ParsedUserDoc = DocBase & { events?: MethodIdentifiers; notice?: string }

type Settings = {
  remappings: string[]
  optimizer: Optimizer
  metadata: Metadata
  compilationTarget: Record<string, string>
  evmVersion: string
  libraries: LinkReferences
}

type Documentation = {
  id: number
  nodeType: string
  src: string
  text: string
}

type Optimizer = { enabled: boolean; runs: number }
type Sources = Record<
  string,
  { keccak256: string; urls: string[]; license: string }
>

type Node = {
  id: number
  nodeType: string
  src: string
  nodes: Node[]
  literals?: string[]
  absolutePath?: string
  file?: string
  nameLocation?: string
  scope?: number
  sourceUnit?: number
  symbolAliases?: SymbolAliase[]
  unitAlias?: string
  abstract?: boolean
  baseContracts?: BaseContract[]
  canonicalName?: string
  contractDependencies?: any[]
  contractKind?: string
  fullyImplemented?: boolean
  linearizedBaseContracts?: number[]
  name?: string
  usedErrors?: number[]
  usedEvents?: number[]
  documentation?: Documentation
}

type SymbolAliase = { foreign: Foreign; nameLocation: string }
type Foreign = {
  id: number
  name: string
  nodeType: string
  overloadedDeclarations: any[]
  referencedDeclaration: number
  src: string
  typeDescriptions: LinkReferences
}
type BaseName = {
  id: number
  name: string
  nameLocations: string[]
  nodeType: string
  referencedDeclaration: number
  src: string
}
type BaseContract = {
  baseName: BaseName
  id: number
  nodeType: string
  src: string
}

type Ast = {
  absolutePath: string
  id: number
  exportedSymbols: ExportedSymbols
  nodeType: string
  src: string
  nodes: Node[]
  license: string
}

export type ParsedRawMetadata = {
  compiler: { version: string }
  language: string
  output: { abi: Abi; devdoc: ParsedDevDoc; userdoc: ParsedUserDoc }
  settings: Settings
  sources: Sources
  version: number
}

export default interface Root {
  abi: Abi
  bytecode: Bytecode
  deployedBytecode: Bytecode
  methodIdentifiers: MethodIdentifiers
  rawMetadata: string
  metadata: Metadata
  ast: Ast
  id: number
}
