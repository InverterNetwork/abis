import { expect, describe, it } from 'bun:test'
import getAbiMemberDescriptions from '../tools/utils/getAbiMemberDescriptions'
import getParsedRawMetadata from '../tools/utils/getParsedRawMetadata'
import writeLog from '../tools/utils/writeLog'
import path from 'path'
import readPath from '../tools/utils/readPath'
import getParsedConfig from '../tools/utils/getParsedConfig'
import getMetas from '../tools/utils/getMetas'

const dirname = import.meta.dirname,
  // The path of the directory containing nested the JSON files
  startPath = path.join(dirname, '../deployments/build')

describe('#Log Missing Descriptons', () => {
  it('Should Log the accumulated', async () => {
    const acc = new Map<string, any>()

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
        const moduleName = itemPath.split('/v1.0')[0].split('/').pop()!
        // get the parameter names from the abi
        const paramNames = getMetas.parameterNames(parsed.output.abi)
        // 0. Iterate over the parameter entries key being the member name and value being the parameter names
        const data = Object.entries(paramNames)
          .flatMap(([memberName, paramNames]) => {
            // 1. itterate over the parameter names and check if the descriptions are missing
            return paramNames.map((paramName) => {
              // 2. Initialize the missing descriptions object
              const acc = {} as any
              // 3. Initialize the member name object
              if (!acc[memberName]) acc[memberName] = {}
              // 4. if descriptions are emoty for the member name return no descriptions data string
              if (!descriptions[memberName])
                return (acc[memberName] = 'no descriptions data')
              // 5. if the member name has no self description add missing to the self description
              if (
                !descriptions[memberName].some(
                  ({ name }) => name === 'selfDescription'
                )
              )
                acc[memberName]['selfDescription'] = 'missing'
              // 6. Check if the parameter name is missing in the descriptions
              if (
                !descriptions[memberName].some(({ name }) => name === paramName)
              ) {
                // 7. Add the missing parameter name to the member name
                acc[memberName][paramName] = 'missing'
              }
              // 8. Remove empty objects
              if (Object.keys(acc[memberName]).length === 0) return null
              return acc
            })
          })
          .filter((x): x is NonNullable<typeof x> => x !== null)

        if (data.length === 0) return

        const dataObj = data.reduce((acc, x) => {
          const key = Object.keys(x)[0]
          acc[key] = x[key]
          return acc
        }, {})

        acc.set(moduleName, dataObj)
      }
    )

    // convert the map to an object
    const obj = [...acc.entries()].reduce((acc, [key, value]) => {
      ;(acc as any)[key] = value
      return acc
    }, {})

    // write the log
    writeLog({ content: obj, label: 'missingDescriptions' })
    expect(obj).toBeTruthy()
  })
})
