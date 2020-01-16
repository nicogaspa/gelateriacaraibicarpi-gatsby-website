import {Link} from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import {Waypoint} from 'react-waypoint'
import pic01 from '../assets/images/interno.jpg'
import icon1 from '../assets/images/icons/019-frappe.png'
import icon2 from '../assets/images/icons/003-cake.png'
import icon3 from '../assets/images/icons/004-ice-cream.png'
import icon4 from '../assets/images/icons/021-ice-coffee.png'
import icon5 from '../assets/images/icons/007-cappuccino.png'
import Header from '../components/Header'
import Layout from '../components/layout'
import Nav from '../components/Nav'
import Carousel from '../components/Carousel'

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stickyNav: false,
    }
  }

  _handleWaypointEnter = () => {
    this.setState(() => ({stickyNav: false}))
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({stickyNav: true}))
  }

  render() {
    return (
      <Layout>
        <Helmet title="Gelateria Caraibi - Carpi">
          <meta charSet="utf-8"/>
          <meta name="language" content="IT"/>
          {/*<meta name="theme-color" content="#d21a2e"/>*/}
          <meta name="description" content="Gelateria Caraibi è a Carpi, in via Nuova Ponente 5F, I migliori gelati,
          semifreddi e torte artigianali, da più di 30 anni. Tel: 059641442" />
          <meta name="keywords" content="gelateria,caraibi,gasparini massimo,gelato,gelati,carpi,nuova ponente,
          coppa,cono gelato,coni gelato,torta gelato,torta,torte,semifreddi,semifreddo,gusti gelato,gusto,
           cialda,ice cream,granite,granita,dolci,dolce"/>
           <html lang="it" />
        </Helmet>

        <Waypoint onEnter={this._handleWaypointEnter} onLeave={this._handleWaypointLeave}/>
        <Header/>
        <Nav sticky={this.state.stickyNav}
             current_page="homepage"
             scrollspyitems={[
               {'element': 'intro', 'title': 'Chi siamo'},
               {'element': 'product-icons', 'title': 'I nostri prodotti'},
               {'element': 'presentation', 'title': 'Lasciati ispirare'},
               {'element': 'contacts', 'title': 'Contattaci'}]}
        />

        <div id="main">
          <section id="intro" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>Dal 1987 a Carpi</h2>
                </header>
                <p>
                  Da più di 30 anni offriamo <b>qualità</b> e <b>semplicità</b> ai nostri clienti.
                  <br/>
                  La <b>bontà</b> del nostro gelato incontra l'<b>originalità</b> delle nuove proposte,
                  dovrai soltanto lasciarti ispirare dalle nostre gustose creazioni, una meraviglia per il palato.
                </p>
                <p className="align-center">
                  Ci trovi in <b>via Nuova Ponente 5F</b>
                  <br/>
                  Siamo aperti tutti i giorni <b>dalle 10:30 alle 14:00 e dalle 15:00 alle 22:00</b>
                  <br/>
                  <b>Chiuso il martedì</b>
                </p>
              </div>
              <span className="image">
                <img src={pic01} alt=""/>
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
                  <img src={icon1} alt=""/>
                </span>
                <h3>Gustosi Frappè</h3>
                {/*<p>*/}
                {/*  Sed lorem amet ipsum dolor et amet nullam consequat a feugiat*/}
                {/*</p>*/}
              </li>
              <li>
                <span className="icon major style3">
                  <img src={icon2} alt=""/>
                </span>
                <h3>Dolci Semifreddi e Torte</h3>
              </li>
              <li>
                <span className="icon major style5">
                  <img src={icon3} alt=""/>
                </span>
                <h3>Sua maestà il Gelato</h3>
              </li>
              <li>
                <span className="icon major style1">
                  <img src={icon4} alt=""/>
                </span>
                <h3>Rinfrescanti Granite</h3>
              </li>
              <li>
                <span className="icon major style1">
                  <img src={icon5} alt=""/>
                </span>
                <h3>Calde cioccolate con panna</h3>
              </li>
            </ul>
          </section>

          <section id="presentation" className="main special">
            <header className="major">
              <h2>Lasciati ispirare dalle nostre creazioni</h2>
            </header>
            <Carousel/>
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

          <section id="contacts" className="main special">
            <header className="major">
              <h2>Contattaci</h2>
              <p>
                Chiamaci <a href="tel:059641442">059 641442</a>
                , scrivici su <a href="https://www.facebook.com/GelateriaCaraibiCarpi/">Facebook</a>
                &nbsp; o mandaci una <a href="mailto:info@gelateriacaraibicarpi.it">mail</a>
              </p>
            </header>
            <p>
              Aspetti ospiti? <span role="img" aria-label="party popper">🎉</span>&nbsp;
              Festa di compleanno? <span role="img" aria-label="gift">🎁</span>&nbsp;
              Pausa merenda a lavoro? <span role="img" aria-label="ice cream">🍨</span>
              <br/>
              Puoi prenotare una delle nostre creazioni o ordinare una torta gelato personalizzata
              <br/>
              Contattaci per saperne di più
            </p>
            <p>
              Siamo aperti tutti i giorni tranne il martedì!
            </p>
          </section>
        </div>

      </Layout>
    )
  }
}

export default Index
