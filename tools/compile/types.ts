export type MetadataOutput = Record<string, object>

export type ModuleMeta = {
  name: any
  version: string
  moduletype: string
  description: string
}

export type MethodMeta = {
  descriptions: Record<string, string | Record<string, string>>
  tags: Record<string, any>
}

export type MethodMetas = Record<string, MethodMeta>
