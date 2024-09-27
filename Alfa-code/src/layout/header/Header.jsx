import React from 'react'
import {Link} from 'react-scroll'
import HeaderPhones from '../../assets/icons/HeaderPhones'
// import HeaderLogo from '../../assets/icons/HeaderLogo'
import Logo from '../../assets/images/alfablue.png'
import LogoMini from '../../assets/images/alfalogo.png'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..

function Header() {
    AOS.init();
    
  return (
    <section className='header'>
        <div className="container">
        <nav className="container header-container header__navbar header-navbar">
            <a href="/" className='header-navbar'>
            <img className='header-navbar__logo' src={Logo} alt="" />
            <img className='header-navbar__logo header-navbar__logo-mini' src={LogoMini} alt="" />
            </a>
            <nav className="header-navbar__menu navbar-menu">
                <Link activeClass="active" to="/" spy={true} smooth={true} offset={-150} duration={1000} delay={0} className="navbar-menu__link">Assosiy</Link>

                <Link activeClass="active" to="works" spy={true} smooth={true}  offset={-100} duration={1000} delay={0} className="navbar-menu__link">Bizning hizmatlarimiz</Link>

                {/* <Link activeClass="active" to="works" spy={true} smooth={true}  offset={450} duration={1000} delay={0} className="navbar-menu__link">Tariflarimiz</Link> */}

                <Link activeClass="active" to="about" spy={true} smooth={true}  offset={-100} duration={1000} delay={0} className="navbar-menu__link">Biz haqimizda</Link>

                <Link activeClass="active" to="contacts" spy={true} smooth={true}  offset={-100} duration={1000} delay={0} className="navbar-menu__link">Kontaktlar</Link>
            </nav>
            <div className="header-navbar__buttons">
            <div className="header-navbar__button navbar-button">
                <span className="navbar-button__icon"><HeaderPhones className='icon' ></HeaderPhones></span>
                <span className="navbar-button__num">+998 33 773 00 66</span>
            </div>
            {/* <button className="header__burger">
                <span className="navbar-button__num"><HeaderBurger className='icon' ></HeaderBurger></span>
            </button> */}
            </div>
        </nav> 
        </div>   
    </section>
  )
}

export default Header