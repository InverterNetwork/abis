import { formatMethodEntries, formatModuleTags } from './format'

export function getModuleMeta(nodes: any[]) {
  const node = nodes[nodes.length - 1],
    rawName = node?.name
  if (!rawName) throw new Error('Module name not found')
  // Remove the first character if it is a capital I ( I for Interface )
  const name = rawName[0] === 'I' ? rawName.slice(1) : rawName
  // Get the tags of the node
  const tags = formatModuleTags(node?.documentation.text),
    version = tags.version,
    moduletype = tags.moduletype,
    description = tags.description

  return { name, version, moduletype, description }
}

export function getModuleMethodMetas(methods: Record<string, object>) {
  const result = {} as Record<string, any>

  for (const [key, value] of Object.entries(methods)) {
    const [name] = key.split('(')
    result[name] = formatMethodEntries(value)
  }

  return result
}
