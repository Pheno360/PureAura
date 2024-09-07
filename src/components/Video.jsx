import React from 'react'
import {assets} from '../assets/assets'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

const Video = () => {

  useGSAP(()=>{
    gsap.to('.video',{
      y:-500,
      scrollTrigger:{
        trigger:'.video',
        start: 'top 120%',
        end: 'bottom 50%',
        scrub:3,
      }
    })
  })
  
  return (
    <div className='mt-32 p-20 flex mb-20 h-[105vh]'>

    <div className='video w-[30vw] h-[80vh] overflow-hidden mt-[50vh]  '>
    <video  autoPlay muted loop className=' ' src={assets.Spa}></video>
    </div>

    <div className='text-white w-3/4 p-20 text-justify  grotes'>
        <h1 className=' mt-10 text-4xl'>Embrace <span className='border-b-2 border-blue-500'>Wellness</span>, Embrace <span className='border-b-2 border-blue-500'>You</span></h1>
        <h1 className=' mt-10 text-3xl'>At Pure Aura, we believe that wellness is not just a luxury, but a way of life. Our tranquil environment, personalized services, and holistic approach are designed to provide you with a transformative experience that goes beyond the ordinary. </h1>
        <h1 className=' mt-10 text-3xl'> Step into Pure Aura and let us guide you on your journey to a healthier, more balanced life.</h1>
    </div>

    </div>
  )
}

export default Video
