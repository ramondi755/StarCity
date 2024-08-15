import React from 'react'
import Sky from '../../assets/images/AboutSky.jpg'
import House from '../../assets/images/AboutHouse.png'

function About() {
  return (
    <section className='about'>
                {/* <div className="about__bg"></div> */}
                <img src={Sky} alt="" className='about__img' />
        <div className="container about-container">
            <div className="about-container__left about-left">
                <div className="about-left__cont">
                    <div className="about-left__text">
                    <h3 className="about-left__title">Title number one</h3>
                    <p className="about-left__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus nostrum fugit voluptate quod eaque quis aut quidem dicta dolorum nihil ex recusandae id debitis necessitatibus, laboriosam error. Minus, molestias hic.</p>
                    </div>
                    <button className='about-left__button'>to know about</button>
                    <div className="about-left__achievments left-achievments">
                        <div className="about-left__achievment">
                            <div className="about-left-achievment__num">2000</div>
                            <div className="about-left-achievment__desc">fine families</div>
                        </div>
                        <div className="about-left__achievment">
                            <div className="about-left-achievment__num">2000</div>
                            <div className="about-left-achievment__desc">fine families</div>
                        </div>
                        <div className="about-left__achievment">
                            <div className="about-left-achievment__num">2000</div>
                            <div className="about-left-achievment__desc">fine families</div>
                        </div>
                        <div className="about-left__achievment">
                            <div className="about-left-achievment__num">2000</div>
                            <div className="about-left-achievment__desc">fine families</div>
                        </div>
                    </div>
                </div>
            </div>
                <div className="about__right about-right">
                    <img src={House} alt="" className="about-right__img" />
                </div>
        </div>
    </section>
  )
}

export default About