import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

import Silver from '../../assets/images/silver.png'
import Gold from '../../assets/images/gold.png'
import Platina from '../../assets/images/platina.png'
import { useState } from 'react';

function Rates() {

    // const[show, setShow] = useState('rates-container__cards rates-cards none') 
    // const[moree, setMoree] = useState('Moree')
    // const[size, setSize] = useState('rates')
    
    // function showButton (event){
    //     if(show == 'rates-container__cards rates-cards none'){
    //         setShow('rates-container__cards rates-cards')
    //         setMoree('Close')
    //         setSize('rates')
    //         event.target(remove)
    //     }
    //     else if(show !== 'rates-container__cards rates-cards none'){
    //         setShow('rates-container__cards rates-cards none')
    //         setMoree('Moree')
    //         setSize('rates small')
    //     }
    // }

    AOS.init()

  return (
    <section className='rates' id="rates" data-aos="fade-up" data-aos-duration="1100">
        <div className="container rates__container rates-container">
            <div className='rates-container__cards rates-cards'>
                <div className="rates-cards__card">
                    <img src={Silver} alt="" className="rates-card__img" />
                    <div className="rates-card__cont">
                        <h3 className="rates-card__title">Title</h3>
                        <ul className="rates-card__ul">
                            <li className="rates-card__li">Lorem ipsum dolor sit amet.</li>
                            <li className="rates-card__li">Lorem ipsum dolor sit amet.</li>
                            <li className="rates-card__li">Lorem ipsum dolor sit amet.</li>
                            <li className="rates-card__li">Lorem ipsum dolor sit amet.</li>
                        </ul>
                    </div>
                </div>
                <div className="rates-cards__card">
                    <img src={Gold} alt="" className="rates-card__img" />
                    <div className="rates-card__cont">
                        <h3 className="rates-card__title">Title</h3>
                        <ul className="rates-card__ul">
                            <li className="rates-card__li">Lorem ipsum dolor sit amet.</li>
                            <li className="rates-card__li">Lorem ipsum dolor sit amet.</li>
                            <li className="rates-card__li">Lorem ipsum dolor sit amet.</li>
                            <li className="rates-card__li">Lorem ipsum dolor sit amet.</li>
                        </ul>
                    </div>
                </div>
                <div className="rates-cards__card">
                    <img src={Platina} alt="" className="rates-card__img" />
                    <div className="rates-card__cont">
                        <h3 className="rates-card__title">Title</h3>
                        <ul className="rates-card__ul">
                            <li className="rates-card__li">Lorem ipsum dolor sit amet.</li>
                            <li className="rates-card__li">Lorem ipsum dolor sit amet.</li>
                            <li className="rates-card__li">Lorem ipsum dolor sit amet.</li>
                            <li className="rates-card__li">Lorem ipsum dolor sit amet.</li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* <div className="rates-continer__button-body">
                <button onClick={showButton} className="rates-container__button">{moree}</button>
            </div> */}
        </div>
    </section>
  )
}

export default Rates