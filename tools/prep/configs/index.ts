import fs from 'fs'
import path from 'path'
import getMetas from './getMetas'
import readJson from '../../utils/readJson'
import write from './write'
import { Config, Out, ParsedRawMetadata } from '../../types'

const dirname = import.meta.dirname,
  // The path of the directory containing nested the JSON files
  inPath = path.join(dirname, '../../../deployments/build')

export default function prep() {
  // 1- Read the directory recursively
  readJson(
    inPath,
    (itemPath: string) => {
      // 2- Get the path of the _config.json file
      const configPath = itemPath.replace('.json', '_config.json')

      // 3- If the configPath file exists, skip the file
      if (fs.existsSync(configPath)) return

      // 4- Parse the file content of the JSON file
      const { rawMetadata }: Out = JSON.parse(fs.readFileSync(itemPath, 'utf8'))

      // 5- Parse the raw metadata and get the event and method names
      const parsedRawMetadata: ParsedRawMetadata = JSON.parse(rawMetadata),
        eventNames = getMetas.eventNames(
          parsedRawMetadata.output.userdoc.events
        ),
        methodNames = getMetas.methodNames(
          parsedRawMetadata.output.userdoc.methods
        )

      // 6- Create a new object with the event and method names + the config fields
      const data: Config = {
        deploymentArgs: {
          configData: [],
          dependencyData: [],
        },
        ...eventNames.concat(methodNames).reduce((acc, name: string) => {
          acc[name] = {
            tags: {},
            returnsNames: [],
          }
          return acc
        }, {}),
      }

      // 7- Write the data to the configPath file
      write(data, configPath)
    },
    '_config'
  )
}

prep()
