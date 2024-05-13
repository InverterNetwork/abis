import fs from 'fs'
import { Compiled } from '../types'

export default function (data: Compiled, destPath: string) {
  const stringified = `export const data = ${JSON.stringify(data)} as const;\n`

  fs.writeFileSync(destPath, stringified)
}
