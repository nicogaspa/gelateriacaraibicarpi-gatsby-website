import React from 'react'
import flavours from '../data/flavours.json'
import OptimizedImage from './OptimizedImage'

class BuildYourIceCream extends React.Component {
  flavours = flavours

  render() {
    let randoms = this.props.randICB
    const title1 = this.flavours[randoms[0]].title
    const desc1 = this.flavours[randoms[0]].desc
    const title2 = this.flavours[randoms[1]].title
    const desc2 = this.flavours[randoms[1]].desc
    const title3 = this.flavours[randoms[2]].title
    const desc3 = this.flavours[randoms[2]].desc

    return (
      <div>
        <div id="icb-flavour-inlines" aria-live="polite">
          <div className="flavour flavour1">
            <h3>{title1}</h3>
            <p>{desc1}</p>
          </div>
          <div className="flavour flavour2">
            <h3>{title2}</h3>
            <p>{desc2}</p>
          </div>
          <div className="flavour flavour3">
            <h3>{title3}</h3>
            <p>{desc3}</p>
          </div>
        </div>
        <div id="icb-container">
          <OptimizedImage
            className="level level0"
            image="buildyouricecream/0-min"
            alt=""
            sizes="288px"
            loading="eager"
          />
          <OptimizedImage
            className="level level1"
            image={`buildyouricecream/1_${randoms[0]}-min`}
            alt=""
            sizes="288px"
            loading="eager"
          />
          <div className="flavour flavour1">
            <h3>{title1}</h3>
            <p>{desc1}</p>
          </div>
          <OptimizedImage
            className="level level2"
            image={`buildyouricecream/2_${randoms[1]}-min`}
            alt=""
            sizes="288px"
            loading="eager"
          />
          <div className="flavour flavour2">
            <h3>{title2}</h3>
            <p>{desc2}</p>
          </div>
          <OptimizedImage
            className="level level3"
            image={`buildyouricecream/3_${randoms[2]}-min`}
            alt=""
            sizes="288px"
            loading="eager"
          />
          <div className="flavour flavour3">
            <h3>{title3}</h3>
            <p>{desc3}</p>
          </div>
          <OptimizedImage
            className="level level4"
            image="buildyouricecream/4-min"
            alt=""
            sizes="288px"
            loading="eager"
          />
          <OptimizedImage
            className="level level5"
            image="buildyouricecream/5-min"
            alt=""
            sizes="288px"
            loading="eager"
          />
        </div>
      </div>
    )
  }
}

export default BuildYourIceCream
