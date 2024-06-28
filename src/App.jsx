import React from 'react'
import NavBar from './components/NavBar'
import { Outlet } from 'react-router-dom'

import FooterBar from './components/FooterBar'

const App = () => {
  return (
    <div className='max-w-screen-2xl my-0 mx-auto '>
      <NavBar/>
      <Outlet/>
      <FooterBar/>
    </div>
  )
}

export default App