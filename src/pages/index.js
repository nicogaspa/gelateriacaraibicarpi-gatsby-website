import { Link } from 'gatsby'
import React from 'react'
import Seo from '../components/Seo'
import BusinessSchema from '../components/BusinessSchema'
import Booking from '../components/Booking'
import Hours from '../components/Hours'
import OptimizedImage from '../components/OptimizedImage'
import Header from '../components/Header'
import Layout from '../components/layout'
import Nav from '../components/Nav'
import Carousel from '../components/Carousel'

class Index extends React.Component {
  render() {
    return (
      <Layout>
        <Seo
          title="Gelateria artigianale a Carpi dal 1987 | Caraibi"
          description="Gelato artigianale con ingredienti genuini, semifreddi e torte personalizzate a Carpi. Prenotazioni anche per aziende, solo ritiro in gelateria."
        />
        <BusinessSchema />

        <Header />
        <Nav current_page="homepage" />

        <main id="main">
          <section id="intro" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h1>Gelateria artigianale a Carpi dal 1987</h1>
                </header>
                <p>
                  Da più di 30 anni offriamo <b>qualità</b> e <b>semplicità</b>{' '}
                  ai nostri clienti, preparando le nostre creazioni artigianali
                  con <b>ingredienti genuini</b>.
                  <br />
                  La <b>bontà</b> del nostro gelato incontra l'
                  <b>originalità</b> delle nuove proposte, dovrai soltanto
                  lasciarti ispirare dalle nostre gustose creazioni, una
                  meraviglia per il palato.
                </p>
                <p className="align-center">
                  Ci trovi in <b>via Nuova Ponente 5F</b>
                </p>
                <Hours />
              </div>
              <span className="image">
                <OptimizedImage
                  image="interno"
                  alt="Interno della Gelateria Caraibi a Carpi"
                  sizes="(max-width: 736px) 60vw, 320px"
                  loading="eager"
                />
              </span>
            </div>
          </section>

          <section id="product-icons" className="main special">
            <header className="major">
              <h2>I nostri prodotti</h2>
            </header>
            <ul className="features">
              <li>
                <span className="icon major style1">
                  <OptimizedImage
                    image="icons/019-frappe"
                    alt=""
                    sizes="110px"
                  />
                </span>
                <h3>Gustosi Frappè</h3>
                {/*<p>*/}
                {/*  Sed lorem amet ipsum dolor et amet nullam consequat a feugiat*/}
                {/*</p>*/}
              </li>
              <li>
                <span className="icon major style3">
                  <OptimizedImage image="icons/003-cake" alt="" sizes="110px" />
                </span>
                <h3>Dolci Semifreddi e Torte</h3>
              </li>
              <li>
                <span className="icon major style5">
                  <OptimizedImage
                    image="icons/004-ice-cream"
                    alt=""
                    sizes="110px"
                  />
                </span>
                <h3>Sua maestà il Gelato</h3>
              </li>
              <li>
                <span className="icon major style1">
                  <OptimizedImage
                    image="icons/021-ice-coffee"
                    alt=""
                    sizes="110px"
                  />
                </span>
                <h3>Rinfrescanti Granite</h3>
              </li>
              <li>
                <span className="icon major style1">
                  <OptimizedImage
                    image="icons/007-cappuccino"
                    alt=""
                    sizes="110px"
                  />
                </span>
                <h3>Calde cioccolate con panna</h3>
              </li>
            </ul>
          </section>

          <section id="presentation" className="main special">
            <header className="major">
              <h2>Lasciati ispirare dalle nostre creazioni</h2>
            </header>
            <Carousel />
            <footer>
              <ul className="actions">
                <li>
                  <Link to="/prodotti" className="button">
                    Scoprili tutti
                  </Link>
                </li>
              </ul>
            </footer>
          </section>

          <section id="booking" className="main">
            <h2>Torte personalizzate e prenotazioni per aziende</h2>
            <p>
              Realizziamo{' '}
              <Link to="/torte-gelato-carpi/">torte gelato personalizzate</Link>{' '}
              anche per <strong>50 o più persone</strong>. Per i semifreddi, le
              porzioni sono indicate nella{' '}
              <Link to="/prodotti/">pagina prodotti</Link>.
            </p>
            <p>
              Per le aziende offriamo la prenotazione di coni e coppette, sempre
              con ritiro in gelateria a Carpi. Contattaci per concordare
              quantità, preparazione e prezzi.
            </p>
            <Booking />
            <p>
              Hai altre domande? Consulta le{' '}
              <Link to="/faq/">FAQ su prenotazioni, prezzi e orari</Link>.
            </p>
          </section>

          <section id="contacts" className="main special">
            <header className="major">
              <h2>Contattaci</h2>
              <p>
                Chiamaci <a href="tel:+39059641442">059 641442</a>, scrivici su{' '}
                <a href="https://wa.me/39059641442">
                  WhatsApp allo stesso numero
                </a>{' '}
                oppure passa direttamente in gelateria.
              </p>
            </header>
            <p>
              Aspetti ospiti?{' '}
              <span role="img" aria-label="party popper">
                🎉
              </span>
              &nbsp; Festa di compleanno?{' '}
              <span role="img" aria-label="gift">
                🎁
              </span>
              &nbsp; Pausa merenda a lavoro?{' '}
              <span role="img" aria-label="ice cream">
                🍨
              </span>
              <br />
              Puoi prenotare una delle nostre creazioni o ordinare una torta
              gelato personalizzata
              <br />
              Contattaci per saperne di più
            </p>
            <p>
              Per i prezzi contatta la gelateria. Tutte le prenotazioni si
              ritirano in via Nuova Ponente 5/F a Carpi.
            </p>
          </section>
        </main>
      </Layout>
    )
  }
}

export default Index
