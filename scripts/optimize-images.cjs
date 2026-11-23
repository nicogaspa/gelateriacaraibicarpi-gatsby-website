const fs = require('node:fs/promises')
const path = require('node:path')
const crypto = require('node:crypto')
const sharp = require('sharp')

const root = path.resolve(__dirname, '..')
const imageRoot = path.join(root, 'src/assets/images')
const output = path.join(root, 'public/media')

async function optimizeImages() {
  await fs.mkdir(output, { recursive: true })
  const names = ['logo.png', 'interno.jpg', '404_sad.png']
  for (const directory of ['products', 'buildyouricecream']) {
    for (const name of (
      await fs.readdir(path.join(imageRoot, directory))
    ).sort()) {
      if (/\.(png|jpe?g)$/i.test(name)) names.push(`${directory}/${name}`)
    }
  }
  for (const name of ['13', '12', '10', '9', '11'])
    names.push(`slides/${name}.jpg`)
  for (const name of [
    '019-frappe',
    '003-cake',
    '004-ice-cream',
    '021-ice-coffee',
    '007-cappuccino',
  ])
    names.push(`icons/${name}.png`)
  const manifest = {}
  // Le conversioni avvengono solo in build; due worker limitano memoria e CPU senza richiedere un image server.
  let next = 0
  await Promise.all(
    Array.from({ length: 2 }, async () => {
      while (next < names.length) {
        const name = names[next++]
        const source = await fs.readFile(path.join(imageRoot, name))
        const metadata = await sharp(source).metadata()
        const key = name.replace(/\.[^.]+$/, '')
        const layer = name.startsWith('buildyouricecream/')
        const icon = name.startsWith('icons/')
        const requested = layer
          ? [288, 576]
          : icon
          ? [96, 192]
          : [320, 640, 1000]
        const widths = [
          ...new Set(requested.map(width => Math.min(width, metadata.width))),
        ]
        const fallback = metadata.hasAlpha ? 'png' : 'jpg'
        const formats =
          layer || icon ? ['webp', fallback] : ['avif', 'webp', fallback]
        const hash = crypto
          .createHash('sha256')
          .update(source)
          .update('responsive-v1')
          .digest('hex')
          .slice(0, 12)
        const entry = {
          width: metadata.width,
          height: metadata.height,
          sources: {},
        }
        for (const format of formats) {
          const variants = []
          for (const width of widths) {
            const filename = `${key.replace(
              /\//g,
              '-'
            )}-${hash}-${width}.${format}`
            const target = path.join(output, filename)
            try {
              await fs.access(target)
            } catch {
              let image = sharp(source).resize({
                width,
                withoutEnlargement: true,
              })
              if (format === 'avif')
                image = image.avif({ quality: 50, effort: 4 })
              else if (format === 'webp')
                image = image.webp({ quality: 78, alphaQuality: 90 })
              else if (format === 'jpg')
                image = image.jpeg({ quality: 82, mozjpeg: true })
              else image = image.png({ compressionLevel: 9, palette: false })
              await image.toFile(target)
            }
            variants.push({ width, url: `/media/${filename}` })
          }
          entry.sources[format] = variants
            .map(variant => `${variant.url} ${variant.width}w`)
            .join(', ')
          if (format === fallback)
            entry.src = variants[Math.min(1, variants.length - 1)].url
        }
        manifest[key] = entry
      }
    })
  )
  const ordered = Object.fromEntries(
    Object.keys(manifest)
      .sort()
      .map(key => [key, manifest[key]])
  )
  const generated = path.join(root, 'src/generated')
  await fs.mkdir(generated, { recursive: true })
  const filename = path.join(generated, 'images.json')
  const content = JSON.stringify(ordered, null, 2) + '\n'
  const previous = await fs.readFile(filename, 'utf8').catch(() => '')
  // Non riscrivere il manifest identico: in develop eviterebbe ricompilazioni inutili del watcher.
  if (content !== previous) await fs.writeFile(filename, content)
  return names.length
}

module.exports = { optimizeImages }
if (require.main === module)
  optimizeImages()
    .then(count => console.log(`Ottimizzate ${count} immagini statiche.`))
    .catch(error => {
      console.error(error)
      process.exitCode = 1
    })
