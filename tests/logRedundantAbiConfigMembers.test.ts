import { expect, describe, it } from 'bun:test'
import writeLog from '../tools/utils/writeLog'
import getRedundantAbiConfigMembers from '../tools/utils/getRedundantAbiConfigMembers'

describe('#Log_Redundant_Abi_Config_Members', () => {
  it('Log diff of redundant abi config members', async () => {
    const { redundantConfigMemberNames, totalDiff } =
      await getRedundantAbiConfigMembers()

    if (totalDiff)
      writeLog({
        content: redundantConfigMemberNames,
        label: 'redundant_abi_config_members',
      })

    expect(totalDiff).toBe(0)
  })
})
