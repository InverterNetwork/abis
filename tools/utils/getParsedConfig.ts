import fs from 'fs'
import { Config } from '../types'

export default function (configPath: string) {
  // 1- Parse the file content of the JSON file
  const config: Config = JSON.parse(fs.readFileSync(configPath, 'utf8'))

  return config
}
