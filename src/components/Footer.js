import React from 'react'
// import CookieConsent from "react-cookie-consent";

const Footer = props => (
  <footer id="footer">
    <section>
      <h2>Gelateria Caraibi</h2>
      <p>
        di Gasparini Massimo e Pivetti Marzia
      </p>
      <ul className="icons">
        <li>
          <a href="https://www.facebook.com/GelateriaCaraibiCarpi/" className="icon fa-facebook alt">
            <span className="label">Facebook</span>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/gelateriacaraibicarpi/" className="icon fa-instagram alt">
            <span className="label">Instagram</span>
          </a>
        </li>
      </ul>
    </section>
    <section>
      <dl className="alt">
        <dt>Indirizzo</dt>
        <dd><a href="https://goo.gl/maps/PqR6f35xjyeknL2K6">Via Nuova Ponente 5/F</a></dd>
        <dt>Telefono</dt>
        <dd><a href="tel:059641442">059 641442</a></dd>
        <dt>Email</dt>
        <dd>
          <a href="mailto:info@gelateriacaraibicarpi.it">info@gelateriacaraibicarpi.it</a>
        </dd>
      </dl>
    </section>
    <p className="copyright">
      Website by <a href="https://www.linkedin.com/in/nicologasparini/">Gasparini Nicolò</a>
    </p>

    {/*<CookieConsent*/}
    {/*  location="bottom"*/}
    {/*  buttonText="Accetta e prosegui"*/}
    {/*  enableDeclineButton={true}*/}
    {/*  declineButtonText="No, grazie"*/}
    {/*  acceptOnScroll={true}*/}
    {/*  cookieName="CookieConsentCaraibi"*/}
    {/*  onAccept={() => {*/}
    {/*    window.dataLayer.push({'event': 'cookie-consent'})*/}
    {/*  }}*/}
    {/*  disableStyles={true}*/}
    {/*  disableButtonStyles={true}*/}
    {/*  buttonClasses="cookie-btn-acc"*/}
    {/*  declineButtonClasses="cookie-btn-dec"*/}
    {/*  containerClasses="cookie-ctnr"*/}
    {/*  contentClasses="cookie-ctn">*/}
    {/*  Questo sito utilizza i cookie per migliorare l'esperienza dell'utente*/}
    {/*</CookieConsent>*/}

  </footer>
)

export default Footer
