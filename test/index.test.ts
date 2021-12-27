import { execa } from 'execa'
import path from 'path'
const bin = path.resolve(__dirname, '../bin/cfv.js')
describe('[Default]', () => {
  test('with no path param', () => {
    execa(bin)
  })
})
