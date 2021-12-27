import readline from 'readline'
import fs from 'fs'
import path from 'path'

const log = console.log
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
const cwd = process.cwd()
const targetPath = cwd
const targetStat = fs.statSync(targetPath)

export interface IFileEntity {
  filename: string
  absolutePath: string
}

if (targetStat.isDirectory()) {
  const filenameList = fs
    .readdirSync(targetPath)
    .reduce<IFileEntity[]>((acc, cur) => {
      const absPath = path.resolve(targetPath, cur)
      const stat = fs.statSync(absPath)
      if (stat.isFile()) {
        acc.push({
          absolutePath: absPath,
          filename: cur
        })
      }
      return acc
    }, [])

  let idx = 0
  const total = filenameList.length
  function showPhoto({ filename, absolutePath }: IFileEntity, idx: number) {
    const photo = fs.readFileSync(absolutePath, {
      encoding: 'utf-8'
    })
    log('\n')
    log(photo)
    log(
      `\n[page]:${
        idx + 1
      }/${total} [filename]:${filename} (prev: '← ↑' next: '→ ↓' ESC: 'ctrl + c')`
    )
  }

  showPhoto(filenameList[idx], idx)
  const onKeypress = function (_str: string, key: Record<string, string>) {
    if (key.name === 'right' || key.name === 'down') {
      idx++
      if (idx >= total) {
        idx -= total
      }
      showPhoto(filenameList[idx], idx)
    }
    if (key.name === 'left' || key.name === 'up') {
      idx--
      if (idx < 0) {
        idx += total
      }
      showPhoto(filenameList[idx], idx)
    }
  }
  process.stdin.on('keypress', onKeypress)
  rl.on('close', () => {
    process.stdin.off('keypress', onKeypress)
  })
} else if (targetStat.isFile()) {
  log(
    fs.readFileSync(targetPath, {
      encoding: 'utf-8'
    })
  )
}
