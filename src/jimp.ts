/* eslint-disable no-new */
import Jimp from 'jimp'

export function createImage (entry: string, outfile: string) {
  return new Promise((resolve, reject) => {
    new Jimp(80 * 12, 80 * 12, async (err, image) => {
      if (err) {
        reject(err)
      }
      const font = await Jimp.loadFont(Jimp.FONT_SANS_128_WHITE)
      await image
        .print(
          font,
          10,
          10,
          {
            text: 'Hello world!'
            // alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER,
            // alignmentY: Jimp.VERTICAL_ALIGN_MIDDLE
          }
          // maxWidth,
          // maxHeight
          // 100,
          // 100
        )
        .writeAsync(outfile + '.' + image.getExtension())

      resolve(image)
    })
  })
}
