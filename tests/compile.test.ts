import { expect, describe, it } from 'bun:test'
import compile from '../tools/compile'

describe('Tags Compiler Test', () => {
  it('Should Log The Compiled Tags', async () => {
    const res = compile()
    // console.log((res.BountyManager['v1.0'] as any).methodMetas)
    expect(res).pass()
  })
})
