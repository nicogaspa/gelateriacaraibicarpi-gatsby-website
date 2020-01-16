import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BuildYourIceCream from "../components/BuildYourIceCream";
import Header from "../components/Header";
import Nav from "../components/Nav";
import {Waypoint} from "react-waypoint";

class BuildYourIceCreamPage extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      stickyNav: false,
      rand_icb: [0, 0, 0],
      max_flavours: 26
    }
  }

  _handleWaypointEnter = () => {
    this.setState(() => ({stickyNav: false}))
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({stickyNav: true}))
  }

  _refreshICB = res => {
    let randoms = [];
    while (randoms.length < 3) {
      let r = Math.floor(Math.random() * this.state.max_flavours) + 1;
      if (randoms.indexOf(r) === -1) randoms.push(r);
    }
    this.setState({rand_icb: randoms})
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({'event': 'gelato-generator'})
  }

  render() {
    const rand_icb = this.state.rand_icb;
    return (
      <Layout>
        <Helmet title="Gelateria Caraibi - Crea il tuo gelato">
          <meta charSet="utf-8"/>
          <meta name="language" content="IT"/>
          {/*<meta name="theme-color" content="#d21a2e"/>*/}
          <meta name="description" content="Gelateria Caraibi è a Carpi, in via Nuova Ponente 5F, I migliori gelati,
          semifreddi e torte artigianali, da più di 30 anni. Tel: 059641442"/>
          <meta name="keywords" content="gelateria,caraibi,gasparini massimo,gelato,gelati,carpi,nuova ponente,
          coppa,cono gelato,coni gelato,torta gelato,torta,torte,semifreddi,semifreddo,gusti gelato,gusto,
           cialda,ice cream,granite,granita,dolci,dolce"/>
           <html lang="it" />
        </Helmet>

        <Waypoint onEnter={this._handleWaypointEnter} onLeave={this._handleWaypointLeave}/>
        <Header/>
        <Nav sticky={this.state.stickyNav}
             current_page="creagelato"
             scrollspyitems={[{'element': 'buildyouricecream', 'title': 'Crea il tuo gelato'}]}/>

        <div id="main">
          <section id="buildyouricecream" className="main icb">
            <h1>Crea il tuo gelato</h1>
            <p>
              Quando la scelta è troppa o sei un tipo indeciso, lascia che siamo noi a darti delle idee!
              Clicca sul pulsante e genera il tuo gelato
            </p>
            <a className="button special" id="generateIceCream" onClick={() => this._refreshICB()}>
              <span role="img" aria-label="ice-cream">🍨</span>
              &nbsp;Gelato Generator&nbsp;
              <span role="img" aria-label="ice-cream">🍨</span>
            </a>

            <BuildYourIceCream randICB={rand_icb}/>

            <p>
              Tutti i nostri gusti di gelato sono artigianali e vengono preparati direttamente da noi
            </p>
            <p>
              Se hai qualche intolleranza o vuoi sapere gli ingredienti di ogni gusto, chiedicelo
              <br/>
              Tutti i nostri gelati di frutta non contengono latte e alcuni gusti li abbiamo rivisti proprio senza
              ingredienti fastidiosi!
            </p>

          </section>
        </div>
      </Layout>
    )
  }
}

export default BuildYourIceCreamPage
