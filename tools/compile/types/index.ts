export { default as Out } from './out'

export type ModuleMeta = {
  name: any
  version: string
  moduletype: string
  description: string
}

export type MethodMeta = {
  descriptions: Record<string, string>
  tags: Record<string, string>
  returnsNames?: string[]
}

export type MethodMetas = Record<string, MethodMeta>
