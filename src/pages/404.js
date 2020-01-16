import React from 'react'
import Layout from '../components/layout'
import img_404 from '../assets/images/404_sad.png'
import Helmet from "react-helmet";

const NotFoundPage = () => (
  <Layout>
    <Helmet title="Gelateria Caraibi - 404">
      <meta charSet="utf-8"/>
      <meta name="language" content="IT"/>
      <meta name="description" content="Gelateria Caraibi è a Carpi, in via Nuova Ponente 5F, I migliori gelati,
          semifreddi e torte artigianali, da più di 30 anni. Tel: 059641442"/>
      <meta name="keywords" content="gelateria,caraibi,gasparini massimo,gelato,gelati,carpi,nuova ponente,
          coppa,cono gelato,coni gelato,torta gelato,torta,torte,semifreddi,semifreddo,gusti gelato,gusto,
           cialda,ice cream,granite,granita,dolci,dolce"/>
      <html lang="it"/>
    </Helmet>
    <header id="header">
      <h1>404 - Non trovato</h1>
      <img src={img_404} alt="404 not found"/>
      <p id="not-found">Questa pagina non esiste <span role="img" aria-label="sad face">😢</span></p>
    </header>
  </Layout>
)

export default NotFoundPage
