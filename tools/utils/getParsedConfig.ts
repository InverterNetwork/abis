import fs from 'fs'
import type { Config } from '../types'

export function getConfigPath(itemPath: string) {
  return itemPath.replace('.json', '_config.json')
}

export default function (itemPath: string) {
  // 0- Get the path of the _config.json file
  const configPath = getConfigPath(itemPath)
  // 1- Parse the file content of the JSON file
  const config: Config = JSON.parse(fs.readFileSync(configPath, 'utf8'))

  return config
}
