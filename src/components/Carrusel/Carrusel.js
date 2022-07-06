import React, { useState } from 'react'
import Slider from "react-slick";
import card from '../../img/NewsCard.png'
import card1 from '../../img/NewsCard.png'
import card2 from '../../img/NewsCard.png'
import { FaArrowLeft } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa'
import './Carrusel.css';

const images = [card, card1, card2]

export const Carrusel = () => {

const NextArrow = ({onClick}) => {
    return (
        <div className='arrow next' onClick={onClick}>
            <FaArrowRight />
        </div>
    );
};

const PrevArrow = ({onClick}) => {
    return (
        <div className='arrow prev' onClick={onClick}>
            <FaArrowLeft />
        </div>
    );
};

const [imageIndex, setImageIndex] = useState(0);

const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 2,
    centerMOde: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
}

  return (
    <div className='Carrusel'>
    <Slider {...settings}>
        {images.map((img, idx) => (
            <div className={idx === imageIndex ? "slide activeSlide" : 'slide'}>
                <img src={img} alt={img} />
            </div>
        ))}
    </Slider>
    </div>
  )
}
