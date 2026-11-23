import React from 'react'
import Helmet from 'react-helmet'
import business from '../data/business.json'
import images from '../generated/images.json'

const Seo = ({
  title,
  description,
  pathname = '/',
  noindex = false,
  children,
}) => {
  const canonical = `${business.siteUrl}${pathname}`
  const image = `${business.siteUrl}${images['products/torta_personalizzata'].src}`
  return (
    <Helmet title={title} htmlAttributes={{ lang: 'it' }}>
      <meta charSet="utf-8" />
      <meta name="description" content={description} />
      <meta name="theme-color" content="#d21a2e" />
      <link rel="canonical" href={canonical} />
      {noindex && <meta name="robots" content="noindex,follow" />}
      <meta property="og:locale" content="it_IT" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={business.name} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      {children}
    </Helmet>
  )
}

export default Seo
