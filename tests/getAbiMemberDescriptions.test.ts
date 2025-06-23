import { expect, describe, it } from 'bun:test'
import getAbiMemberDescriptions from '../scripts/utils/getAbiMemberDescriptions'
import getParsedRawMetadata from '../scripts/utils/getParsedRawMetadata'
import writeLog from '../scripts/utils/writeLog'
import path from 'path'
import readPath from '../scripts/utils/readPath'
import getParsedConfig from '../scripts/utils/getParsedConfig'

const dirname = import.meta.dirname,
  // The path of the directory containing nested the JSON files
  startPath = path.join(dirname, '../deployments/build')

describe('Member Desc Objs', () => {
  it.skip('Should Log Member Descs', async () => {
    await readPath(
      { startPath, extName: 'json', exclude: '_config' },
      (itemPath: string) => {
        const parsed = getParsedRawMetadata(itemPath)
        const config = getParsedConfig(itemPath)
        const res = getAbiMemberDescriptions(parsed.output, config.abiMembers)
        const label = itemPath.split('/v1.0')[0].split('/').pop()
        writeLog({ content: res, label })
      }
    )

    expect(true).pass()
  })
})
