import fs from 'fs'
import path from 'path'

/**
 * Read the files of a directory recursively until hitting a JSON file
 * @param dirPath The path of the directory
 * @param callback Call your logic here with the path of the JSON file
 * @param exclude Exclude files that include this string
 * @returns void
 */
export default function readJson(
  dirPath: string,
  callback: (itemPath: string) => void,
  exclude?: string
) {
  // Read the items of the directory
  const items = fs.readdirSync(dirPath)

  // Iterate over the items
  items.forEach((item) => {
    const itemPath = path.join(dirPath, item)
    // Get the stats of the item ( file or directory )
    const stat = fs.statSync(itemPath)

    // If the item is a directory, read its files recursively
    if (stat.isDirectory()) readJson(itemPath, callback, exclude)
    // If the item is a JSON file, parse it and extract the module meta
    else if (path.extname(item) === '.json')
      if (exclude && !item.includes(exclude))
        // If the item includes the exclude string, skip it
        callback(itemPath)
      // else call the callback with the item path
      else if (!exclude) callback(itemPath)
  })
}
