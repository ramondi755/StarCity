import React, { createContext } from 'react'
import Slider from './swiper'


import Image from '../../assets/images/projectsCardImage.jpg'

function Projects() {

  let slides = [
    {id:0,title:'Moon city',loc:'https://maps.app.goo.gl/qCJLUfMTBXqhEJ5C9',image:{Image}, link: '../../assets/images/projectsCardImage.jpg'},
    {id:1,title:'Moon city 2',loc:'https://maps.app.goo.gl/qCJLUfMTBXqhEJ5C9',image:{Image}, link: '../../assets/images/projectsCardImage.jpg'},
  ]

  return (
    <div className="projects">
      <div className="projects-container">
        <h2 className="projects-container__title">Projects</h2>
      </div>
      {
        <Slider slides={slides} />
      }
    </div>
  )
}

export default Projects