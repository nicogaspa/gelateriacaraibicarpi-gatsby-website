import React from 'react'
import { Link } from 'gatsby'
import Layout from './layout'
import Header from './Header'
import Nav from './Nav'
import Seo from './Seo'

const documents = [
  ['/', 'Sito della gelateria'],
  ['/chatgpt-plugin/supporto/', 'Supporto'],
  ['/chatgpt-plugin/privacy/', 'Privacy del plugin'],
  ['/chatgpt-plugin/termini/', 'Termini di utilizzo'],
]

const PluginPage = ({ title, description, pathname, children }) => (
  <Layout>
    <Seo
      title={`${title} | Gelateria Caraibi Carpi`}
      description={description}
      pathname={pathname}
      noindex
    />
    <Header />
    <Nav />
    <main id="main" tabIndex="-1">
      <section className="main">
        <h1>{title}</h1>
        <nav aria-label="Documenti del plugin">
          <ul>
            {documents.map(([to, label]) => (
              <li key={to}>
                <Link
                  to={to}
                  aria-current={pathname === to ? 'page' : undefined}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        {children}
      </section>
    </main>
  </Layout>
)

export default PluginPage
