import { expect, describe, it } from 'bun:test'
import getParsedRawMetadata from '../tools/utils/getParsedRawMetadata'
import writeLog from '../tools/utils/writeLog'
import path from 'path'
import readJson from '../tools/utils/readJson'
import constructAbiMeta from '../tools/compile/constructAbiMeta'

const dirname = import.meta.dirname,
  // The path of the directory containing nested the JSON files
  inPath = path.join(dirname, '../deployments/build')

describe('Constructed Abi Meta', () => {
  it('Should Log Abi Meta', async () => {
    readJson(
      inPath,
      (itemPath: string) => {
        // console.log('itemPath:', itemPath)
        const parsed = getParsedRawMetadata(itemPath)
        const res = constructAbiMeta(itemPath, parsed)
        const id = 'abiMeta-' + itemPath.split('/v1.0')[0].split('/').pop()
        writeLog(res, id)
      },
      '_config'
    )

    expect(true).pass()
  })
})
