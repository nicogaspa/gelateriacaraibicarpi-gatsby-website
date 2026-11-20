const fs = require('node:fs')
const path = require('node:path')

const root = path.resolve(__dirname, '..')
const catalog = JSON.parse(
  fs.readFileSync(path.join(root, 'feeds/catalog.json'), 'utf8')
)
const drafts = path.join(root, 'feeds/drafts')
const products = catalog.products
const ids = new Set(products.map(product => product.id))
if (ids.size !== products.length)
  throw new Error('Gli ID dei prodotti devono essere univoci')

const googleFields = [
  'id',
  'title',
  'description',
  'link',
  'image_link',
  'availability',
  'price',
  'brand',
  'condition',
  'google_product_category',
  'gtin',
  'mpn',
  'identifier_exists',
]
const metaFields = [
  'id',
  'title',
  'description',
  'availability',
  'condition',
  'price',
  'link',
  'image_link',
  'brand',
  'google_product_category',
  'additional_image_link',
]
const openaiFields = [
  'item_id',
  'title',
  'description',
  'url',
  'brand',
  'seller_name',
  'image_url',
  'availability',
  'price',
  'target_countries',
  'store_country',
]

// Le bozze mantengono vuoti i dati commerciali assenti: zero o disponibilità presunta falserebbero l'offerta.
const money = product =>
  product.price == null ? '' : `${product.price} ${product.currency}`
const googleRows = products.map(product => ({
  id: product.id,
  title: product.title,
  description: product.description,
  link: product.product_url,
  image_link: product.image_url,
  availability: product.availability,
  price: money(product),
  brand: product.brand,
  condition: product.condition,
  google_product_category: product.google_product_category,
  gtin: product.gtin,
  mpn: product.mpn,
  identifier_exists: product.identifiers_absent_confirmed ? 'no' : '',
}))
const metaRows = googleRows.map((row, index) => ({
  ...row,
  availability:
    { in_stock: 'in stock', out_of_stock: 'out of stock' }[row.availability] ||
    '',
  additional_image_link: products[index].additional_image_urls.join(','),
}))
const openaiRows = products.map(product => ({
  item_id: product.id,
  title: product.title,
  description: product.description,
  url: product.product_url,
  brand: product.brand,
  seller_name: catalog.seller_name,
  image_url: product.image_url,
  availability: product.availability || 'unknown',
  price: money(product) || null,
  target_countries: catalog.target_countries,
  store_country: catalog.store_country,
  is_eligible_search: false,
  is_ads_eligible: false,
}))

const missingFields = (row, fields) =>
  fields.filter(field => row[field] == null || row[field] === '')
const audit = {
  checked_on: catalog.checked_on,
  source_url: catalog.source_url,
  product_count: products.length,
  ready_for_submission: false,
  scope:
    'Bozze Google online, Meta prodotti e OpenAI discovery; non coprono checkout o inventario locale.',
  global_blockers: [
    'Definire vendita online oppure solo prenotazione e ritiro; per Google offline valutare feed prodotti e inventario locale.',
    'Pubblicare pagine per singolo prodotto con prezzo, unità di vendita e disponibilità coerenti.',
    'Confermare le varianti della torta personalizzata e delle confezioni di pasticcini.',
    'OpenAI: il percorso standard è USA; ottenere conferma di supporto a IT/EUR e completare onboarding merchant.',
    'Confermare GTIN/MPN oppure la loro effettiva assenza; non usare ID interni come codici del produttore.',
  ],
  products: products.map((product, index) => ({
    id: product.id,
    google_missing: missingFields(googleRows[index], [
      'id',
      'title',
      'description',
      'link',
      'image_link',
      'availability',
      'price',
      'brand',
    ]),
    meta_missing: missingFields(metaRows[index], metaFields),
    openai_missing: missingFields(openaiRows[index], openaiFields),
    image_at_least_500x500:
      product.image_width >= 500 && product.image_height >= 500,
    image_within_meta_size_limit: product.image_bytes <= 8 * 1024 * 1024,
    offer_unit_confirmed: product.sale_unit_confirmed,
  })),
}

function delimited(fields, rows, separator) {
  const cell = value => {
    const text = value == null ? '' : String(value)
    return /["\r\n\t,]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text
  }
  return (
    [
      fields.join(separator),
      ...rows.map(row => fields.map(field => cell(row[field])).join(separator)),
    ].join('\r\n') + '\r\n'
  )
}

fs.mkdirSync(drafts, { recursive: true })
fs.writeFileSync(
  path.join(drafts, 'google-products.tsv'),
  delimited(googleFields, googleRows, '\t')
)
fs.writeFileSync(
  path.join(drafts, 'meta-products.csv'),
  delimited(metaFields, metaRows, ',')
)
fs.writeFileSync(
  path.join(drafts, 'openai-products.jsonl'),
  openaiRows.map(row => JSON.stringify(row)).join('\n') + '\n'
)
fs.writeFileSync(
  path.join(root, 'feeds/readiness.json'),
  JSON.stringify(audit, null, 2) + '\n'
)
console.log(
  `Generate 3 bozze per ${products.length} prodotti. Stato: dati commerciali mancanti; consultare feeds/readiness.json.`
)
