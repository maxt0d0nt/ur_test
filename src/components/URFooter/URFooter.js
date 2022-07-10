import React from 'react';
import './URFooter.css';
import facebook from '../../img/facebook.png';
import linkedin from '../../img/linkedin.png';
import youtube from '../../img/Youtube.png';
import ur_logo from '../../img/UR Logo.png';

export const URFooter = () => {
  return (
    <>
                             
    <div className='footer_container'>
        <div className="row-4">
        <div className="col-4-logo">
            <img className="logo" src={ur_logo} alt="UR_Logo" id='ur_logo'/>
        </div>
        <div className="col-4">Products</div>
        <div className="col-4">Company</div>
        <div className="col-4">Support</div>
        </div>
        <div className="row-5">
        <div className="col-5-logo">
            <p>HQ:</p>
            <p>Citybridge House,</p> 
            <p>57 Southwark Street,</p>
            <p>London SE1 1RU,</p> 
            <p>United Kingdom info@unitedrobots.co</p>
        </div>
        <div className="col-5-logo">
            <p>R&D Office:</p>
            <p>  Prymasa Tysiąclecia 46, </p>
            <p>01-242 Warszawa, </p>
            <p>Poland</p>
        </div>
        <div className="col-5">
            <div className='productLink'>
            <a className="desinfectiantLink" href="/">UR\ UV-C DISINFECTANT</a>
            </div>

            <div className="productLink">
            <a className="carrierLink" href="/">UR\ CARRIER</a>
            </div>

            <div className="productLink">
            <a className="cleanerLink" href="/">UR\ CLEANER</a>
            </div>

            <div className="productLink">
            <a className="runnerLink" href="/">UR\ RUNNER</a>
            </div>
        </div>
        
        <div className="col-5">
            <div className='companyLink>'>
                <a className="newsLink" href="/">NEWS</a>
            </div>

            <div className='companyLink'>
                <a className="aboutLink" href="/">ABOUT US</a>
            </div>

            <div className='companyLink'>
                <a className="joinLink" href="/">JOIN US</a>
            </div>
        </div>
        
        <div className="col-5">
            <div className='supportLink'>
                <a className="knowledgeLink" href="/">KNOWLEDGE CENTER</a>
            </div>

            <div className='supportLink'>
                <a className="resourceLink" href="/">RESOURCES</a>
            </div>

            <div className='supportLink'>
                <a className="caseLink" href="/">CASE STUDIES</a>
            </div>

            <div className='supportLink'>
                <a className="supportLink" href="/">SUPPORT CENTER</a>
            </div>

            <div className='supportLink'>
                <a className="contactLink" href="/">CONTACT</a>
            </div>
        </div>
        </div>
        <div className="row-2">
        <div className="col-2">
            <div className='SocialtLink'>
                <a className="faceLink" href="/">
                <img className="imgFace" src={facebook} alt="UR_logo_facebook" id='imgFace'/>
                </a>
            </div>

            <div className='SocialtLink'>
                <a className="linkedinLink" href="/">
                <img className="imglinkedin" src={linkedin} alt="UR_logo_linkedin" id='imglinkedin'/>
                </a>
            </div>

            <div className='SocialtLink'>
                <a className="youtubeLink" href="/">
                <img className="imgyoutube" src={youtube} alt="UR_logo_youtube" id='imgyoutube'/>
                </a>
            </div>
        </div>
        <div className="col-2-copyright">
            Copyright United Robots Ltd. 2016-2021. All right reserved.
        </div>
        </div>
    </div>
    </>
  )
}
