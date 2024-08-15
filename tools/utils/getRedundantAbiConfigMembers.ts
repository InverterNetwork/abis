import getParsedRawMetadata from './getParsedRawMetadata'
import path from 'path'
import getMetas from './getMetas'
import readPath from './readPath'
import type { Config } from '../types'
import fs from 'fs'

// The path of the directory containing nested JSON files
const startPath = path.join(__dirname, '../../deployments/build')

export default function getRedundantAbiConfigMembers() {
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

  return {
    redundantConfigMemberNames,
    totalDiff,
  }
}
