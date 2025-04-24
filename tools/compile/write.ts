import fs from 'fs'
import type { Compiled } from '../types'

export default function (data: Compiled, destPath: string) {
  const stringified = `export const data = ${JSON.stringify(data).replace(
    /"bytecode":"([^"]*)"/g,
    '"bytecode":"$1" as `0x${string}`'
  )} as const;\n`

  fs.writeFileSync(destPath, stringified)
}
