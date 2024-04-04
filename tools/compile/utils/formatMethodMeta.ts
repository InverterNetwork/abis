import { getEntries } from '../../utils'
import { MethodMeta } from '../../types'
import { MethodIdentifiers } from '../../types/out'
import { ValueOf } from 'type-fest'

function handleParamWithTags(param: string) {
  // 1- Get the parts of the param
  const [description, tagsStr] = param.split('tags:')

  // 2- remove the [ from the beggining and ] from the end of the tags part
  const tags = tagsStr
    .slice(1, tagsStr.length - 1)
    .split(',')
    .map((tag) => tag.trim())

  // 3- Setup the tags object
  const tagsObject = {} as Record<string, string>

  // 4- Itterate over the tags
  for (const tag of tags) {
    // 5- Split the tag into key and value
    const [key, value] = tag.split(':')

    // 6- Add the key and value to the tags object
    tagsObject[key] = value
  }

  return { tagsObject, description }
}

function handleParamObject(obj: Record<string, string>) {
  // 0- Initialize the accumulated object
  const accumulated = {
    descriptions: {},
    tags: {},
  } as MethodMeta

  // 1- Get the entries of the object
  const entries = getEntries(obj)
  // 2- Itterate over the entries to update the accumulated
  for (const [paramName, paramValue] of entries) {
    // 3- Check if the param value includes tags
    if (paramValue.includes('tags:')) {
      const { tagsObject, description } = handleParamWithTags(paramValue)

      // ( description ) Add the description to the descriptions object
      accumulated.descriptions = {
        ...accumulated.descriptions,
        [paramName]: description,
      }

      // ( tags ) Add the tags to the tags object
      accumulated.tags = {
        ...accumulated.tags,
        ...tagsObject,
      }

      // Skip the rest of the loop
      continue
    }

    // ( defaults ) Add the param name and value to the descriptions
    accumulated.descriptions = {
      ...accumulated.descriptions,
      [paramName]: paramValue,
    }
  }

  return accumulated
}

export default function (items: ValueOf<MethodIdentifiers>) {
  const accumulated = {
    descriptions: {},
    tags: {},
    returnsNames: [],
  } as MethodMeta

  for (const [key, value] of getEntries(items)) {
    switch (key) {
      case 'notice':
        accumulated.descriptions = {
          ...accumulated.descriptions,
          method: value.replace(/\s+/g, ' '),
        }
        break
      case 'params':
        const handledParams = handleParamObject(value as Record<string, string>)

        accumulated.descriptions = {
          ...accumulated.descriptions,
          ...handledParams.descriptions,
        }
        accumulated.tags = { ...accumulated.tags, ...handledParams.tags }
        break

      case 'returns':
        // 1- Get the values of the returns object
        const returnsValues: string[] = Object.values(value)
        // 2- Reduce the values into an object
        const returns = returnsValues.reduce(
          (acc, val) => {
            // 3- Split the value into key and value ( key being the name ) of the return value
            const [key, ...rest] = val.split(' ')
            // 4- Add the key ( name ) and value to the returns object
            acc[key] = rest.join(' ')
            return acc
          },
          {} as Record<string, string>
        )

        // 5- Add the returns object to the descriptions and tags
        const handledReturns = handleParamObject(returns)

        accumulated.descriptions = {
          ...accumulated.descriptions,
          ...handledReturns.descriptions,
        }
        accumulated.tags = { ...accumulated.tags, ...handledReturns.tags }
        accumulated.returnsNames = returnsValues.map((i) =>
          i.split(' ')[0].trim()
        )
        break
    }
  }

  return accumulated
}
