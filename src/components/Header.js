import React from 'react'
import { Link } from 'gatsby'
import OptimizedImage from './OptimizedImage'

const Header = () => (
  <header id="header">
    <Link to="/" aria-label="Gelateria Caraibi, homepage">
      <OptimizedImage
        image="logo"
        alt="Gelateria Caraibi Carpi"
        id="logo-img"
        sizes="(max-width: 736px) 80vw, 480px"
        loading="eager"
        priority="high"
      />
    </Link>
  </header>
)

export default Header
