import fs from 'fs'
import path from 'path'
import getMetas from './utils/getMetas'
import read from './utils/read'
import write from './utils/write'
import updateAbiOutputs from './utils/updateAbiOutputs'
import itterate from './utils/itterate'

const dirname = import.meta.dirname

const inPath = path.join(dirname, '../../deployments/build')
const destPath = path.join(dirname, '../../src/data.ts')

export function compile() {
  // Index of the modules
  const indexModules = {} as Record<string, Record<string, any>>

  // Read the directory
  read(inPath, (itemPath: string) => {
    const parts = itemPath.split('/')

    // Parse the file content
    const fileContent = JSON.parse(fs.readFileSync(itemPath, 'utf8'))

    // Get abi
    const abi = fileContent.abi

    // Get the module meta
    const { description } = getMetas.module(fileContent.ast.nodes),
      moduleType = parts[parts.length - 3],
      name = parts[parts.length - 2],
      version = parts[parts.length - 1].replace('.json', ''),
      methodMetas = getMetas.method(fileContent.metadata.output)

    const updatedAbi = updateAbiOutputs(abi, methodMetas),
      itterable = itterate(updatedAbi, methodMetas)

    // If the module name does not exist in the index, create it
    if (!indexModules[name]) indexModules[name] = {}

    // Add the module to the index
    indexModules[name][version] = {
      name,
      description,
      version,
      moduleType,
      itterable,
      abi: updatedAbi,
    }
  })

  indexModules

  write({
    indexData: indexModules,
    destPath,
  })
}

compile()
