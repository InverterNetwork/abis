import { expect, describe, it } from 'bun:test'
import getAbiMemberDescriptions from '../tools/utils/getAbiMemberDescriptions'
import getParsedRawMetadata from '../tools/utils/getParsedRawMetadata'
import writeLog from '../tools/utils/writeLog'
import path from 'path'
import readPath from '../tools/utils/readPath'
import getParsedConfig from '../tools/utils/getParsedConfig'
import getMetas from '../tools/utils/getMetas'

const startPath = path.join(__dirname, '../deployments/build')
// The path of the directory containing nested JSON files

describe('#Log Missing Descriptions', () => {
  it('Should Log the accumulated', async () => {
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
              !descriptions[memberName].find(
                (i) => i.name === 'selfDescription'
              )
            )
              missingDescriptions.push('selfDescription')

            for (const paramName of paramNames) {
              if (!descriptions[memberName]) continue

              if (!descriptions[memberName].find((i) => i.name === paramName))
                missingDescriptions.push(paramName)
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

    // write the log
    writeLog({ content: acc, label: 'missingDescriptions' })
    expect(acc).toBeTruthy()
  })
})
