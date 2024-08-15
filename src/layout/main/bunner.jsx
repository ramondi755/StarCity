import React from 'react'
import Video from "../../assets/videos/bunnerVideo.mp4"

function Bunner() {
  return (
    <section className='bunner'>
        <div className="bunner__bg"></div>
                <video src={Video} autoPlay muted className="bunner__video"></video>
        <div className="container bunner-container">
            <div className="bunner-container__cont bunner-cont">
                <h3 className="bunner-cont__title">
                    Star City companiyasi
                </h3>
                <p className="bunner-cont__desc">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi, est? Eaque voluptas neque et voluptates explicabo, numquam ratione fugiat aliquid esse nesciunt possimus sapiente tenetur.
                </p>
                <button className="bunner-cont__button">
                    To know moree
                </button>
            </div>
        </div>
    </section>
  )
}

export default Bunner