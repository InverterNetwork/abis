import fs from 'fs'
import path from 'path'

/**
 * Read the files of a directory recursively until hitting a JSON file
 * @param dirPath The path of the directory
 * @param callback Call your logic here with the path of the JSON file
 * @returns void
 */
export default function read(
  dirPath: string,
  callback: (itemPath: string) => void
) {
  // Read the items of the directory
  const items = fs.readdirSync(dirPath)

  // Iterate over the items
  items.forEach((item) => {
    const itemPath = path.join(dirPath, item)
    // Get the stats of the item ( file or directory )
    const stat = fs.statSync(itemPath)

    // If the item is a directory, read its files recursively
    if (stat.isDirectory()) read(itemPath, callback)
    // If the item is a JSON file, parse it and extract the module meta
    else if (path.extname(item) === '.json') callback(itemPath)
  })
}
