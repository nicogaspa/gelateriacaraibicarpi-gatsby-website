import React from 'react'
import images from '../generated/images.json'

const OptimizedImage = ({
  image,
  alt,
  sizes = '100vw',
  loading = 'lazy',
  priority,
  ...props
}) => {
  const asset = images[image]
  if (!asset) throw new Error(`Immagine non generata: ${image}`)
  const fallback = asset.sources.jpg || asset.sources.png
  return (
    <picture>
      {asset.sources.avif && (
        <source type="image/avif" srcSet={asset.sources.avif} sizes={sizes} />
      )}
      <source type="image/webp" srcSet={asset.sources.webp} sizes={sizes} />
      <img
        {...props}
        src={asset.src}
        srcSet={fallback}
        sizes={sizes}
        width={asset.width}
        height={asset.height}
        alt={alt}
        loading={loading}
        decoding="async"
        fetchpriority={priority}
      />
    </picture>
  )
}

export default OptimizedImage
