import fs from 'fs'

export default function write(data: Record<string, any>, destPath: string) {
  let indexContent = ''

  for (const moduleName in data) {
    indexContent += `export const ${moduleName} = ${JSON.stringify(
      data[moduleName]
    )} as const;\n`
  }

  fs.writeFileSync(destPath, indexContent)
}
