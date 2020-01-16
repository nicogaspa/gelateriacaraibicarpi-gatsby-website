import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import level0 from '../assets/images/buildyouricecream/0-min.png'
import level4 from '../assets/images/buildyouricecream/4-min.png'
import level5 from '../assets/images/buildyouricecream/5-min.png'


class BuildYourIceCream extends React.Component {
  flavours = {
    0: {
      "title": "",
      "desc": ""
    },
    1: {
      "title": "Menta",
      "desc": "Fresco sapore con gocce di cioccolato"
    },
    2: {
      "title": "Pistacchio",
      "desc": "Verde delizia"
    },
    3: {
      "title": "Cookies Biscotto",
      "desc": "La dolcezza del biscotto fatta gelato"
    },
    4: {
      "title": "Frutti di Bosco",
      "desc": "Fragoline, More e Lamponi"
    },
    5: {
      "title": "Fragola",
      "desc": "Il dolce e classico gusto di frutta"
    },
    6: {
      "title": "Banana",
      "desc": "Provala con il cioccolato"
    },
    7: {
      "title": "Pesca",
      "desc": "Un nettare fruttato"
    },
    8: {
      "title": "Melone",
      "desc": "Freschezza estiva!"
    },
    9: {
      "title": "Crema Catalana",
      "desc": "una crema caramellata con dolci frutti di bosco"
    },
    10: {
      "title": "Crema",
      "desc": "Il classico vanigliato"
    },
    11: {
      "title": "Fiordilatte",
      "desc": "Perfetto per qualsiasi abbinamento"
    },
    12: {
      "title": "Stracciatella",
      "desc": "Senti che crok questi pezzi di cioccolata!"
    },
    13: {
      "title": "Yogurt",
      "desc": "Lasciati catturare dal sapore"
    },
    14: {
      "title": "Yogurt ai Frutti di bosco",
      "desc": "Tutto il sapore dello yogurt con un gusto in più"
    },
    15: {
      "title": "Amarena",
      "desc": "Solo amarene Fabbri"
    },
    16: {
      "title": "Kinder biscotto",
      "desc": "Il migliore! Dolce cioccolato bianco variegato"
    },
    17: {
      "title": "Cocco",
      "desc": "Cocco bello!!!"
    },
    18: {
      "title": "Limone",
      "desc": "Una certezza quando si parla di frutta"
    },
    19: {
      "title": "Bacio",
      "desc": "Gianduia con una croccante sorpresa di nocciole intere"
    },
    20: {
      "title": "Nutella",
      "desc": "Serve dire altro?"
    },
    21: {
      "title": "Caffè",
      "desc": "Per un po' di carica in più!"
    },
    22: {
      "title": "Cioccolato",
      "desc": "Il preferito di tutti, da sempre"
    },
    23: {
      "title": "Cioccolato Fondente",
      "desc": "Quando il cioccolato normale non è abbastanza"
    },
    24: {
      "title": "Nocciola",
      "desc": "Si scioglie in bocca, buonissimo!"
    },
    25: {
      "title": "Croccantino",
      "desc": "Lasciati cullare dalla tradizione"
    },
    26: {
      "title": "Mascarpone e Nutella",
      "desc": "Te lo meriti"
    }
  }


  render() {

    let randoms = this.props.randICB
    const level1 = require('../assets/images/buildyouricecream/1_' + randoms[0] + '-min.png')
    const level2 = require('../assets/images/buildyouricecream/2_' + randoms[1] + '-min.png')
    const level3 = require('../assets/images/buildyouricecream/3_' + randoms[2] + '-min.png')
    const title1 = this.flavours[randoms[0]].title
    const desc1 = this.flavours[randoms[0]].desc
    const title2 = this.flavours[randoms[1]].title
    const desc2 = this.flavours[randoms[1]].desc
    const title3 = this.flavours[randoms[2]].title
    const desc3 = this.flavours[randoms[2]].desc

    return (
      <div>
        <div id="icb-flavour-inlines">
          <div className="flavour flavour1">
            <h3>{title1}</h3><p>{desc1}</p>
          </div>
          <div className="flavour flavour2">
            <h3>{title2}</h3><p>{desc2}</p>
          </div>
          <div className="flavour flavour3">
            <h3>{title3}</h3><p>{desc3}</p>
          </div>
        </div>
        <div id="icb-container">
          <img className="level level0" src={level0} alt=""/>
          <img className="level level1" src={level1} alt=""/>
          <div className="flavour flavour1">
            <h3>{title1}</h3><p>{desc1}</p>
          </div>
          <img className="level level2" src={level2} alt=""/>
          <div className="flavour flavour2">
            <h3>{title2}</h3><p>{desc2}</p>
          </div>
          <img className="level level3" src={level3} alt=""/>
          <div className="flavour flavour3">
            <h3>{title3}</h3><p>{desc3}</p>
          </div>
          <img className="level level4" src={level4} alt=""/>
          <img className="level level5" src={level5} alt=""/>
        </div>
      </div>

    )
  }
}

export default BuildYourIceCream
