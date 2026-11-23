import React from 'react'
import business from '../data/business.json'

const Hours = () => (
  <div className="opening-hours">
    <p>
      <strong>Orari:</strong> {business.hours}.{' '}
      <strong>Chiuso il martedì.</strong>
    </p>
    <p>
      Si effettuano aperture straordinarie durante le festività: contatta la
      gelateria per conoscere i giorni e gli orari.
    </p>
    <p>
      <strong>Chiusura invernale da metà dicembre a metà febbraio.</strong>
    </p>
  </div>
)

export default Hours
