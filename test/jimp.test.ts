import path from 'path'
import fs from 'fs'
import { createImage } from '../src/jimp'
const fixturesPath = path.resolve(__dirname, 'fixtures')
const outputPath = path.resolve(__dirname, 'output')
const filenameList = fs.readdirSync(fixturesPath).slice(0, 1)

describe('[jimp.test] create image', () => {
  test('with no path param', async () => {
    for (let i = 0; i < filenameList.length; i++) {
      const filename = filenameList[i]
      await createImage(
        path.resolve(fixturesPath, filename),
        path.resolve(outputPath, filename)
      )
    }
  })
})
