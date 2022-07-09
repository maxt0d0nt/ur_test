import React from 'react';
import './GetInTouch.css';
import getInTouch from '../../img/Rectangle 21.svg';

export const GetInTouch = () => {
  return (
    <>
    <div className='getInTouch_container'>
        <div className='img_container'>
            <img className="getInTouch_img" src={getInTouch} alt="UR_getInTouch" id='getInTouch_img'/>
                <div className='contactUs'>
                <p>Schedule a call with our sales manager</p>
                </div>
                <button className='buttonContact' type='button'>CONTACT US</button>
        </div>
        
    </div>
    
    </>
  )
}
