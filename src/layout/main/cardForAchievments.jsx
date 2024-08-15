import React, { useState } from "react"
import Arrow from '../../assets/icons/DownArrow'

function cardForAchievments(props) {

  const [slide, setSlide] = useState('achievments-card__slider')

  function slideFunc() {

    if(slide == 'achievments-card__slider'){ 
      setSlide('achievments-card__slider.slide')
    }
    else{
      setSlide('achievments-card__slider')
    }
  }

  return (
    <div className='achievments__card achievments-card'>
      <div className="achievments-card__img"></div>
      <div className="achievments-card__cont">
        <h4 className="achievments-card__title">{props.title}</h4>
        <button onClick={slideFunc}  className='achievments-card__button'> <Arrow></Arrow> </button>
      </div>
      <div className={slide}>
        <p className="achievments-card__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, corporis nesciunt. Nemo sit consectetur explicabo, tempore sunt sequi dolorem quae!\</p>
      </div>
    </div>
  )
}

export default cardForAchievments