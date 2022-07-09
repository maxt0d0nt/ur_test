import React from 'react';
import feature from '../../img/Mask Group.png';
import floor from '../../img/FLOOR.png';
import furniture from '../../img/Frame.png';
import './Features.css';
import { Carrusel } from '../Carrusel/Carrusel'

export const Features = () => {
  return (
    <>
      
      <div className='features_container'>
          <img className="features_img" src={feature} alt="UR_feature_img" id='feature_img'/>
        <div className='features_img'>
          <img className="floor_img" src={floor} alt="UR_floor_img" id='floor_img'/>
        </div>
          <img className="furniture_img" src={furniture} alt="UR_furniture_img" id='furniture_img'/>
        <div className='carrusel-container'>
          < Carrusel />
        </div>
      </div>
    
        
        
       
    
    </>
    
  )
}
