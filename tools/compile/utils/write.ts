import fs from 'fs'

export default function write({
  indexData,
  destPath,
}: {
  indexData: Record<string, any>
  destPath: string
}) {
  let indexContent = ''

  for (const moduleName in indexData) {
    indexContent += `export const ${moduleName} = ${JSON.stringify(
      indexData[moduleName]
    )} as const;\n`
  }

  fs.writeFileSync(destPath, indexContent)
}
