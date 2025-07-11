import { expect, describe, it } from 'bun:test'
import getParsedRawMetadata from '../scripts/utils/getParsedRawMetadata'
import writeLog from '../scripts/utils/writeLog'
import path from 'path'
import readPath from '../scripts/utils/readPath'
import constructAbiMeta from '../scripts/utils/constructAbiMeta'

const dirname = import.meta.dirname,
  // The path of the directory containing nested the JSON files
  startPath = path.join(dirname, '../deployments/build')

describe('Constructed Abi Meta', () => {
  it.skip('Should Log Abi Meta', async () => {
    await readPath(
      { startPath, extName: 'json', exclude: '_config' },
      (itemPath: string) => {
        // console.log('itemPath:', itemPath)
        const parsed = getParsedRawMetadata(itemPath)
        const res = constructAbiMeta(itemPath, parsed)
        const label = 'abiMeta-' + path.basename(itemPath, '.json')
        writeLog({ content: res, label })
      }
    )

    expect(true).pass()
  })
})
