import fs from 'fs'
import path from 'path'

/**
 * Read the files of a directory recursively until hitting a JSON file
 * @param startPath The path to start reading from
 * @param extName The extension name of the files to read
 * @param exclude Exclude files that include this string
 * @param include Include only files that include this string
 * @param callback Call your logic here with the path of the JSON file
 * @returns Promise<void>
 */
export default async function readPath(
  {
    startPath,
    exclude,
    include,
    extName = 'json',
  }: { startPath: string; exclude?: string; include?: string; extName: 'json' },
  callback: (itemPath: string) => Promise<void> | void
): Promise<void> {
  // Read the items of the directory
  const items = fs.readdirSync(startPath)

  // Iterate over the items
  for (const item of items) {
    const itemPath = path.join(startPath, item)
    // Get the stats of the item ( file or directory )
    const stat = fs.statSync(itemPath)

    // If the item is a directory, read its files recursively
    if (stat.isDirectory()) {
      await readPath(
        { startPath: itemPath, exclude, extName, include },
        callback
      )
    }
    // If the item is a extName file, proceed
    else if (path.extname(item) === `.${extName}`) {
      // If the item includes the exclude string, return the ones who are not excluded
      if (exclude && item.includes(exclude)) continue
      // If the item does not include the include string, skip it
      if (include && !item.includes(include)) continue

      // Call the callback after the conditions
      await callback(itemPath)
    }
  }
}
