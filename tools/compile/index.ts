import fs from 'fs'
import path from 'path'
import { getModuleMeta, getModuleMethodMetas } from './utils/getMetas'
import read from './utils/read'
import write from './utils/write'
import updateAbiOutputs from './utils/updateAbiOutputs'

const dirname = import.meta.dirname

const inPath = path.join(dirname, '../../in')
const destPath = path.join(dirname, '../../src/data.ts')

export function compile() {
  // Index of the modules
  const indexModules = {} as Record<string, Record<string, any>>

  // Read the directory
  read(inPath, (itemPath: string) => {
    // Parse the file content
    const fileContent = JSON.parse(fs.readFileSync(itemPath, 'utf8'))

    // Get abi
    const abi = fileContent.abi

    // Get the module meta
    const { name, version, moduletype, description } = getModuleMeta(
      fileContent.ast.nodes
    )

    // Get the function metas
    const methodMetas = getModuleMethodMetas(fileContent.metadata.output)

    const updatedAbi = updateAbiOutputs(abi, methodMetas)

    const methodMetasArr = Object.entries(methodMetas).map(([key, value]) => ({
      name: key,
      ...value,
    }))

    // If the module name does not exist in the index, create it
    if (!indexModules[name]) indexModules[name] = {}

    // Add the module to the index
    indexModules[name][`v${version}`] = {
      name,
      description,
      version,
      moduletype,
      methodMetas: methodMetasArr,
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
