import React from 'react'
import Image from '../../assets/images/aboutimage.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

function About() {

  AOS.init();

  return (
    <section className='about' id='about' data-aos="fade-up" data-aos-duration="1100">
        <div className="container about-container">
                <img src={Image} alt="" className="about__image" />
            <div className="about__content about-content">
                <div className="about-content__header">
                {/* <a href="" className="about-content__link link">Подробнее о компании</a> */}
                <h3 className="about-content__title">Biz haqimizda</h3>
                </div>
                <p className="about-content__desc">
                Alfa Agency jamoasi o‘z faoliyati davomida o‘z yutuqlari bilan O‘zbekiston, Xitoy va MDH mamlakatlaridagi plastik derazalar, mebel ishlab chiqarish, farmatsevtika sohasidagi yirik kompaniyalarning ishonchini qozondi.
                <br /> <br />
                Shu davr mobaynida 130 dan ortiq kompaniyalar bilan hamkorlik o‘rnatildi va hamkorlar soni kundan-kunga ortib bormoqda!
                <br /> <br />
                Bizning vazifamiz mijozlarimizning savdo hajmini oshirish orqali ularning o'sishiga hissa qo'shishdir.
                
                </p>
                {/* <button className="about-content__button">Начать</button> */}
            </div>
        </div>
    </section>
  )
}

export default About