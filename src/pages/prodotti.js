import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Seo from '../components/Seo'
import Booking from '../components/Booking'
import OptimizedImage from '../components/OptimizedImage'
import products from '../data/products'

const Products = () => (
  <Layout>
    <Seo
      title="Semifreddi e torte gelato a Carpi | Gelateria Caraibi"
      description="Scopri semifreddi, pasticcini e torte gelato artigianali a Carpi. Porzioni indicate per ogni proposta, prenotazione e ritiro in gelateria. Per i prezzi contattaci."
      pathname="/prodotti/"
    />
    <Header />
    <Nav current_page="prodotti" />
    <main id="main">
      <section id="products" className="main">
        <h1>Semifreddi e torte gelato artigianali a Carpi</h1>
        <p>
          Questo è solamente un assaggio dei dolci che potrai trovare in
          gelateria, le creazioni e la fantasia non finiscono mai! Prepariamo le
          nostre proposte artigianali con ingredienti genuini.
        </p>
        <p>
          Per i semifreddi trovi le porzioni indicate sotto ogni proposta. Le{' '}
          <Link to="/torte-gelato-carpi/">torte personalizzate</Link> possono
          essere realizzate anche per <strong>50 o più persone</strong>. Per i
          prezzi contatta la gelateria.
        </p>
        <Booking />
        {products.map((product, index) => (
          <article
            key={product.id}
            id={product.id}
            className={`content product-content ${
              index % 2 === 0 ? 'content-right' : 'content-left'
            }`}
          >
            <span className={`image ${index % 2 === 0 ? 'right' : 'left'}`}>
              <OptimizedImage
                image={product.imageKey}
                alt={product.title}
                sizes="(max-width: 736px) 75vw, 360px"
              />
            </span>
            <h2>{product.title}</h2>
            <h3>{product.subtitle}</h3>
            <p>{product.description}</p>
          </article>
        ))}
        <p>
          Organizzi una pausa per i colleghi? Prenota anche{' '}
          <Link to="/faq/#aziende">coni e coppette per aziende</Link>, sempre
          con ritiro in gelateria a Carpi.
        </p>
      </section>
    </main>
  </Layout>
)

export default Products
