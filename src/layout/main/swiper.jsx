import React, { useRef, useState , useContext } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide} from 'swiper/react';


// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';


import LocationIcon from '../../assets/icons/LocationIcon'

import Image from '../../assets/images/projectsCardImage.jpg'


// import required modules
import { Navigation} from 'swiper/modules';

function Slider (props) {

  // const [slide, setSlide] = useState(props.slides)  
  // console.log(slide)


  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper projects__slider">
        {props.slides.map(item =>  
            <SwiperSlide key={item.id} image={item.img} className='projects__slide' > 
                <div className="projects__cont">
                <div className="projects__info">
                <h3 className='projects__title'>{item.title}</h3>
                <a href={item.loc} className="projects__location about-left__desc"> <LocationIcon className="header-icons__icon projects__location"/></a>
                </div> 
                <button className="projects__button bunner-cont__button">Click Me</button>
                </div>

                <img src={Image} alt="" /> 

            </SwiperSlide>
            )}
      </Swiper>
    </>
  );
}


export default Slider


// slides.map(item => 
//   <SwiperSlide className='projects__slide' > 
//   <div className="projects__cont">
//   <div className="projects__info">
//   <h3 className='projects__title'>{item.title}</h3>
//   <a href={item.loc} className="projects__location about-left__desc"> <LocationIcon className="header-icons__icon projects__location"/></a>
//   </div> 
//   <button className="projects__button bunner-cont__button">Click Me</button>
//   </div>

//   <img src={item.img} alt="" /> 
  
//   </SwiperSlide>
// )








// import React, { useRef, useState } from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/effect-cards';

// // import '../../assets/style/components/main/swiper.jsx';

// // import required modules
// import { EffectCards } from 'swiper/modules';

//  function Slider (props){
//   return (
//     <>
//       <Swiper
//         effect={'cards'}
//         grabCursor={true}
//         modules={[EffectCards]}
//         className={props.parentClass}
//       >
//         <SwiperSlide className={props.class} >Slide 1</SwiperSlide>
//         <SwiperSlide className={props.class} >Slide 2</SwiperSlide>
//         <SwiperSlide className={props.class} >Slide 3</SwiperSlide>
//         <SwiperSlide className={props.class} >Slide 4</SwiperSlide>
//       </Swiper>
//     </>
//   );
// }

// export default Slider