import React from 'react'
import {assets} from '../assets/assets'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

const Video = () => {

  
  return (
    <div className='mt-32 md:p-20 p-8 flex flex-wrap md:flex-nowrap mb-20 md:h-[105vh] h-[75vh]'>

    <div className='video md:w-[30vw] md:h-[80vh] w-[50vw] h-[35vh] overflow-hidden md:mt-[0vh] mt-[0vh]  '>
    <video  autoPlay muted loop className=' ' src={assets.Spa}></video>
    </div>

    <div className='text-white md:w-3/4 w-full md:p-20 p-0 md:text-justify text-balance md:mt-0 -mt-[0vh] grotesk'>
        <h1 className=' mt-10 md:text-4xl text-2xl'>Embrace <span className='border-b-2 border-blue-500'>Wellness</span>, Embrace <span className='border-b-2 border-blue-500'>You</span></h1>
        <h1 className=' mt-5 md:text-3xl text-lg'>At Pure Aura, we believe that wellness is not just a luxury, but a way of life. <span className=' md:inline hidden'> Our tranquil environment, personalized services, and holistic approach are designed to provide you with a transformative experience that goes beyond the ordinary.</span> </h1>
        <h1 className=' mt-5 md:text-3xl text-lg'> Step into Pure Aura and let us guide you on your journey to a healthier, more balanced life.</h1>
    </div>

    </div>
  )
}

export default Video
