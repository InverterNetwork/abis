import fs from 'fs'
import path from 'path'
import getMetas from '../../utils/getMetas'
import readPath from '../../utils/readPath'
import write from './write'
import { AbiMemberConfigs, Config, Tags } from '../../types'
import getParsedRawMetadata from '../../utils/getParsedRawMetadata'
import { getConfigPath } from '../../utils/getParsedConfig'
import { Tag } from '../../../src/base'

const dirname = import.meta.dirname,
  // The path of the directory containing nested the JSON files
  startPath = path.join(dirname, '../../../deployments/build')

export default function prep() {
  // 1- Read the directory recursively
  readPath(
    { startPath, extName: 'json', exclude: '_config' },
    (itemPath: string) => {
      // 2- Get the path of the _config.json file
      const configPath = getConfigPath(itemPath)

      // 3- If the configPath file exists, skip the file
      if (fs.existsSync(configPath)) return

      // 4- Parse the raw metadata and get the event and method names
      const parsedRawMetadata = getParsedRawMetadata(itemPath),
        { abiMemberNames, returnNames } = getMetas.combinedNames(
          parsedRawMetadata.output.abi
        ),
        // 5- Get the parameter names
        parameterNames = getMetas.parameterNames(parsedRawMetadata.output.abi),
        // 6- Create a function that returns an object with the default tags
        getDefaultTags = (name: string) =>
          parameterNames[name].reduce((acc, name) => {
            acc[name] = ['' as Tag] as Tag[]
            return acc
          }, {} as Tags)

      // 7- Create a new object with the event and method names + the config fields
      const data: Config = {
        deploymentArgs: {
          configData: [],
          dependencyData: [],
        },
        abiMembers: abiMemberNames.reduce((acc, name: string) => {
          const defaultTags = getDefaultTags(name)
          acc[name] = {
            tags: defaultTags,
            returnNames: returnNames[name] || [],
          }
          return acc
        }, {} as AbiMemberConfigs),
      }

      // 7- Write the data to the configPath file
      write(data, configPath)
    }
  )
}

prep()
