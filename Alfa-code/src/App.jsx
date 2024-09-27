import React from 'react'
import Header from './layout/header/Header'
import Bunner from './layout/main/Bunner'
import About from './layout/main/About'
import Works from './layout/main/Works'
import Contacts from './layout/main/Contacts'
import Footer from './layout/footer/Footer'
import Rates from './layout/main/Rates'

const App = () => {
  return (
    <div>
      <Header></Header>
      <Bunner></Bunner>
      <Works></Works>
      {/* <Rates></Rates> */}
      <About></About>
      <Contacts></Contacts>
      <Footer></Footer>
    </div>
  )
}

export default App