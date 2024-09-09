import React from 'react'
import Card from './Card'
import { assets } from '../assets/assets'
import SpotlightCard from './SpotlightCard';

const Featured = () => {
  return (
    <div className=' bg-white  md:p-6 p-3'>
      <div className='md:h-[80vh] h-auto bg-black rounded-xl p-4'>
      <div className='flex justify-center mt-4'><h1 className='md:text-5xl text-4xl text-white'>Featured Spa Services</h1></div>

      <div className='service-container flex md:gap-0 gap-4 md:flex-nowrap flex-wrap justify-evenly md:p-10 p-4 md:mt-0 mt-4'>
        <Card title='Sleep Mantra' image={assets.SleepTherapy} />
        <Card title='Spine Mantra' image={assets.SpineTherapy} />
        <Card title='Eye Mantra' image={assets.EyeTherapy} />
        <Card title='Four Hands' image={assets.FourTherapy} />
    
      </div>
      </div>
    </div>
  )
}

export default Featured
