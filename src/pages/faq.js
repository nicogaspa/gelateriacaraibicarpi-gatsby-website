import React from 'react'
import Layout from '../components/layout'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Seo from '../components/Seo'
import Booking from '../components/Booking'
import questions from '../data/faq.json'

const Faq = () => (
  <Layout>
    <Seo
      title="FAQ: prenotazioni, orari e ritiro | Gelateria Caraibi Carpi"
      description="Come prenotare torte, semifreddi, coni e coppette a Carpi. Scopri orari, chiusura invernale, ritiro in gelateria e servizio per aziende."
      pathname="/faq/"
    />
    <Header />
    <Nav current_page="faq" />
    <main id="main">
      <section className="main faq-list" aria-labelledby="faq-title">
        <h1 id="faq-title">Domande frequenti sulla Gelateria Caraibi</h1>
        <p>
          Le informazioni per organizzare la tua visita o prenotare le nostre
          creazioni artigianali.
        </p>
        {questions.map(({ id, question, answer }) => (
          <details key={id} id={id}>
            <summary>{question}</summary>
            <p>{answer}</p>
          </details>
        ))}
        <Booking />
      </section>
    </main>
  </Layout>
)

export default Faq
