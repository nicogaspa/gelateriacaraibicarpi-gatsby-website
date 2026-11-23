const fs = require('node:fs')
const path = require('node:path')

const root = path.resolve(__dirname, '..')
const catalog = JSON.parse(
  fs.readFileSync(path.join(root, 'feeds/catalog.json'), 'utf8')
)
const feedOutput = path.join(root, 'static/feeds')
const products = catalog.products
const ids = new Set(products.map(product => product.id))
if (ids.size !== products.length)
  throw new Error('Gli ID dei prodotti devono essere univoci')

const googleFields = [
  'id',
  'title',
  'description',
  'image_link',
  'brand',
  'condition',
  'google_product_category',
  'gtin',
  'mpn',
  'identifier_exists',
]
const metaRequiredFields = [
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
const metaFields = metaRequiredFields.filter(
  field => !['price', 'availability'].includes(field)
)
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

// Vendita solo locale: prezzo e disponibilità sono omessi anche quando la piattaforma li richiederebbe.
const googleRows = products.map(product => ({
  id: product.id,
  title: product.title,
  description: `${product.description} Vendita solo locale con ritiro in gelateria a Carpi; nessuna consegna.`,
  image_link: product.image_url,
  brand: product.brand,
  condition: product.condition,
  google_product_category: product.google_product_category,
  gtin: product.gtin,
  mpn: product.mpn,
  identifier_exists: product.identifiers_absent_confirmed ? 'no' : '',
}))
const metaRows = googleRows.map((row, index) => ({
  ...row,
  link: products[index].product_url,
  additional_image_link: products[index].additional_image_urls.join(','),
}))
const openaiRows = products.map(product => ({
  item_id: product.id,
  title: product.title,
  description: `${product.description} Vendita solo locale con ritiro in gelateria a Carpi; nessuna consegna.`,
  url: product.product_url,
  brand: product.brand,
  seller_name: catalog.seller_name,
  image_url: product.image_url,
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
  sales: catalog.sales,
  omitted_by_request: ['price', 'availability'],
  scope:
    'Google prodotti locali (solo anagrafica), cataloghi incompleti Meta e OpenAI; nessun inventario o checkout.',
  platform_status: {
    google:
      'Campi anagrafici locali compilati; verificare identificativi e configurare il programma locale. Inventario separato non generato: richiede disponibilità e store_code.',
    meta:
      'Catalogo incompleto: prezzo e disponibilità sono obbligatori anche con vendita locale.',
    openai:
      'Catalogo incompleto: prezzo e disponibilità sono obbligatori. IT/EUR richiede conferma del supporto da OpenAI.',
  },
  global_blockers: [
    'Confermare GTIN/MPN oppure la loro effettiva assenza; gli ID interni non sono codici del produttore.',
    'Google: configurare negozio e destinazioni locali in Merchant Center; il solo catalogo non abilita annunci o schede locali.',
    'Google: senza disponibilità non viene prodotto il feed inventario richiesto per le superfici locali.',
    'Meta e OpenAI: omissione intenzionale di campi obbligatori; non inviare come feed conformi.',
    'Meta e OpenAI: mancano pagine dedicate ai singoli prodotti; per Meta mancano ulteriori immagini.',
    'OpenAI: ottenere conferma IT/EUR e completare onboarding merchant.',
  ],
  products: products.map((product, index) => ({
    id: product.id,
    google_local_product_missing: missingFields(googleRows[index], [
      'id',
      'title',
      'description',
      'image_link',
      'brand',
    ]),
    meta_missing: missingFields(metaRows[index], metaRequiredFields),
    openai_missing: missingFields(openaiRows[index], openaiFields),
    image_at_least_500x500:
      product.image_width >= 500 && product.image_height >= 500,
    image_within_meta_size_limit: product.image_bytes <= 8 * 1024 * 1024,
    offer_unit_confirmed: product.sale_unit_confirmed,
  })),
}

function delimited(fields, rows, separator, header = field => field) {
  const cell = value => {
    const text = value == null ? '' : String(value)
    return /["\r\n\t,]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text
  }
  return (
    [
      fields.map(header).join(separator),
      ...rows.map(row => fields.map(field => cell(row[field])).join(separator)),
    ].join('\r\n') + '\r\n'
  )
}

fs.mkdirSync(feedOutput, { recursive: true })
fs.writeFileSync(
  path.join(feedOutput, 'google-products.tsv'),
  // La specifica Google per i prodotti locali usa spazi nelle intestazioni TSV.
  delimited(googleFields, googleRows, '\t', field => field.replace(/_/g, ' '))
)
fs.writeFileSync(
  path.join(feedOutput, 'meta-products.csv'),
  delimited(metaFields, metaRows, ',')
)
fs.writeFileSync(
  path.join(feedOutput, 'openai-products.jsonl'),
  openaiRows.map(row => JSON.stringify(row)).join('\n') + '\n'
)
fs.writeFileSync(
  path.join(root, 'feeds/readiness.json'),
  JSON.stringify(audit, null, 2) + '\n'
)
console.log(
  `Generati 3 cataloghi in static/feeds per ${products.length} prodotti: solo vendita locale e ritiro, senza prezzo o disponibilità. Limiti in feeds/readiness.json.`
)
