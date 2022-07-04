import React, { useState } from 'react';
import './Navbar.css';
import ur_logo from '../../img/UR Logo.png';


export const Navbar = () => {

  const [header, setHeader] = useState(false)

  let changebackgrond = () => {
    if (window.scrollY >= 5) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

window.addEventListener('scroll', changebackgrond);

  return (
    <>
   
      < div className={header ? 'header active' : 'header'}>
        <a className='ur_logo' href='/'>
        <img className="logo" src={ur_logo} alt="UR_Logo" id='ur_logo'/>
        </a>
          
        <ul className="navbar-container">
              
          <li className="navitem">
          <a className="navlink" href="#">PRODUCT</a>
          </li>

          <li className="navitem">
          <a className="nav-link" href="#">COMPANY</a>
          </li>

          <li className="navitem">
          <a className="navlink" href="#">SUPPORT</a>
          </li>

          <li className="navitem">
          <a className="navlink" href="#">CONTACT</a>
          </li>
        </ul>
      </div>
    
  
    </>
  )
};
