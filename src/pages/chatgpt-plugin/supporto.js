import React from 'react'
import PluginPage from '../../components/PluginPage'

const Support = () => (
  <PluginPage
    title="Supporto al plugin Gelateria Caraibi Carpi"
    description="Assistenza tecnica e segnalazioni sul plugin Gelateria Caraibi Carpi. Referente Nicolò Gasparini, nicologasparini94@gmail.com."
    pathname="/chatgpt-plugin/supporto/"
  >
    <h2>Assistenza tecnica</h2>
    <p>
      Per problemi di funzionamento, informazioni inesatte o domande sul plugin,
      il referente è <strong>Nicolò Gasparini</strong>. Scrivi a{' '}
      <a href="mailto:nicologasparini94@gmail.com">
        nicologasparini94@gmail.com
      </a>
      .
    </p>
    <p>
      Descrivi il problema e indica la domanda che lo ha causato, la risposta
      ricevuta e, se utile, la data e la piattaforma utilizzata. Prima di
      inviare eventuali schermate, oscura dati personali e informazioni di altre
      persone. Non inviare password, codici di accesso, dati di pagamento o dati
      sanitari.
    </p>
    <h2>Prenotazioni e informazioni sui prodotti</h2>
    <p>
      Per prezzi, disponibilità, ingredienti, allergeni, orari straordinari e
      prenotazioni, contatta direttamente la gelateria al{' '}
      <a href="tel:+39059641442">059 641442</a>, su{' '}
      <a href="https://wa.me/39059641442">WhatsApp</a> oppure in via Nuova
      Ponente 5/F a Carpi. Il contatto tecnico del plugin non è un canale di
      prenotazione.
    </p>
    <h2>Privacy</h2>
    <p>
      Per richieste relative ai dati personali contenuti nelle comunicazioni di
      assistenza, usa lo stesso contatto tecnico, specificando la tua richiesta.
      Non è necessario inviare la cronologia completa delle tue conversazioni.
    </p>
  </PluginPage>
)

export default Support
