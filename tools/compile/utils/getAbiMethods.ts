import { Abi, AbiFunction } from 'abitype'

function readFunctions(abi: Abi) {
  return abi.filter(
    (
      item
    ): item is AbiFunction & {
      type: 'function'
      stateMutability: 'view' | 'pure'
    } =>
      item.type === 'function' &&
      ['view', 'pure'].includes(item.stateMutability)
  )
}

function writeFunctions(abi: Abi) {
  return abi.filter(
    (
      item
    ): item is AbiFunction & {
      type: 'function'
      stateMutability: 'nonpayable' | 'payable'
    } =>
      item.type === 'function' &&
      ['nonpayable', 'payable'].includes(item.stateMutability)
  )
}

function events(abi: Abi) {
  return abi.filter(
    (item): item is Extract<typeof item, { type: 'event' }> =>
      item.type === 'event'
  )
}

export default {
  readFunctions,
  writeFunctions,
  events,
}
