import React from 'react'
import Header from './layout/header/header'
import Bunner from './layout/main/bunner'
import About from './layout/main/about';
import Achievments from './layout/main/achievments';
import Projects from './layout/main/projects';
import Contacts from './layout/main/contacts';
import './assets/style/main.scss';

function App() {
  return (
    <div className="wrapper">
      <Header></Header>
      <Bunner></Bunner>
      <About></About>
      <Achievments></Achievments>
      <Projects></Projects>
      <Contacts></Contacts>
    </div>
  )
}

// -novid -nojoy -hight +cl_forcepreload 1 viewmodel_fov 60, viewmodel_offset_x -0.500000, viewmodel_offset_y -2.000000 , viewmodel_offset_z -2.000000

export default App