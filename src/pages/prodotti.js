import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Header from "../components/Header"
import {Waypoint} from "react-waypoint"
import Nav from "../components/Nav"
import pic0 from '../assets/images/products/torta_personalizzata.png'
import pic1 from '../assets/images/products/pasticcini.png'
import pic2 from '../assets/images/products/cremino.png'
import pic3 from '../assets/images/products/gianduia_stracciatella.png'
import pic4 from '../assets/images/products/mascarpone.png'
import pic5 from '../assets/images/products/torta_catalana.png'
import pic6 from '../assets/images/products/rocher.png'
import pic7 from '../assets/images/products/profitterol.png'
import pic8 from '../assets/images/products/zuppa_inglese.png'
import pic9 from '../assets/images/products/stracchino_duchessa.png'
import pic10 from '../assets/images/products/cookies.png'
import pic11 from '../assets/images/products/cheesecake.png'

class Products extends React.Component {
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

  products = [
    {
      "title": "La tua torta!",
      "subtitle": "4, 6, 8, 50 porzioni!",
      "people": 0,
      "description": "Da noi puoi ordinare la tua torta gelato personalizzata, con le scritte e immagini che vuoi tu," +
        " per rendere ancora più speciale ogni occasione! <br/> " +
        "<small>Consigliamo di mantenerle in freezer fino a 20 minuti prima della consumazione</small>",
      "pic": pic0
    },
    {
      "title": "Pasticcini di Gelato",
      "subtitle": "8/10 porzioni -",
      "people": 9,
      "description": "I più versatili, comodi e buoni dessert che ci possano essere! <br/>" +
        "Provali nella scatola da 24 o 32 pezzi, sono tutti diversi e hanno un solo difetto..." +
        "uno tira l'altro e finiscono subito! <br/>" +
        "<small>Consigliamo di mantenerli in freezer e mangiarli al momento</small>",
      "pic": pic1
    },
    {
      "title": "Vaniglia e Cioccolata",
      "subtitle": "6 porzioni -",
      "people": 6,
      "description": "Il topping croccante sembra la parte più buona, ma aspettate di " +
        "assaggiare l'interno di vaniglia e cioccolata...<br/>" +
        "<small>Consigliamo di mantenerlo in freezer fino a 20 minuti prima della consumazione</small>",
      "pic": pic2
    },
    {
      "title": "Gianduia e Stracciatella",
      "subtitle": "6 porzioni -",
      "people": 6,
      "description": "Un classico intramontabile, una base di semifreddo, metà gianduia e metà stracciatella, " +
        "coperto da una crema di cioccolato fondente e piccole meringhe <br/>" +
        "<small>Consigliamo di mantenerlo in freezer fino a 20 minuti prima della consumazione</small>",
      "pic": pic3
    },
    {
      "title": "Mascarpone",
      "subtitle": "6 porzioni -",
      "people": 6,
      "description": "Un dolce cremoso ricopre un cuore di biscotti al caffè, con una spolverata di cacao.<br>" +
        "Riscopri la classicità con questo dolce familiare <br/>" +
        "<small>Consigliamo di mantenerlo in freezer fino a 20 minuti prima della consumazione</small>",
      "pic": pic4
    },
    {
      "title": "Torta Cookies",
      "subtitle": "8 porzioni -",
      "people": 8,
      "description": "Gianduia e Zabaione ricoperti da una cremosa crema alle nocciole e cacao, con questa non si sbaglia!<br/>" +
        "<small>Consigliamo di mantenerla in freezer fino a 20 minuti prima della consumazione</small>",
      "pic": pic10
    },
    {
      "title": "Catalana di Bosco",
      "subtitle": "6 porzioni -",
      "people": 6,
      "description": "Pan di spagna, una crema di vaniglia variegata ai frutti bosco e una fila di amarene " +
        "rendono unico questo dolce<br/>" +
        "<small>Consigliamo di mantenerla in freezer fino a 20 minuti prima della consumazione</small>",
      "pic": pic5
    },
    {
      "title": "Rocher",
      "subtitle": "2 porzioni -",
      "people": 2,
      "description": "Piccolo ma terribile, un concentrato di bontà da gustare in due " +
        "o...perchè no? anche da soli!<br/>" +
        "<small>Consigliamo di mantenerlo in freezer fino a 20 minuti prima della consumazione</small>",
      "pic": pic6
    },
    {
      "title": "Profitterol",
      "subtitle": "7 porzioni -",
      "people": 7,
      "description": "Non servono introduzioni per il re dei dessert, un paio di bignè a testa e " +
        "tutti si leccheranno i baffi!<br/>" +
        "<small>Consigliamo di mantenerlo in freezer fino a 40 minuti prima della consumazione</small>",
      "pic": pic7
    },
    {
      "title": "Cheesecake",
      "subtitle": "6 porzioni -",
      "people": 6,
      "description": "Una classica cheesecake rivisitata a semifreddo, con una dolce base di biscotti e una " +
        "copertura di fragoline o frutti di bosco<br/>" +
        "<small>Consigliamo di mantenerla in freezer fino a 20 minuti prima della consumazione</small>",
      "pic": pic11
    },
    {
      "title": "Zuppa Inglese",
      "subtitle": "3 porzioni -",
      "people": 3,
      "description": "Un classico dessert rivisitato al croccantino, avvolto da savoiardi all'alchermes<br/>" +
        "<small>Consigliamo di mantenerl1 in freezer fino a 20 minuti prima della consumazione</small>",
      "pic": pic8
    },
    {
      "title": "Stracchino della duchessa",
      "subtitle": "3 porzioni -",
      "people": 3,
      "description": "Croccanti amaretti e goccie di cioccolato per il più delicato dei semifreddi<br/>" +
        "<small>Consigliamo di mantenerlo in freezer fino a 20 minuti prima della consumazione</small>",
      "pic": pic9
    },
  ]

  render() {
    let products_html = this.products.map((product, index) => {
      let peoples_icons = Array.apply(null, Array(product.people)).map(() => {
        return <i className="icon fa-user"/>
      })
        return <div
          className={index % 2 === 0 ? "content product-content content-right" : "content product-content content-left"}>
          <span className={index % 2 === 0 ? "image right" : "image left"}><img src={product.pic} alt=""/></span>
          <h2>{product.title}</h2>
          <h3>{product.subtitle} {peoples_icons}</h3>
          <p dangerouslySetInnerHTML={{__html: product.description}}/>
        </div>
      }
    )

    return (
      <Layout>
        <Helmet title="Gelateria Caraibi - Prodotti">
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
             current_page="prodotti"
             scrollspyitems={[{'element': 'products', 'title': 'I nostri prodotti'}]}
        />

        <div id="main">
          <section id="products" className="main">
            <h1>Scopri i nostri dolci semifreddi o crea la tua torta!</h1>
            <p>
              Questo è solamente un assaggio dei dolci che potrai trovare in gelateria, le creazioni e la fantasia non
              finiscono mai!
              <br/>
              Troverai sempre qualche nostra creazione in vetrina, oppure prenotale chiamandoci allo  059641442
            </p>
            {products_html}
          </section>
        </div>
      </Layout>
    )
  }
}

export default Products
