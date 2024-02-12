export function formatModuleTags(str: string) {
  // Split the string by new line and reduce it to an object
  const obj = str.split('\n').reduce(
    (acc, line) => {
      // Split the line by space
      const [key, ...valueParts] = line.trim().split(' ')
      // Join the value parts by space
      const value = valueParts.join(' ').trim()

      switch (true) {
        case key.startsWith('@notice'):
          acc.description = value
          break
        case key.startsWith('@custom:'):
          // Get the custom key
          const customKey = key.split(':')[1]
          acc[customKey] = value
          break
      }

      return acc
    },
    {} as Record<string, string>
  )

  return obj
}

function handleCustomTags(value: string): Record<string, any> {
  // e.g. minimumPayoutAmount:decimal maximumPayoutAmount:decimal details:any(string)
  // if : is present, it means pre section is key and post section is value
  // if space is present, it means a new key-value pair

  const pairs = value.split(' ')
  const result: Record<string, any> = {}

  for (const pair of pairs) {
    const [key, val] = pair.split(':')

    if (!key || !val) continue // Skip if key or value is missing

    result[key] = val
  }

  return result
}

export function formatMethodEntries(items: Record<string, any>) {
  const result = {} as Record<'descriptions' | 'tags' | 'returns', any>

  for (const [key, value] of Object.entries(items)) {
    switch (key) {
      case 'custom:tags':
        result.tags = handleCustomTags(value as string)
        break
      case 'details':
        result.descriptions = {
          ...result.descriptions,
          method: value.replace(/\s+/g, ' '),
        }
        break
      case 'params':
        result.descriptions = { ...result.descriptions, ...value }
        break
      default:
        result[key] = value
    }
  }

  return result
}
