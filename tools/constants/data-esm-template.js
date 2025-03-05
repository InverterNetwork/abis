import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

// Get dirname in ESM
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Read and parse the .d.ts
const dtsPath = path.resolve(__dirname, '../types/data.d.ts')
const dtsContent = fs.readFileSync(dtsPath, 'utf-8')

// Memoize the parsing result
let parsedData = null

function parseDTStoJson(dtsContent) {
  // Return memoized result if available
  if (parsedData) return parsedData

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

  // Store the result in memoized variable
  parsedData = eval(`[${content}]`)
  return parsedData
}

const data = parseDTStoJson(dtsContent)

export { data }
