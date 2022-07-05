import React from 'react';
import bk from '../../img/darkbackground.png';
import './Advantage.css'
import product2 from '../../img/producto2.png';
import big_shadow from '../../img/backshadow.png';

export const Advantage = () => {
  return (
    <>
    <div className='advantage-container'>
    <img className="darkbackground" src={bk} alt="UR_product1" id='produ1'/>
        <div className='advantage_items'>
            <div className='advantage_title'>
                <h1>Explore the advantages of UR\ UV-C Disinfectant</h1>
            </div>
            <ul className='advantage_list'>

                <li className='advantage_list_item'>
                    Cleans floors without human supervision
                    
                        <li className='item_list'>loren ipsum</li>
                
                </li>

                <li className='advantage_list_item'>
                    Intelligently and safely avoids obstacles
                    
                        <li className='item_list'>the robot moves safely in spaces with glass, balustrades, stairs, carpets, that it is possible to exclude from the map objects that are temporarily in space without the need to re-map. They do not require additional infrastructure — markers, tapes, markers, etc. Ultimately, the customer / distributor will be able to do the first mapping themselves. Changing the environment does not cause the robot to be relocated, the robot “doesn’t get stupid”.</li>
                    
                </li>

                <li className='advantage_list_item'>
                    Provides the ability to adjust cleaning settings and parameters
                        <li className='item_list'>loren ipsum</li>
                </li>

                <li className='advantage_list_item'>
                    Fast to deploy, easy to use and controllable if necessary 
                    
                        <li className='item_list'>loren ipsum</li>
                    
                </li>
            </ul>
        </div>

        <div className='big_img_product'>
        <img className="big_img_product1" src={product2} alt="UR_big_product" id='big_product'/>
        </div>

        <div className='backshadow'></div>
    </div>
    <div className='backshadow2'></div>
    <div className='backshadow3'></div>
    </>
  )
}
