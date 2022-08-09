import React from 'react'
import NavBar from "../components/NavBar"
import Profile from "../components/Profile"
import Carousel from "../components/Carousel"
import Links from "../components/Links"

const Home = () => {
  return (
    <div>
        <NavBar/>
        <Profile/>
        <Carousel/>
        <Links/>
    </div>
  )
}

export default Home