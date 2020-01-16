import React from 'react'
import Scrollspy from 'react-scrollspy'
import Scroll from './Scroll'
import logo from "../assets/images/logo.png";
import {Link} from "gatsby";

class Nav extends React.Component {
  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  render() {
    let sticky_menu_html = this.props.scrollspyitems.map((item) => {
        return <li className="visible-sticky">
          <Scroll type="id" element={item.element}>
            <a href="#">{item.title}</a>
          </Scroll>
        </li>
      }
    )

    let scrollspyitemslist = this.props.scrollspyitems.map((item) => {
        return item.element
      }
    )

    return (
      <nav id="nav" className={this.props.sticky ? 'alt' : ''}>
        <ul>
          <li className={this.props.current_page === 'homepage' ? 'visible-top is-active' : 'visible-top'}>
            <Link to="/">Homepage</Link>
          </li>
          <li className={this.props.current_page === 'prodotti' ? 'visible-top is-active' : 'visible-top'}>
            <Link to="/prodotti">I nostri prodotti</Link>
          </li>
          <li className={this.props.current_page === 'creagelato' ? 'visible-top is-active' : 'visible-top'}>
            <Link to="/creagelato">Crea il tuo gelato</Link>
          </li>
        </ul>
        {/* ----------------------------------------------------------------------------- */}

        <Scrollspy items={['logo-img'].concat(scrollspyitemslist)} currentClassName="is-active" offset={-300}>
          <li className="visible-sticky visible-sticky-logo"> {/* --- IMG always present in sticky menu --- */}
            <a onClick={() => this.scrollToTop()}>
              <img src={logo} alt="logo gelateria caraibi" id="logo-img-list"/>
            </a>
          </li>
          {sticky_menu_html}

        </Scrollspy>
      </nav>
    )
  }
}

export default Nav
