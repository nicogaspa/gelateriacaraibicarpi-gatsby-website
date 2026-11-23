import React from 'react'
import Layout from '../components/layout'
import OptimizedImage from '../components/OptimizedImage'
import { Link } from 'gatsby'
import Seo from '../components/Seo'

const NotFoundPage = () => (
  <Layout>
    <Seo
      title="Pagina non trovata | Gelateria Caraibi Carpi"
      description="La pagina richiesta non esiste. Torna alla homepage della Gelateria Caraibi a Carpi."
      pathname="/404/"
      noindex
    />
    <main id="main">
      <section className="main">
        <h1>404 - Non trovato</h1>
        <OptimizedImage
          image="404_sad"
          alt="404 not found"
          sizes="240px"
          loading="eager"
        />
        <p id="not-found">
          Questa pagina non esiste{' '}
          <span role="img" aria-label="sad face">
            😢
          </span>
        </p>
        <p>
          <Link to="/">Torna alla homepage</Link>
        </p>
      </section>
    </main>
  </Layout>
)

export default NotFoundPage
