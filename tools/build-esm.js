import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const isCI = process.env.GITHUB_ACTIONS === 'true'

if (!isCI) {
  // Get dirname in ESM
  const __filename = fileURLToPath(import.meta.url)
  const __dirname = path.dirname(__filename)

  // Read and parse the .d.ts
  const dtsPath = path.resolve(__dirname, '../dist/types/data.d.ts')
  const dtsContent = fs.readFileSync(dtsPath, 'utf-8')

  function parseDTStoJson(dtsContent) {
    // First, extract the content between the outermost brackets
    let match = dtsContent.match(
      /export\s+declare\s+const\s+data:\s*readonly\s*\[([\s\S]*)\];/
    )

    if (!match) {
      throw new Error('Could not parse the TypeScript declaration')
    }

    let content = match[1]

    // Remove all 'readonly' keywords
    content = content.replace(/readonly\s+/g, '')

    // Replace semicolons with commas
    content = content.replace(/;\s*/g, ',')

    // If there are these ,} or ,] replace them with } or ]
    content = content.replace(/,\s*\}\s*/g, '}')
    content = content.replace(/,\s*\]\s*/g, ']')

    return eval(`[${content}]`)
  }

  const data = parseDTStoJson(dtsContent)

  // write the data to dist/esm/data.js
  fs.writeFileSync(
    path.resolve(__dirname, '../dist/esm/data.js'),
    `export const data = ${JSON.stringify(data, null, 2)}`
  )

  console.log('Generated data.js file during package installation')
} else {
  console.log('Skipping data.js file generation during package installation')
}
