import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import { assets } from '../assets/assets';

const Hero = () => {

    const tl=gsap.timeline();
    const tl2=gsap.timeline();

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

        tl2.to('.services',{
            y:-50,
            duration:2,
            ease: "slow(0.7,0.7,false)",
        })
        tl2.to('.services',{
            y:-100,
            ease: "power4.out",
            duration:2
        })
        tl2.to('.services',{
            y:-150,
            ease: "power4.out",
            duration:2
        })

        tl2.repeat(Infinity);
        tl2.yoyo(true);

        tl.repeat(Infinity);
        tl.yoyo(true);

        
    })
  return (
    <>
         <h1 className=' text-white mt-12 text-center text-[5vw] font-[600]'>Welcome To <span className='tag text-blue-400'>PURE AURA</span></h1>

         <div className=' flex justify-center mt-4 '>
       <div className='home w-96 h-80 text-white bg-gradient-to-r from-[#0035a8] via-[#5700f8] to-[#9900ff] ' >
        <div className='text flex flex-col gap-2 h-10  overflow-hidden relative top-32 left-16 text-4xl font-[500]'>
            <h1 className='services'>SPA & BEAUTY</h1>
            <h1 className='services'>BODY TREATMENT</h1>
            <h1 className='services'>HEALTHCARE</h1>
            <h1 className='services'>STEAM BATH</h1>
        </div>
       </div>
       </div>

       <div className='flex justify-center mt-7'>
       <p className=' w-1/2 text-[#ececec] text-center  text-3xl grotesk font-[400] '>&nbsp;&nbsp;&nbsp;Discover a sanctuary of serenity at Pure Aura, where your well-being is our priority.</p>
       </div>

       <div className='text-[#ececec] flex justify-center text-2xl font-[500] mt-4'>
        <button className='bg-[#1b1b1b] hover:shadow hover:shadow-blue-500 transition-all px-4 py-2 rounded-full '>About Us</button>
       </div>
    
   
    </> 
  )
}

export default Hero
