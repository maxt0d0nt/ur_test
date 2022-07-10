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

  let slides = [
    {
      title: "Route Plannning",
      description: "Intelligent route planning and automatic re-mapping to avoid obstacles.",
      src: vector1,
      id: 1
    },
    {
      title: "Autonomously clean floors",
      description: "Ability to autonomously clean floors following pre-mapped routes.",
      src: vector2,
      id: 2
    },
    {
      title: "Without human supervision.",
      description: "Execution of tasks without human supervision.",
      src: vector3,
      id: 3
    },
    {
      title: "Autonomously clean floors",
      description: "Ability to autonomously clean floors following pre-mapped routes.",
      src: vector2,
      id: 2
    }
  ];
  
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
        {slides.map((slide, i) => {
          return(
            <div className='card-container'>
              <div className='card'>
                <div className='card_img'>
                  <img className="vector" src={slide.src} alt={"UR_vector" + Number(i) + 1} id={"vector" + slide.id}/>
                </div>
                <div className='card_title'>
                  <p>{slide.title}</p>
                </div>
                <div className='card_description'>
                  <p>{slide.description}</p>
                </div>
                <button className='button_card' type='button'>NEXT</button>
              </div>
            </div>          
          )        
        })}      
      </Slider>
    </div>
  )
}
