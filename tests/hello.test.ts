import { expect, describe, it } from 'bun:test'

describe('Hello Test Case', () => {
  it('Should Return True', async () => {
    const promise = new Promise<boolean>(() => true)
    const res = await promise
    expect(res).toBeTruthy()
  })
})
