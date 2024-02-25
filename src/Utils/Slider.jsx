import { Carousel } from "rsuite";
import PropTypes from 'prop-types'

import "./slider.css";
const Slider = ({sliderImage}) => {
  return (
    <><Carousel autoplay className="custom-slider slider-area">
    {sliderImage.map((item, index) => {
      return (
        <picture key={index}>
          <source media="(max-width: 600px)" srcSet={item.minSrc} />
          <source media="(min-width: 600px)" srcSet={item.maxSrc} />
          <img src={item.src} alt="adda college" />
        </picture>
      );
    })}
    </Carousel>
    </>
  )
}

export default Slider
Slider.propTypes = {
  sliderImage: PropTypes.array.isRequired
}