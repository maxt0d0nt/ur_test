import React from 'react';
import './Footer.css';
import footer from '../../img/FOOTER BACKGROUND.png';
import { Techspec } from '../Techspec/Techspec';
import { GetInTouch } from '../GetInTouch/GetInTouch';
import { URFooter } from '../URFooter/URFooter';

export const Footer = () => {
  return (
    <>
    <div className='MainFooterContainer'>
      <img className="footer_img" src={footer} alt="UR_footer_img" id='footer_img'/>
        < Techspec />
        < GetInTouch />
        < URFooter />
    </div>
    </>
  )
}
