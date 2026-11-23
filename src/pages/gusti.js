import React from 'react'
import Layout from '../components/layout'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Seo from '../components/Seo'
import Booking from '../components/Booking'
import flavours from '../data/flavours.json'

const groups = [
  ['Gusti Classici', [1, 2, 10, 12, 11, 13, 14, 20, 19, 22, 21, 24]],
  ['Gusti di Frutta', [4, 5, 8, 7, 6, 15, 17, 18]],
  ['Gusti Speciali', [3, 9, 16, 23, 25, 26]],
]

const Flavours = () => (
  <Layout>
    <Seo
      title="Gusti di gelato artigianale | Gelateria Caraibi Carpi"
      description="Creme, gusti di frutta e proposte speciali: scopri il gelato artigianale della Gelateria Caraibi a Carpi, preparato con ingredienti genuini."
      pathname="/gusti/"
    />
    <Header />
    <Nav current_page="gusti" />
    <main id="main">
      <section className="main" id="gusti">
        <h1>I nostri gusti di gelato artigianale</h1>
        <p>
          Nella nostra gelateria troverai tantissimi gusti, dai gusti di frutta,
          alle creme, agli yogurt fino alle proposte per intolleranze al
          lattosio. Ci piace sperimentare e trovare sempre nuovi gusti che
          stuzzichino la vostra curiosità, quindi oltre a questi potrai trovare
          sempre qualche dolce novità!
        </p>
        <p>
          Prepariamo il nostro gelato artigianale con ingredienti genuini. Per
          conoscere la disponibilità del giorno e gli ingredienti di ogni gusto,
          contatta la gelateria; in caso di allergie o intolleranze chiedici
          informazioni prima di ordinare.
        </p>
        <div className="flavour-groups">
          {groups.map(([title, ids]) => (
            <section key={title}>
              <h2>{title}</h2>
              <ul>
                {ids.map(id => (
                  <li key={id}>{flavours[id].title}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>
        <Booking />
      </section>
    </main>
  </Layout>
)

export default Flavours
