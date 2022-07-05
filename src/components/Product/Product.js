import React from 'react';
import './Product.css';
import stamp from '../../img/Stamp.png';
import product1 from '../../img/product.png';
import shadow1 from '../../img/Ellipse 40.png';
import shadow2 from '../../img/Ellipse 51.png';
export const Product = () => {
  return (
    <>
    <div className='product_container'>
      <div className='articule'>
        <div className='title_product'>
          <h1>Smarter, safer, healthier cleaning</h1>
        </div>
        <div className='sub_title_product'>
          <h3>with autonomous UR Cleaner</h3>
        </div>
        <div className='charac'>
          <p>UR Cleaner offers impressive manoeuvrability, durability and scalability of performance that is crucial to any organisation seeking cost efficiencies and smooth optimisation of processes. UR Cleaner presents a viable solution to clients looking for more efficient service delivery. Large facilities? Commercial spaces? Nothing is impossible for UR Cleaner.</p>
        </div>
      </div>
      <div className='img_product'>
        <img className="img_product1" src={product1} alt="UR_product1" id='product1'/>
        <img className="shadow1" src={shadow1} alt="UR_product1" id='shadow1'/>
        <img className="shadow2" src={shadow2} alt="UR_product1" id='shadow2'/>
        </div>
        <div className='stamp'>
        <img className="stamp_logo" src={stamp} alt="UR_stamp" id='stamp'/>
        </div>
    </div>
    </>
  )
}

