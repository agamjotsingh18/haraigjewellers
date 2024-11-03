// BigCarousel.js
import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './BigCarousel.css';
import Festival from "../assets/festival.png";
import Necklace from "../assets/necklace.png";
import arcof from "../assets/arcof.png";
import one from "../assets/11.png";
import two from "../assets/22.png";
import three from "../assets/33.png";
import four from "../assets/44.png";


const BigCarousel = () => {
    const [animate, setAnimate] = useState(false);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    arrows: true,
    adaptiveHeight: false,  // Prevent height adjustment
    beforeChange: () => setAnimate(false),  // Remove animation class before the slide changes
    afterChange: () => setAnimate(true),    // Add animation class after the slide has changed  

};

  return (
    <div className="big-carousel-container">
      <Slider {...settings}>
        {/* Slide 1 */}
        <div className="carousel-slide">
          <img src={Festival} alt="Jewelry 1" className="carousel-image" />
        </div>
        <div className="carousel-slide">
          <img src={Necklace} alt="Jewelry 2" className="carousel-image" />
        </div>
        <div className="carousel-slide">
          <img src={arcof} alt="Jewelry 3" className="carousel-image" />
        </div>
        <div className="carousel-slide">
          <img src={one} alt="Jewelry 4" className="carousel-image" />
        </div>
        <div className="carousel-slide">
          <img src={two} alt="Jewelry 5" className="carousel-image" />
        </div>
        <div className="carousel-slide">
          <img src={three} alt="Jewelry 6" className="carousel-image" />
        </div>
        <div className="carousel-slide">
          <img src={four} alt="Jewelry 7" className="carousel-image" />
        </div>
      </Slider>
      <div className="carousel-content">
            <h2>The new dream jewellery</h2>
            <p>Your desired collection is here.</p>
            <button className="shop-button">Start Shopping</button>
          </div>
    </div>
  );
};

export default BigCarousel;
