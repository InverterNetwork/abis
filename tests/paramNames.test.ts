import { expect, describe, it } from 'bun:test'
import getParsedRawMetadata from '../tools/utils/getParsedRawMetadata'
import writeLog from '../tools/utils/writeLog'
import path from 'path'
import getMetas from '../tools/utils/getMetas'

const dirname = import.meta.dirname,
  // The path JSON file
  itemPath = path.join(
    dirname,
    '../deployments/build/modules/optionalModule/BountyManager/v1.0.json'
  )

describe('Log Param Names', () => {
  it('Should create a valid object', async () => {
    const parsed = getParsedRawMetadata(itemPath)
    const res = getMetas.parameterNames(parsed.output.abi)
    const label = 'BuntyManager-ParamNames'

    writeLog({ content: res, label })
    expect(res).pass()
  })
})
