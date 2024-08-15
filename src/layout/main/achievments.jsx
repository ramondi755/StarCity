import React, { useState } from 'react'
// import Happy from '../../assets/images/AchievmentsHappy.jpg'
import Card from './cardForAchievments'

function Projects() {

  const [cards, setCard] = useState(
    [
      {id:1,title:'title',},
      {id:2,title:'title',},
      {id:3,title:'title',}
    ]
  )

  return (
    <section className="achievments">
      <div className="container achievments__container">
        <div className="achievments__title">Title</div>
        <div className="achievments__cards">
          {
            cards.map(item => <Card key={item.id} title={item.title} array={cards} />)
          }
        </div>
      </div>
    </section>
  )
}

export default Projects