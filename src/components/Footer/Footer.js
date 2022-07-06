import React from 'react';
import './Footer.css';
import footer from '../../img/FOOTER BACKGROUND.png';
import tech_img from '../../img/HEIGHT.png';
import getInTouch from '../../img/Rectangle 21.svg';
import facebook from '../../img/facebook.png';
import linkedin from '../../img/linkedin.png';
import youtube from '../../img/Youtube.png';
import ur_logo from '../../img/UR Logo.png';

export const Footer = () => {
  return (
    <>
    <img className="footer_img" src={footer} alt="UR_footer_img" id='footer_img'/>
    <div className="tech_spec_container">
      <div className='table_container'>
        <div className="row_title">
          <div className="col_title">
            Technical specifications
          </div>
        </div>
        <div className="row">
          <div className="col_characteristic">
            <p>Dimensions (cm):</p>
          </div>
          <div className="col_specifications">
            <p>W92 x L72 x H152</p>
          </div>
        </div>
            
        <div className="row">
          <div className="col_characteristic">
            <p>Working width (cm):</p>
          </div>
          <div className="col_specifications">
            <p>70</p>
          </div>
        </div>
           
        <div className="row">
          <div className="col_characteristic">
            <p>Maximum speed (m/s):</p>
          </div>
          <div className="col_specifications">
            <p>0,3–1</p>
          </div>
        </div>

        <div className="row">
          <div className="col_characteristic">
            <p>Area coverage (m2):</p>
          </div>
          <div className="col_specifications">
            <p>2600</p>
          </div>
        </div>

        <div className="row">
          <div className="col_characteristic">
            <p>Total Weight (kg):</p>
          </div>
          <div className="col_specifications">
            <p>150 (without water)</p>
          </div>
        </div>

        <div className="row">
          <div className="col_characteristic">
            <p>Operating Time (hrs):</p>
          </div>
          <div className="col_specifications">
            <p>up to 8</p>
          </div>
        </div>
          
        <div className="row">
          <div className="col_characteristic">
            <p>Battery Charging time (hrs):</p>
          </div>
          <div className="col_specifications">
            <p>up to 6</p>
          </div>
        </div>

        <div className="row">
          <div className="col_characteristic">
            <p>Charging Voltage:</p>
          </div>
          <div className="col_specifications">
            <p> 230 VAC, 50Hz</p>
          </div>
        </div>
      </div>
         
      <div className='img_tech_spec'>
        <img className="tech_img" src={tech_img} alt="UR_tech_img" id='tech_img'/>
      </div>
    </div>

    <div className='getInTouch_container'>
      <div className='img_container'>
      <img className="getInTouch_img" src={getInTouch} alt="UR_getInTouch" id='getInTouch_img'/>
      </div>
      <div className='contactUs'>
        <p>Schedule a call with our sales manager</p>
      </div>
      <button className='buttonContact' type='button'>CONTACT US</button>
    </div>

    <div className='footer_container'>
        <div class="row-4">
          <div class="col-4-logo">
            <img className="logo" src={ur_logo} alt="UR_Logo" id='ur_logo'/>
          </div>
          <div class="col-4">Products</div>
          <div class="col-4">Company</div>
          <div class="col-4">Support</div>
        </div>
        <div class="row-5">
          <div class="col-5-logo">
            <p>HQ:</p>
            <p>Citybridge House,</p> 
            <p>57 Southwark Street,</p>
            <p>London SE1 1RU,</p> 
            <p>United Kingdom info@unitedrobots.co</p>
          </div>
          <div class="col-5-logo">
            <p>R&D Office:</p>
            <p>  Prymasa Tysiąclecia 46, </p>
            <p>01-242 Warszawa, </p>
            <p>Poland</p>
          </div>
          <div class="col-5">
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
          
          <div class="col-5">
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
          
          <div class="col-5">
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
        <div class="row-2">
          <div class="col-2">
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
          <div class="col-2-copyright">
          Copyright United Robots Ltd. 2016-2021. All right reserved.
          </div>
        </div>
    </div>
    </>
  )
}
