import { expect, describe, it } from 'bun:test'
import getAbiMemberDescriptions from '../tools/utils/getAbiMemberDescriptions'
import getParsedRawMetadata from '../tools/utils/getParsedRawMetadata'
import writeLog from '../tools/utils/writeLog'
import path from 'path'
import readPath from '../tools/utils/readPath'
import getParsedConfig from '../tools/utils/getParsedConfig'

const dirname = import.meta.dirname,
  // The path of the directory containing nested the JSON files
  startPath = path.join(dirname, '../deployments/build')

describe('Member Desc Objs', () => {
  it('Should Log Member Descs', async () => {
    readPath(
      { startPath, extName: 'json', exclude: '_config' },
      (itemPath: string) => {
        const parsed = getParsedRawMetadata(itemPath)
        const config = getParsedConfig(itemPath)
        const res = getAbiMemberDescriptions(parsed.output, config.abiMembers)
        const id = itemPath.split('/v1.0')[0].split('/').pop()
        writeLog(res, id)
      }
    )

    expect(true).pass()
  })
})
