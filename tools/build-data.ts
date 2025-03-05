import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const cjsTemplate = `
'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.data = void 0;
exports.data = require('../../src/data.ts').data;
`

const esmTemplate = `
export { data } from '../../src/data.ts'
`

const dtsTemplate = `
import { data as dtsData } from '../../src/data.ts'
export declare const data: typeof dtsData
`

// write the cjs template to dist/cjs/data.js
fs.writeFileSync(path.resolve(__dirname, '../dist/cjs/data.js'), cjsTemplate)

// write the esm template to dist/esm/data.js
fs.writeFileSync(path.resolve(__dirname, '../dist/esm/data.js'), esmTemplate)

// write the dts template to dist/types/data.d.ts
fs.writeFileSync(
  path.resolve(__dirname, '../dist/types/data.d.ts'),
  dtsTemplate
)
