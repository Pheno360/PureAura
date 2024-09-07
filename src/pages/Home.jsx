import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Video from '../components/Video'
import Categories from '../components/Categories'
import Featured from '../components/Featured'
import Calendar from 'react-calendar'
import Appointment from '../components/Appointment'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
    <Hero />
    <Video />
    <Categories />
    <Featured />
    <Appointment />


    </div>
  )
}

export default Home
