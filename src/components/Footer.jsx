import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React from 'react'

const Footer = () => {

  const tl=gsap.timeline();
  useGSAP(()=>{
    tl.to('.home',{
        borderRadius:"68% 100% 100% 100% / 64% 100% 63% 100% ",
        duration:0.7
    })
    tl.to('.home',{
        borderRadius:"57% 60% 80% 100% / 80% 100% 100% 100%   ",
        duration:0.7
    })
    tl.to('.home',{
        borderRadius:"90% 60% 80% 40% / 71% 100% 50% 100%   ",
        duration:0.7
    })
    tl.to('.home',{
        borderRadius:"90% 60% 80% 100% / 71% 80% 70% 100%   ",
        duration:0.7
    })
    tl.to('.home',{
        borderRadius:"68% 100% 100% 100% / 64% 100% 63% 100% ",
        duration:0.7
    })
        tl.repeat(Infinity);
        tl.yoyo(true);

  });
  return (
    <div className=' md:h-[60vh] h-auto bg-white md:p-4 p-2'>
    <div className='md:h-[52vh] h-auto bg-[#0e0e0e] text-[#e2e2e2] rounded-2xl flex md:flex-nowrap flex-wrap justify-evenly p-20'>

    <div className=' md:-mt-10 -mt-20 md:-ml-10 -ml-16 self-start '>
       <div className='home w-80 h-72 md:scale-100 scale-75  text-[#ebebeb] bg-gradient-to-r from-[#0035a8] via-[#5700f8] to-[#9900ff] ' >
       <div className='flex flex-col relative top-20 left-14'>
    <h1 className='text-3xl font-[500]'>Pure Aura</h1>
    <h1 className='w-3/4 text-lg mt-4'>  Discover a sanctuary of serenity at Pure Aura, where your well-being is our priority.</h1>
    </div>
       </div>
       </div>

       <div className=' flex flex-col text-lg '>
    <h1 className='font-[500] text-2xl md:mb-8 mb-2 '>Important Links</h1>
    <div className='links flex flex-col md:gap-2 gap-0 text-[#fff]'>
    <h1>About Us</h1>
    <h1>Our Services</h1>
    <h1>My Account</h1>
    <h1>Membership</h1>
    </div>
    </div>

    <div className=' flex flex-col text-lg md:mt-0 mt-6 '>
    <h1 className='font-[500] text-2xl md:mb-8 mb-2 '>Contact Us</h1>
    <div className='links flex flex-col md:gap-2 gap-0 text-[#cacaca]'>
    <h1>Mumbai, Maharashtra, India, 400053</h1>
    <h1>Mumbai, India, 40053</h1>
    <h1>prostartspureaura@gmail.com</h1>
    <h1>Phone: +91 9096230241</h1>
    </div>
    </div>

    <div className=' flex flex-col text-lg md:mt-0 mt-6'>
    <h1 className='font-[500] text-2xl md:mb-8 mb-2 '>Opening Hours</h1>
    <div className='links flex flex-col md:gap-2 gap-0 text-[#cacaca]'>
    <h1>Every Day: 8:30AM to 8:30PM </h1>
    <h1>For more exclusive offers visit us today</h1>
    </div>
    </div>
    

    </div>

    <div className='flex justify-around font-[500] mt-2 text-lg md:text-balance text-center'>
      <h1>©2024 Pure Aura, All Rights Reserved, Powered by ProStarts.</h1>
    </div>
      
    </div>
  )
}

export default Footer
