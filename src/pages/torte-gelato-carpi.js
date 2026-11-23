import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Seo from '../components/Seo'
import Booking from '../components/Booking'
import OptimizedImage from '../components/OptimizedImage'

const Cakes = () => (
  <Layout>
    <Seo
      title="Torte gelato personalizzate a Carpi | Gelateria Caraibi"
      description="Torte gelato su misura per compleanni, feste ed eventi a Carpi, anche per 50 o più persone. Prenota per telefono, in gelateria o su WhatsApp. Solo ritiro."
      pathname="/torte-gelato-carpi/"
    />
    <Header />
    <Nav current_page="torte" />
    <main id="main">
      <section className="main" id="torte">
        <h1>Torte gelato personalizzate a Carpi</h1>
        <div className="content product-content">
          <span className="image right">
            <OptimizedImage
              image="products/torta_personalizzata"
              alt="Torta gelato personalizzata della Gelateria Caraibi"
              sizes="(max-width: 736px) 75vw, 400px"
              loading="eager"
            />
          </span>
          <h2>Una torta su misura per la tua occasione</h2>
          <p>
            Per compleanni, feste ed eventi prepariamo torte gelato artigianali
            con ingredienti genuini, personalizzabili con scritte e immagini.
          </p>
          <p>
            Realizziamo torte anche per <strong>50 o più persone</strong>.
            Contattaci per concordare porzioni, formato, personalizzazione e
            tempi di preparazione.{' '}
            <strong>Per i prezzi contattare la gelateria.</strong>
          </p>
        </div>
        <h2>Come prenotare e ritirare</h2>
        <Booking />
        <h2>Coni e coppette per aziende</h2>
        <p>
          Offriamo alle aziende il servizio di prenotazione di coni e coppette
          per pause e occasioni di lavoro. Concorda con noi quantità e modalità
          di preparazione: il ritiro avviene sempre in gelateria, in via Nuova
          Ponente 5/F a Carpi.
        </p>
        <p>
          Scopri anche i{' '}
          <Link to="/prodotti/">semifreddi con le porzioni indicate</Link> e le{' '}
          <Link to="/faq/">domande frequenti</Link>.
        </p>
      </section>
    </main>
  </Layout>
)

export default Cakes
