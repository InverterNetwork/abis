import { expect, describe, it } from 'bun:test'

import getMissingDescriptions from '../scripts/utils/getMissingDescriptions'

describe('#Log_Missing_Descriptions', () => {
  it('Find missing descriptions, expect total to be 0', async () => {
    const { total } = await getMissingDescriptions()

    // write the log
    expect(total).toBe(0)
  })
})
