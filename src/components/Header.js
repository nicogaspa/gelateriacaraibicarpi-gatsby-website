import React from 'react'
import logo from "../assets/images/logo.png";
import {Link} from "gatsby";

const Header = (props) => (
  <header id="header">
    <Link to="/">
      <img src={logo} alt="logo gelateria caraibi" id="logo-img"/>
    </Link>
  </header>
)

export default Header
