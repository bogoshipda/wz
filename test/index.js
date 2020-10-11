const path = require('path')
const { WzFile, WzMapleVersion, WzImage, WzBinaryProperty, WzCanvasProperty } = require('..')

// const wz = new WzFile('C:\\Nexon\\MapleStory\\Sound.wz', WzMapleVersion.BMS)
// // const wz = new WzFile('C:\\Users\\toyo\\game\\CMS\\冒险岛online\\Sound.wz', WzMapleVersion.BMS)
// // const wz = new WzFile('C:\\Users\\toyo\\game\\MapleRoyals800x600\\Sound.wz', WzMapleVersion.GMS)

// const out = {
//   message: ''
// }
// const r = wz.parseWzFile(out)
// console.log(out)
// console.log(r)

// const it = wz.wzDirectory.wzImages.values()
// it.next()
// it.next()
// it.next()
// it.next()
// it.next()
// it.next()
// it.next()
// it.next()
// // it.next()
// // it.next()
// // it.next()
// /** @type {WzImage} */
// const first = it.next().value
// first.parseImage()
// console.log(first.name)
// first.wzProperties.forEach(p => {
//   if (p instanceof WzBinaryProperty) {
//     const filename = path.extname(p.name) === '' ? `${p.name}.mp3` : p.name
//     p.saveToFile(path.join(__dirname, filename))
//   }
// })

// wz.dispose()

async function main () {
  const wz2 = new WzFile('C:\\Nexon\\MapleStory\\Map.wz', WzMapleVersion.BMS)
  const out2 = {
    message: ''
  }
  const r2 = wz2.parseWzFile(out2)
  console.log(out2)
  console.log(r2)

  /** @type {WzImage} */
  const GWorldMap = wz2.at('WorldMap').at('GWorldMap.img')
  GWorldMap.parseImage()
  /** @type {WzCanvasProperty} */
  const canvas = GWorldMap.at('BaseImg').at('0')
  await canvas.pngProperty.getImage(false)
  await canvas.pngProperty.saveToFile('./test2.png')
  console.log(canvas)

  wz2.dispose()
}

main()
