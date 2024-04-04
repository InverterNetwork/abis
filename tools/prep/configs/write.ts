import fs from 'fs'
import chalk from 'chalk'
import { Config } from '../../types'

export default function (data: Config, destPath: string) {
  const extendedData = JSON.stringify(data)

  fs.writeFileSync(destPath, extendedData)

  console.log(
    `The file ${chalk.blue(destPath)} has been saved! 🎉.\n
    Please fill them out in the given format or assign some one to do it
    \n`
  )
}
