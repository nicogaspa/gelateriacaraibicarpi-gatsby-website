import React from 'react'
import Seo from '../components/Seo'
import Layout from '../components/layout'
import BuildYourIceCream from '../components/BuildYourIceCream'
import Header from '../components/Header'
import Nav from '../components/Nav'

class BuildYourIceCreamPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      rand_icb: [0, 0, 0],
      max_flavours: 26,
    }
  }

  _refreshICB = res => {
    let randoms = []
    while (randoms.length < 3) {
      let r = Math.floor(Math.random() * this.state.max_flavours) + 1
      if (randoms.indexOf(r) === -1) randoms.push(r)
    }
    this.setState({ rand_icb: randoms })
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({ event: 'gelato-generator' })
  }

  render() {
    const rand_icb = this.state.rand_icb
    return (
      <Layout>
        <Seo
          title="Crea il tuo gelato | Gelateria Caraibi Carpi"
          description="Lasciati ispirare da abbinamenti di gusti del nostro gelato artigianale a Carpi. Per ingredienti, allergeni e prenotazioni contatta la gelateria."
          pathname="/creagelato/"
        />

        <Header />
        <Nav current_page="creagelato" />

        <main id="main">
          <section id="buildyouricecream" className="main icb">
            <h1>Crea il tuo gelato</h1>
            <p>
              Quando la scelta è troppa o sei un tipo indeciso, lascia che siamo
              noi a darti delle idee! Clicca sul pulsante e genera il tuo gelato
            </p>
            <button
              type="button"
              className="button special"
              id="generateIceCream"
              onClick={() => this._refreshICB()}
            >
              <span role="img" aria-label="ice-cream">
                🍨
              </span>
              &nbsp;Gelato Generator&nbsp;
              <span role="img" aria-label="ice-cream">
                🍨
              </span>
            </button>

            <BuildYourIceCream randICB={rand_icb} />

            <p>
              Tutti i nostri gusti di gelato sono artigianali e vengono
              preparati direttamente da noi
            </p>
            <p>
              Se hai qualche intolleranza o vuoi sapere gli ingredienti di ogni
              gusto, chiedicelo
              <br />
              Tutti i nostri gelati di frutta non contengono latte e alcuni
              gusti li abbiamo rivisti proprio senza ingredienti fastidiosi!
            </p>
          </section>
        </main>
      </Layout>
    )
  }
}

export default BuildYourIceCreamPage
