import React, { useState } from "react"
import Logo from '../../assets/icons/star.png'
import InstaIcon from '../../assets/icons/InstaIcon'
import FacebookIcon from '../../assets/icons/FacebookIcon'
import TeleIcon from '../../assets/icons/TleleIcon'
import YouTubeIcon from '../../assets/icons/YouTubeIcon'
import TelephonIcon from "../../assets/icons/TelephonIcon"

// import NavbarBg from '../../assets/images/NavbarBg.png'

// let num = 24
 
// function sizeChange(item){
//   if(window.innerWidth != 1140){
//     const [count, setCount] = useState(0)
//     setCount(14)
//     item = count
//     console.log(count)
//   }
//   else{
//     console.log('123')
//   }
// }

// sizeChange(num)

// console.log(num)

function Header() {
  return (
    <section className="header">
            {/* <img src={NavbarBg} alt="" className="header__bg"/> */}
        <div className="container header-container">
            <nav className="header-container__navbar header-navbar">
                <a href="#" className="header-navbar__link">Главная</a>
                <a href="#" className="header-navbar__link">О Нас</a>
                <a href="#" className="header-navbar__link">Наши проэкты</a>
                <a href="#" className="header-navbar__link">Контакты</a>
            </nav>
            <div className="header-navbar__logo">
                  <img src={Logo} alt="" className="header-navbar__logoImg" />
            </div>
            <div className="header-container__cont header-cont">
            <div className="header-container__icons header-icons">
                <a href="" className="header-icons__link"><InstaIcon className="header-icons__icon" ></InstaIcon></a>
                <a href="" className="header-icons__link"><TeleIcon className="header-icons__icon"></TeleIcon></a>
                <a href="" className="header-icons__link"><FacebookIcon className="header-icons__icon"></FacebookIcon></a>
                <a href="" className="header-icons__link"><YouTubeIcon className="header-icons__icon"></YouTubeIcon></a>            
            </div>
            <div className="header-navbar__tel navbar-tel">
              <div className="navbar-tel__icon">
              <TelephonIcon className="navbar-tel__icon-body" ></TelephonIcon>
              </div>
              <div className="navbar-tel__num">+998 98 998 98 98</div>
            </div>
            </div>
        </div>
    </section>
  )
}

export default Header