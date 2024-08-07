import fs from 'fs'
import type { Out, ParsedRawMetadata } from '../types'

export default function (itemPath: string) {
  // 1- Parse the file content of the JSON file
  const { rawMetadata }: Out = JSON.parse(fs.readFileSync(itemPath, 'utf8'))

  // 2- Parse the raw metadata and get the event and method names
  const parsedRawMetadata: ParsedRawMetadata = JSON.parse(rawMetadata)

  return parsedRawMetadata
}
