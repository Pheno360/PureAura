import React from 'react'
import Card from './Card'
import { assets } from '../assets/assets'
import SpotlightCard from './SpotlightCard';

const Featured = () => {
  return (
    <div className=' bg-white  p-6'>
      <div className='h-[80vh] bg-black rounded-xl p-4'>
      <div className='flex justify-center mt-4'><h1 className='text-5xl text-white'>Featured Spa Services</h1></div>

      <div className='service-container flex justify-evenly p-10'>
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
