import React from 'react'
import Image from '../../assets/images/bunnerImage.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Bunner() {

  AOS.init();

  return (
    <section className="bunner" id="/" data-aos="fade-up" data-aos-duration="1100" >
        <div className="container bunner-container">  
                <img src={Image} alt="" className="bunner-container__image" />
            <div className="bunner__right bunner-right">
                <div className="bunner-right__name"> <div className="bunner-right__name-logo">ALfa</div> Marketing agentligi</div>
                <div className="bunner-right__cont">
                <h3 className="bunner-right__subtitle">Assalom</h3>
                <h1 className="bunner-right__title">Sotuvni oshirish</h1>
                </div>
            <p className="bunner-right__desc">
            Agar biznesingiz vaqtinchalik bo'lishini va mijozlar ishonchini yo'qotishini istamasangiz, o'z veb-saytingizni yarating. Bu orqali ular sizni topishlari oson bo'ladi. Siz ishonchli brendga aylanasiz. Mijozlaringiz bilan muloqot yaxshilanadi.   
            </p>
            {/* <button className="header-navbar__button navbar-button bunner-right__button">Бриф на разработку сайта</button> */}
        </div>
        </div>
    </section>
  )
}

export default Bunner