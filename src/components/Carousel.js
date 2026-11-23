import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import OptimizedImage from './OptimizedImage'

const slides = ['13', '12', '10', '9', '11']
const CustomCarousel = () => (
  <Carousel
    showStatus={false}
    showThumbs={false}
    autoPlay={false}
    swipeable
    emulateTouch
    labels={{
      leftArrow: 'Foto precedente',
      rightArrow: 'Foto successiva',
      item: 'Foto delle nostre creazioni',
    }}
  >
    {slides.map((slide, index) => (
      <div key={slide}>
        <OptimizedImage
          image={`slides/${slide}`}
          alt={`Una delle creazioni artigianali della Gelateria Caraibi, foto ${index +
            1}`}
          sizes="(max-width: 736px) 88vw, 900px"
          priority={index > 0 ? 'low' : undefined}
        />
      </div>
    ))}
  </Carousel>
)

export default CustomCarousel
