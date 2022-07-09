import React from 'react';
import tech_img from '../../img/HEIGHT.png';
import './Techspec.css'

export const Techspec = () => {
  return (
    <>
    <div className='TechSpecContainer'>
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
    </div>
    </>
  )
}
