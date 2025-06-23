import readPath from '../utils/readPath'
import path from 'path'
import fs from 'fs'

const dirname = import.meta.dirname

export default async function clean() {
  await readPath(
    {
      startPath: path.join(dirname, '../../deployments/build'),
      extName: 'json',
      include: '_config',
    },
    (itemPath: string) => {
      fs.unlinkSync(itemPath)
      const shortPath = itemPath.split('/').slice(-2).join('/')
      console.log('Deleted:', shortPath)
    }
  )
}

clean()
