import path from 'path'
import write from './write'
import updateAbiOutputNames from './updateAbiOutputNames'
import readPath from '../utils/readPath'
import getParsedRawMetadata from '../utils/getParsedRawMetadata'
import { Compiled } from '../types'
import constructAbiMeta from '../utils/constructAbiMeta'
import extendAbi from './extendAbi'

const dirname = import.meta.dirname,
  // The path of the directory containing nested the JSON files
  startPath = path.join(dirname, '../../deployments/build'),
  // The path of the file to be written in to
  destPath = path.join(dirname, '../../src/data.ts')

export default function compile() {
  // 1- Initialize the accumulated data
  const accumulated: Compiled = []

  // 2- Read the directory recursively
  readPath(
    { startPath, extName: 'json', exclude: '_config' },
    (itemPath: string) => {
      // 3- Parse the raw metadata
      const parsedMetadata = getParsedRawMetadata(itemPath),
        // 4- Get ABI metadata
        { abiMemberMetas, moduleMeta, deploymentArgs } = constructAbiMeta(
          itemPath,
          parsedMetadata
        ),
        { name, description, version, moduleType } = moduleMeta,
        // 6- Update the ABI outputs
        updatedAbi = updateAbiOutputNames(
          parsedMetadata.output.abi,
          abiMemberMetas
        ),
        // 7- Itterate over the updated ABI outputs
        extendedAbi = extendAbi(updatedAbi, abiMemberMetas)

      // 8- Add the module to the accumulated data
      accumulated.push({
        name,
        description,
        version,
        moduleType,
        deploymentArgs,
        abi: extendedAbi,
      })
    }
  )

  // 9- Write the accumulated data to the destination file
  write(accumulated, destPath)
}

compile()
