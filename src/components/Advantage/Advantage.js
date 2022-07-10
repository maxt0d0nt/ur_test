import React, { useState } from 'react';
import bk from '../../img/darkbackground.png';
import { FaAngleDown } from 'react-icons/fa';
import { FaAngleUp } from 'react-icons/fa';
import product2 from '../../img/producto2.png';
import imgBG1 from '../../img/Rectangle25A.png';
import imgBG2 from '../../img/Rectangle25B.png';
import './Advantage.css'

const data = [
    { question: 'Cleans floors without human supervision',
    answer: 'Lorem ipsum dolor sit amet. Nam fugit debitis eum vitae consequatur aut ratione reiciendis et vitae galisum. Aut facere vitae aut dignissimos sequi aut aspernatur omnis est corporis officia non temporibus quia? Et rerum illum ut quis galisum est deleniti eaque id nulla distinctio aut ipsa unde.'
    }, 
    { question: 'Intelligently & safely avoids obstacles',
        answer: 'the robot moves safely in spaces with glass, balustrades, stairs, carpets, that it is possible to exclude from the map objects that are temporarily in space without the need to re-map. They do not require additional infrastructure — markers, tapes, markers, etc. Ultimately, the customer / distributor will be able to do the first mapping themselves. Changing the environment does not cause the robot to be relocated, the robot “doesn’t get stupid”.'
    }, 
    { question: 'Provides the ability to adjust cleaning settings & parameters',
        answer: 'Lorem ipsum dolor sit amet. Nam fugit debitis eum vitae consequatur aut ratione reiciendis et vitae galisum. Aut facere vitae aut dignissimos sequi aut aspernatur omnis est corporis officia non temporibus quia? Et rerum illum ut quis galisum est deleniti eaque id nulla distinctio aut ipsa unde.'
    }, 
    { question: 'Fast to deploy easy to use and controllable if necessary',
        answer: 'Lorem ipsum dolor sit amet. Nam fugit debitis eum vitae consequatur aut ratione reiciendis et vitae galisum. Aut facere vitae aut dignissimos sequi aut aspernatur omnis est corporis officia non temporibus quia? Et rerum illum ut quis galisum est deleniti eaque id nulla distinctio aut ipsa unde.'
    }
]


export const Advantage = () => {

    const [selected, setSelected] = useState(null)

    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null)
        }

        setSelected(i)
    }

  return (
    <>
    <div className='advantage-container'>
        <img className="imgBG1" src={imgBG1} id='imgBG1' alt='img'/>
        <img className="imgBG2" src={imgBG2} id='imgBG2' alt='img'/>
        <img className="darkbackground" src={bk} alt="UR_product1" id='produ1'/>
        <div className='advantage_items'>
            <div className='advantage_title'>
                <h1>Explore the advantages of UR\ UV-C Disinfectant</h1>
            </div>
            < div className='wrapper'>
                <div className='accodion'>
                    {data.map((item, i) => (
                        <div className='item' key={i}>
                            <div className='title_wrapper' onClick={() => toggle(i)}>
                                <span> {selected === i ? <FaAngleDown color="#F8306B" /> : <FaAngleUp color="#F8306B"/>} </span>
                                <h3> {item.question} </h3>
                            </div>
                            <div className={selected === i ? 'content show' : 'content'} >{item.answer}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        <div className='big_img_product'>
        <img className="big_img_product1" src={product2} alt="UR_big_product" id='big_product'/>
        </div>

        <div className='backshadow'></div>
        <div className='backshadow2'></div>
        <div className='backshadow3'></div>
    </div>
    
    </>
  )
}

