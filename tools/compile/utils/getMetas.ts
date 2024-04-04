import { getEntries } from '../../utils'
import { MethodMetas, Out } from '../../types'
import formatMethodMeta from './formatMethodMeta'

function module(astNodes: Out['ast']['nodes'], itemPath: string) {
  // 1- Get the last node of the AST
  const node = astNodes[astNodes.length - 1]
  // 2- Split the path of the JSON file
  const parts = itemPath.split('/'),
    // 3- Extract the module metas
    description = node?.documentation?.text?.replace('@notice ', '') || '',
    moduleType = parts[parts.length - 3],
    name = parts[parts.length - 2],
    version = parts[parts.length - 1].replace('.json', '')

  return { name, version, moduleType, description }
}

function method({ devdoc, userdoc }: Out['metadata']['output']) {
  const accumulated = {} as MethodMetas

  // 1- initialize the accumulation with the userdoc
  for (const [key, value] of getEntries(userdoc.methods)) {
    const name = key.split('(')[0]
    accumulated[name] = formatMethodMeta(value)
  }

  // 2- update the accumulation with the devdoc
  for (const [key, value] of getEntries(devdoc.methods)) {
    const name = key.split('(')[0],
      prevValue = accumulated[name],
      newValue = formatMethodMeta(value)

    accumulated[name] = {
      descriptions: {
        ...prevValue?.descriptions,
        ...newValue?.descriptions,
      },
      tags: newValue?.tags,
      returnsNames: newValue?.returnsNames,
    }
  }

  return accumulated
}

export default {
  module,
  method,
}
