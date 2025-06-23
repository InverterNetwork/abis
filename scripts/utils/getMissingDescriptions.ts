import getAbiMemberDescriptions from './getAbiMemberDescriptions'
import getParsedRawMetadata from './getParsedRawMetadata'
import path from 'path'
import readPath from './readPath'
import getParsedConfig from './getParsedConfig'
import getMetas from './getMetas'

// The path of the directory containing nested JSON files
const startPath = path.join(__dirname, '../../deployments/build')

export default async function getMissingDescriptions() {
  let total = 0
  const acc: Record<string, Record<string, string[]>> = {}

  await readPath(
    { startPath, extName: 'json', exclude: '_config' },
    (itemPath: string) => {
      // get the parsed metadata
      const parsed = getParsedRawMetadata(itemPath)
      // get the parsed config
      const config = getParsedConfig(itemPath)
      // get the available descriptions
      const descriptions = getAbiMemberDescriptions(
        parsed.output,
        config.abiMembers
      )
      // get the name of the module from the path
      const moduleName = path.basename(itemPath, '.json')
      // get the parameter names from the abi
      const paramNames = getMetas.parameterNames(parsed.output.abi)
      // Iterate over the parameter entries, key being the member name and value being the parameter names

      const data = Object.entries(paramNames).reduce(
        (acc, [memberName, paramNames]) => {
          const missingDescriptions: string[] = []

          if (
            !!descriptions[memberName] &&
            !descriptions[memberName].find((i) => i.name === 'selfDescription')
          ) {
            total++
            missingDescriptions.push('selfDescription')
          }

          for (const paramName of paramNames) {
            if (!descriptions[memberName]) continue

            if (!descriptions[memberName].find((i) => i.name === paramName)) {
              total++
              missingDescriptions.push(paramName)
            }
          }

          if (!missingDescriptions.length) return acc

          acc[memberName] = missingDescriptions

          return acc
        },
        {} as Record<string, string[]>
      )

      acc[moduleName] = data
    }
  )

  return {
    total,
    data: acc,
  }
}
