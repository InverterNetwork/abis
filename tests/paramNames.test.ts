import { expect, describe, it } from 'bun:test'
import getParsedRawMetadata from '../scripts/utils/getParsedRawMetadata'
import writeLog from '../scripts/utils/writeLog'
import path from 'path'
import getMetas from '../scripts/utils/getMetas'

// The path JSON file
const itemPath = path.join(
  __dirname,
  '../deployments/build/modules/optionalModule/LM_PC_Bounties_v1.json'
)

describe('Log Param Names', () => {
  it.skip('Should create a valid object', async () => {
    const parsed = getParsedRawMetadata(itemPath)
    const res = getMetas.parameterNames(parsed.output.abi)
    const label = 'BuntyManager-ParamNames'

    writeLog({ content: res, label })
    expect(res).pass()
  })
})
