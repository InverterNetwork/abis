import { ParsedRawMetadata } from '../../types'

const eventNames = (events: ParsedRawMetadata['output']['userdoc']['events']) =>
  Object.keys(events).map((key) => key.split('(')[0])

const methodNames = (
  methods: ParsedRawMetadata['output']['userdoc']['methods']
) => Object.keys(methods).map((key) => key.split('(')[0])

export default {
  eventNames,
  methodNames,
}
