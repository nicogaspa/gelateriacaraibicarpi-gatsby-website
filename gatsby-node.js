const { optimizeImages } = require('./scripts/optimize-images.cjs')

exports.onPreBootstrap = async ({ reporter }) => {
  const count = await optimizeImages()
  reporter.info(
    `Generate varianti statiche per ${count} immagini in public/media`
  )
}
