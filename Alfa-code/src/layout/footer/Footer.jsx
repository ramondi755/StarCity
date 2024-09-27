import React from 'react'
import FooterPhoneIcon from '../../assets/icons/FooterPhoneIcon'
import InstagramIconWhite from '../../assets/icons/InstagramIconWhite'
import LocationIcon from '../../assets/icons/LocationIcon'
import Logo from '../../assets/images/alfawhite.png'

function Footer() {
  return (
    <section className="footer">
        <div className="container footer-container">

          <div className="footer-container__left">
            <a href="" className="footer-container__logo"> <img className='footer-container__logo-body' src={Logo} alt="" /></a>
            <div className="footer-container__icons">
            <a href="https://www.instagram.com/alfa_agency_uz?igsh=NTc4MTIwNjQ2YQ==" className='contacts-container__link'><InstagramIconWhite></InstagramIconWhite></a>
            <a href="https://www.instagram.com/alfa_agency_uz?igsh=NTc4MTIwNjQ2YQ==" className='contacts-container__link'><InstagramIconWhite></InstagramIconWhite></a>
            <a href="https://www.instagram.com/alfa_agency_uz?igsh=NTc4MTIwNjQ2YQ==" className='contacts-container__link'><InstagramIconWhite></InstagramIconWhite></a>
            </div>
          </div>

          <div className="footer-container__right">
          <a href="" className='footer-container__link'><FooterPhoneIcon></FooterPhoneIcon> +998 33 773 00 66</a>
          <a href="https://maps.app.goo.gl/Arf4QHE1oNGP9bWQ9" className='footer-container__link'><LocationIcon></LocationIcon> Хоразм,Ургенч</a> 
          </div>

        </div>
    </section>
  )
}

export default Footer