import { expect, describe, it } from 'bun:test'
import getParsedRawMetadata from '../tools/utils/getParsedRawMetadata'
import writeLog from '../tools/utils/writeLog'
import path from 'path'
import getMetas from '../tools/utils/getMetas'
import readPath from '../tools/utils/readPath'
import { Config } from '../tools/types'
import fs from 'fs'

// The path of the directory containing nested JSON files
const startPath = path.join(__dirname, '../deployments/build')

describe('#Log_Redundant_Abi_Config_Members', () => {
  const buildAbiMemberNames: Record<string, string[]> = {}

  readPath(
    { startPath, extName: 'json', exclude: '_config' },
    (itemPath: string) => {
      const abiName = path.basename(itemPath, '.json'),
        parsedRawMetadata = getParsedRawMetadata(itemPath),
        { abiMemberNames } = getMetas.combinedNames(
          parsedRawMetadata.output.abi
        )

      buildAbiMemberNames[abiName] = abiMemberNames
    }
  )

  it('Log diff of redundant abi config members', async () => {
    let totalDiff = 0
    const redundantConfigMemberNames: Record<string, string[]> = {}

    readPath(
      { startPath, extName: 'json', include: '_config' },
      (itemPath: string) => {
        const abiName = path.basename(itemPath, '.json').replace('_config', '')

        const existingConfig: Config = JSON.parse(
          fs.readFileSync(itemPath, 'utf8')
        )

        if (!existingConfig) throw new Error('Existing config not found')

        const configAbiMemberNames = Object.keys(existingConfig.abiMembers)

        const redundantMemberNames = configAbiMemberNames.filter(
          (name) => !buildAbiMemberNames[abiName].includes(name)
        )

        if (redundantMemberNames.length) {
          redundantConfigMemberNames[abiName] = redundantMemberNames
          totalDiff += redundantMemberNames.length
        }
      }
    )

    if (totalDiff)
      writeLog({
        content: redundantConfigMemberNames,
        label: 'redundant_abi_config_members',
      })

    expect(totalDiff).toBe(0)
  })
})
