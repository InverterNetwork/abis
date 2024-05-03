import path from 'path'
import readPath from '../utils/readPath'
import fs from 'fs'
import write from '../prep/configs/write'
import { Config, Tags } from '../types'

const dirname = import.meta.dirname,
  // The path of the directory containing nested the JSON files
  startPath = path.join(dirname, '../../deployments/build')

export default function main() {
  // 1- Read the directory recursively
  readPath(
    { startPath, extName: 'json', include: '_config' },
    (itemPath: string) => {
      // 3- If the configPath file exists, skip the file
      if (!fs.existsSync(itemPath)) return

      // 4- Parse the raw metadata and get the event and method names
      const parsedConfig: Config = JSON.parse(fs.readFileSync(itemPath, 'utf8'))

      for (const abiMember in parsedConfig.abiMembers) {
        const abiMemberConfig = parsedConfig.abiMembers[abiMember]

        const tags = {} as Record<string, Tags>

        for (const tag in abiMemberConfig.tags) {
          const oldTag = abiMemberConfig.tags[tag]

          if (typeof oldTag !== 'string') continue

          // @ts-expect-error transition current type is the new type
          tags[tag] = [oldTag]
        }

        if (Object.keys(tags).length === 0) continue

        // @ts-expect-error transition current type is the new type
        parsedConfig.abiMembers[abiMember].tags = tags
      }

      // 7- Write the data to the configPath file
      write(parsedConfig, itemPath)
    }
  )
}

main()
