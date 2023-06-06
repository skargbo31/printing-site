import React from 'react'
import HomePage from './component/HomePage/homePage'
import Aboutpage from './component/AboutPage/Aboutpage'
import NavBar from './component/Navbar/NavBar'
import Section from './component/Section/Section'
import Cards from './component/Cards1/Cards'
import Footer from './component/Footer/Footer'

const App = () => {
  return (
    <div>
      <NavBar />
      <HomePage />
      <Aboutpage/>
      <Section />
      <Cards/>
      <Footer/>
    </div>
  )
}

export default App
