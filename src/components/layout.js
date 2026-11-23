import React from 'react'
import '../assets/scss/main.scss'
import Footer from './Footer'

const Template = ({ children }) => (
  <div className="body">
    <a className="skip-link" href="#main">
      Vai al contenuto
    </a>
    <div id="wrapper">
      {children}
      <Footer />
    </div>
  </div>
)

export default Template
