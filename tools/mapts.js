/* eslint-disable */
const fs = require('fs')
const path = require('path')
/* eslint-enable */

const dirPath = path.join(__dirname, '../in')
const indexPath = path.join(__dirname, '../src', 'index.ts')

let indexModules = {}

function readFiles(dirPath) {
  const items = fs.readdirSync(dirPath)

  items.forEach((item) => {
    const itemPath = path.join(dirPath, item)
    const stat = fs.statSync(itemPath)

    if (stat.isDirectory()) {
      readFiles(itemPath)
    } else if (path.extname(item) === '.json') {
      const fileContent = JSON.parse(fs.readFileSync(itemPath, 'utf8'))

      const moduleName = path.basename(fileContent.ast.absolutePath, '.sol')
      const version = fileContent.metadata.version
      const abi = fileContent.abi

      if (!indexModules[moduleName]) {
        indexModules[moduleName] = {}
      }

      indexModules[moduleName][`v${version}`] = abi
    }
  })
}

readFiles(dirPath)

let indexContent = ''
for (const moduleName in indexModules) {
  indexContent += `export const ${moduleName} = ${JSON.stringify(
    indexModules[moduleName]
  )} as const;\n`
}

fs.writeFileSync(indexPath, indexContent)
