const fs = require('node:fs')
const path = require('node:path')

const output = path.resolve(__dirname, '../public')
const sitemapIndex = path.join(output, 'sitemap-index.xml')

// GSC e Bing usano già /sitemap.xml: preservare l'URL evita di lasciare online la vecchia sitemap a quattro pagine.
fs.copyFileSync(sitemapIndex, path.join(output, 'sitemap.xml'))
console.log('Sitemap compatibile generata in public/sitemap.xml.')
