import getRedundantAbiConfigMembers from '../utils/getRedundantAbiConfigMembers'
import path from 'path'
import fs from 'fs'
import readPath from '../utils/readPath'
import type { Config } from '../types'
import readline from 'readline'
import chalk from 'chalk'

const startPath = path.join(__dirname, '../../deployments/build')

export default async function redundantConfigs() {
  const { redundantConfigMemberNames, totalDiff } =
    await getRedundantAbiConfigMembers()

  if (!totalDiff) {
    console.log('No redundant config members found')
    return
  }

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  })

  const askQuestion = (question: string): Promise<string> =>
    new Promise((resolve) => rl.question(question, resolve))

  await readPath(
    { startPath, extName: 'json', include: '_config' },
    async (itemPath: string) => {
      const abiName = path.basename(itemPath, '.json').replace('_config', '')

      const existingConfig: Config = JSON.parse(
        fs.readFileSync(itemPath, 'utf8')
      )

      for (const [key, value] of Object.entries(existingConfig.abiMembers)) {
        if (redundantConfigMemberNames?.[abiName]?.includes?.(key)) {
          const answer = await askQuestion(
            `Would you like to delete the member ${chalk.blue(key)} @ ${abiName}: ${JSON.stringify(
              value
            )} => (y/n):`
          )
          if (answer.toLowerCase() === 'y') {
            delete existingConfig.abiMembers[key]
            console.log(`Deleted member "${chalk.red(key)}"`)
            fs.writeFileSync(itemPath, JSON.stringify(existingConfig), 'utf8')
          } else {
            console.log(`Skipped deletion of member "${chalk.yellow(key)}"`)
          }
        }
      }

      return
    }
  )

  rl.close()
  console.log(chalk.green('Finished processing all configs.'))
}

await redundantConfigs()
