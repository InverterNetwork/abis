import fs from 'fs'
import path from 'path'
import getMetas from './utils/getMetas'
import readJson from '../utils/readJson'
import write from './utils/write'
import updateAbiOutputs from './utils/updateAbiOutputs'
import itterate from './utils/itterate'
import { Out } from '../types'

const dirname = import.meta.dirname,
  // The path of the directory containing nested the JSON files
  inPath = path.join(dirname, '../../deployments/build'),
  // The path of the file to be written in to
  destPath = path.join(dirname, '../../src/data.ts')

export default function compile() {
  // 1- Initialize the accumulated data
  const accumulated = {} as Record<string, Record<string, any>>

  // 2- Read the directory recursively
  readJson(inPath, (itemPath: string) => {
    // 3- Parse the file content of the JSON file
    const { abi, ast, metadata }: Out = JSON.parse(
        fs.readFileSync(itemPath, 'utf8')
      ),
      // 4- Get the module meta data
      { description, moduleType, name, version } = getMetas.module(
        ast.nodes,
        itemPath
      ),
      // 5- Get an object containing the method metas
      methodMetas = getMetas.method(metadata.output),
      // 6- Update the ABI outputs
      updatedAbi = updateAbiOutputs(abi, methodMetas),
      // 7- Itterate over the updated ABI outputs
      finalAbi = itterate(updatedAbi, methodMetas)

    // 8- Add the module to the accumulated data
    if (!accumulated[name]) accumulated[name] = {}
    accumulated[name][version] = {
      name,
      description,
      version,
      moduleType,
      abi: finalAbi,
    }
  })

  // 9- Write the accumulated data to the destination file
  write(accumulated, destPath)
}

compile()
