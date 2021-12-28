import path from 'path'
import execa from 'execa'

const bin = path.resolve(__dirname, '../bin/cfv.js')
const fixturesPath = path.resolve(__dirname, 'fixtures')
describe('[Default]', () => {
  test('with no path param', async () => {
    await execa(bin, [
      path.resolve(fixturesPath, '5d9f029b9c5d899f2ee9494e8892805.txt')
    ])
  })
})
