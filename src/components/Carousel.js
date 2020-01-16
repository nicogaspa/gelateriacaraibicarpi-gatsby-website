import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import {Carousel} from "react-responsive-carousel"
import slide1 from '../assets/images/slides/13.jpg'
import slide2 from '../assets/images/slides/12.jpg'
import slide3 from '../assets/images/slides/10.jpg'
import slide4 from '../assets/images/slides/9.jpg'
import slide5 from '../assets/images/slides/11.jpg'

const CustomCarousel = props => (
  <Carousel infiniteLoop autoPlay showStatus={false} showThumbs={false} transitionTime={1200}>
    <div>
      <img src={slide1} alt=""/>
      {/*<p className="legend">Legend 1</p>*/}
    </div>
    <div>
      <img src={slide2} alt=""/>
    </div>
    <div>
      <img src={slide3} alt=""/>
    </div>
    <div>
      <img src={slide4} alt=""/>
    </div>
    <div>
      <img src={slide5} alt=""/>
    </div>
  </Carousel>
)

export default CustomCarousel
