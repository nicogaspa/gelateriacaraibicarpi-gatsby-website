import React from 'react'
import business from '../data/business.json'

const Booking = () => (
  <div className="booking">
    <p>
      Per prenotare e conoscere i prezzi, chiamaci al{' '}
      <a href={business.phoneUrl}>{business.phoneDisplay}</a>, passa in
      gelateria in via Nuova Ponente 5/F a Carpi oppure contattaci su WhatsApp.
      Tutte le prenotazioni prevedono il ritiro in gelateria.
    </p>
    <ul className="actions booking-actions">
      <li>
        <a className="button special" href={business.phoneUrl}>
          Chiama la gelateria
        </a>
      </li>
      <li>
        <a className="button" href={business.whatsappUrl}>
          Prenota su WhatsApp
        </a>
      </li>
      <li>
        <a className="button" href={business.mapsUrl}>
          Come raggiungerci
        </a>
      </li>
    </ul>
  </div>
)

export default Booking
