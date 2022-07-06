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
    slidesToShow: 3,
    centerMOde: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
}

  return (
    <div className='Carrusel'>
    <Slider {...settings}>
    <div className='card-container'>
      <div className='card max'>
        <div className='card_img max'>
          
        </div>

        <div className='card_title'>
          <p>Route planning</p>
        </div>

        <div className='card_description'>
          <p>Intelligent route planning and automatic re-mapping to avoid obstacles.</p>
        </div>
      </div>
    </div>

    <div className='card-container'>
      <div className='card max'>
        <div className='card_img max'>
          
        </div>

        <div className='card_title'>
          <p>Autonomously clean floors</p>
        </div>

        <div className='card_description'>
          <p>Ability to autonomously clean floors following pre-mapped routes.</p>
        </div>
      </div>
    </div>

    <div className='card-container'>
      <div className='card max'>
        <div className='card_img max'>
          
        </div>

        <div className='card_title'>
          <p>Without human supervision.</p>
        </div>

        <div className='card_description'>
          <p>Execution of tasks without human supervision.</p>
        </div>
      </div>
    </div>

    <div className='card-container'>
      <div className='card max'>
        <div className='card_img max'>
          
        </div>

        <div className='card_title'>
          <p>Route planning</p>
        </div>

        <div className='card_description'>
          <p>Intelligent route planning and automatic re-mapping to avoid obstacles.</p>
        </div>
      </div>
    </div>
    </Slider>
    </div>
  )
}
