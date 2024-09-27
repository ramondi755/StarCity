import React from 'react'
// import WorksIcon1 from '../../assets/icons/WorksIcon1'
import AOS from 'aos';
import 'aos/dist/aos.css';

import SmmImage from '../../assets/images/SmmImage.png'
import BuxgalteriyaImage from '../../assets/images/BuxgalteriyaImage.png'
import WebImage from '../../assets/images/WebImage.png'

function Works() {

  AOS.init()

  return (
    <section className='works' id="works" data-aos="fade-up" data-aos-duration="1100">
      <div className="container works-container__header">
        {/* <a href="" className="works__link link">Biz qanday ishlaymiz</a> */}
        <h3 className="works__title">Bizni hizmatlar</h3>
      </div>
        <div className="container works-container">
            <div className="works-container__card works-card">
              <img src={SmmImage} alt="" className="works-card__icon" />
                <h3 className="works-container__title">Marketing</h3>
                <p className="works-container__desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem cum, id doloribus excepturi possimus nesciunt?</p>
                {/* <button className="works-container__link" >Подробнее →</button> */}
            </div>
            <div className="works-container__card works-card">
              <img src={BuxgalteriyaImage} alt="" className="works-card__icon" />
                <h3 className="works-container__title">Buxgalteriya</h3>
                <p className="works-container__desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem cum, id doloribus excepturi possimus nesciunt?</p>
                {/* <button className="works-container__link" >Подробнее →</button> */}
            </div>
            <div className="works-container__card works-card">
              <img src={WebImage} alt="" className="works-card__icon web" />
                <h3 className="works-container__title">Darsturlash</h3>
                <p className="works-container__desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem cum, id doloribus excepturi possimus nesciunt?</p>
                {/* {/* <button className="works-container__link" >Подробнее →</button> */}
            </div>
        </div>
    </section>
  )
}

export default Works