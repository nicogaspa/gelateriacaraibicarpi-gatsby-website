import catalog from '../../feeds/catalog.json'

export default catalog.products.map(product => ({
  ...product,
  imageKey: `products/${product.id.replace('caraibi-', '').replace(/-/g, '_')}`,
}))
