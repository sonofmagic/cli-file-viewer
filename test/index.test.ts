import path from 'path'
import { execa } from 'execa'

const bin = path.resolve(__dirname, '../bin/cfv.js')
describe('[Default]', () => {
  test('with no path param', async () => {
    await execa(bin, [])
  })
})
