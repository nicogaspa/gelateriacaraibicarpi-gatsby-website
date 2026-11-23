import React from 'react'
import { Link } from 'gatsby'

const pages = [
  ['/', 'Homepage', 'homepage'],
  ['/prodotti/', 'Prodotti', 'prodotti'],
  ['/torte-gelato-carpi/', 'Torte su misura', 'torte'],
  ['/gusti/', 'Gusti', 'gusti'],
  ['/creagelato/', 'Crea il tuo gelato', 'creagelato'],
  ['/faq/', 'FAQ', 'faq'],
]

const Nav = ({ current_page }) => (
  <nav id="nav" className="site-nav" aria-label="Navigazione principale">
    <ul>
      {pages.map(([to, label, key]) => (
        <li
          key={key}
          className={current_page === key ? 'is-active' : undefined}
        >
          <Link
            to={to}
            aria-current={current_page === key ? 'page' : undefined}
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
)

export default Nav
