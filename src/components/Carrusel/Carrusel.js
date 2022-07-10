import React from 'react'
import Slider from "react-slick";
import vector1 from '../../img/Vectcarruselor.png';
import vector2 from '../../img/Vector2.png';
import vector3 from '../../img/Vector3.png';
import './Carrusel.css';


export const Carrusel = () => {

  const NextArrow = () => {
  console.log('next')
  
  };
  
  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    dots: true
    };
    

  return (
    <div className='Carrusel'>
      <Slider {...settings}>
      <div className='card-container'>
        <div className='card'>
          <div className='card_img'>
            <img className="vector" src={vector1} alt="UR_vector1" id='vector1'/>
          </div>
          <div className='card_title'>
            <p>Route planning</p>
          </div>
          <div className='card_description'>
            <p>Intelligent route planning and automatic re-mapping to avoid obstacles.</p>
          </div>
            <button className='button_card' onClick={() => NextArrow()}>NEXT</button>
            
        </div>
      </div>

      <div className='card-container'>
        <div className='card'>
          <div className='card_img'>
            <img className="vector" src={vector2} alt="UR_vector1" id='vector2'/>

          </div>
          <div className='card_title'>
            <p>Autonomously clean floors</p>
          </div>
          <div className='card_description'>
            <p>Ability to autonomously clean floors following pre-mapped routes.</p>
          </div>
          <button className='button_card' type='button'>NEXT</button>
        </div>
      </div>

      <div className='card-container'>
        <div className='card'>
          <div className='card_img'>
            <img className="vector" src={vector3} alt="UR_vector1" id='vector3'/>
          </div>
          <div className='card_title'>
            <p>Without human supervision.</p>
          </div>
          <div className='card_description'>
            <p>Execution of tasks without human supervision.</p>
          </div>
          <button className='button_card' type='button'>NEXT</button>
        </div>
      </div>

      <div className='card-container'>
        <div className='card'>
          <div className='card_img'>
            <img className="vector" src={vector2} alt="UR_vector1" id='vector2'/>
          </div>
          <div className='card_title'>
            <p>Autonomously clean floors</p>
          </div>
          <div className='card_description'>
            <p>Ability to autonomously clean floors following pre-mapped routes.</p>
          </div>
          <button className='button_card' type='button'>NEXT</button>
        </div>
      </div>

      
      </Slider>
    </div>
  )
}
