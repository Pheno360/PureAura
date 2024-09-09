import React from 'react'
import { assets } from '../assets/assets'
import SpotlightCard from './SpotlightCard'
import { Link } from 'react-router-dom'

const Card = ({title,image}) => {
  return (
    <SpotlightCard className="custom-spotlight-card flex flex-col  h-[50vh] md:w-[20vw] w-[65vw] bg-[#ddd] rounded-xl p-4 text-white" spotlightColor="rgba(0, 229, 255, 0.2)">
    <div className='h-[25vh] bg-red-200 overflow-hidden '><img className=' w-full h-full object-cover' src={image} alt="" /></div>
            <div>
                <h1>Body Treatment</h1>
                <h1 className='mt-5 text-2xl font-[500] '>{title}</h1>
                <div className='flex justify-center'>
               <Link to='/booking'> <button className=' mt-10  text-xl font-[500] bg-black px-3 py-2 rounded-2xl border border-[#585858] hover:scale-110 transition-all'>Book Now</button></Link>
                </div>
    
            </div>
    </SpotlightCard>
  )
}

export default Card
