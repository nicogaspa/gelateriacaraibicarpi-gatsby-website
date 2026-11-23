import React from 'react'
import Helmet from 'react-helmet'
import business from '../data/business.json'
import images from '../generated/images.json'

const BusinessSchema = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'IceCreamShop',
    '@id': `${business.siteUrl}/#gelateria`,
    name: business.name,
    url: business.siteUrl,
    telephone: business.phone,
    image: `${business.siteUrl}${images.interno.src}`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Via Nuova Ponente 5/F',
      addressLocality: 'Carpi',
      addressRegion: 'MO',
      addressCountry: 'IT',
    },
    description: `Gelateria artigianale a Carpi dal 1987. ${business.seasonalNotice} Prenotazioni telefoniche, in gelateria e su WhatsApp; solo ritiro in gelateria.`,
    sameAs: [
      'https://www.facebook.com/GelateriaCaraibiCarpi/',
      'https://www.instagram.com/gelateriacaraibicarpi/',
    ],
  }
  // "Metà dicembre/febbraio" e aperture festive non definiscono date esatte: niente calendario automatico potenzialmente errato.
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema).replace(/</g, '\u003c')}
      </script>
    </Helmet>
  )
}

export default BusinessSchema
