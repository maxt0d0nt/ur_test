import React from 'react';
import "./Main.css";
import Banner1 from '../../img/Banner1.png';


export const Main = () => {
  return (
    <>
    <div className='section_main'>
    <img className="Banner1" src={Banner1} alt="UR_Banner" id='Banner1'/>
      <div className='title'>
        <div className='title_main'>
          <h1>Discover the autonomous UR/UV-C Disinfectant</h1>
        </div>
          <div className='sub'>
              <div className='sub_title'>
                <h2>Made to clean vast spaces smarter</h2>
                
                  <p>UR Cleaner robot is a fully autonomous cleaning robot that can map surrounding areas, safely plan cleaning routes and navigate in public.</p>
                  <button className='buttonMain' type="button"> READ MORE</button>
              </div>
          </div>
      </div>
   
    
    
    <div className='image1'></div>
    <div className='imagen2'></div>
    </div>
    </>
  )
}
