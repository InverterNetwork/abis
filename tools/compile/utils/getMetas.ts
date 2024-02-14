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

export function getModuleMethodMetas(metadataOutput: Record<string, object>) {
  const { devdoc, userdoc } = metadataOutput as {
    devdoc: { methods: Record<string, any> }
    userdoc: { methods: Record<string, any> }
  }

  const result = {} as Record<string, any>

  // first initialize the result object with the userdoc
  for (const [key, value] of Object.entries(userdoc.methods)) {
    const [name] = key.split('(')
    result[name] = formatMethodEntries(value)
  }

  console.log(result)

  // then update the result object with the devdoc
  for (const [key, value] of Object.entries(devdoc.methods)) {
    const [name] = key.split('(')
    const prevValue = result[name]
    const newValue = formatMethodEntries(value)
    result[name] = {
      descriptions: {
        ...prevValue.descriptions,
        ...newValue?.descriptions,
      },
      tags: newValue?.tags,
    }
  }

  return result
}
