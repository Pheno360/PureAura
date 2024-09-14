import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';

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
         <h1 className=' text-white md:mt-12 mt-4 text-center md:text-[5vw] text-[7vh] font-[600]'>Welcome To <span className='tag text-blue-400'>PURE AURA</span></h1>

         <div className=' flex justify-center mt-4 '>
       <div className='home md:w-96 md:h-80  w-72 h-60 text-white bg-gradient-to-r from-[#0035a8] via-[#5700f8] to-[#9900ff] ' >
        <div className='text flex flex-col md:gap-2 gap-3 h-10  overflow-hidden relative md:top-32 md:left-0 top-28 left-2 text-center md:text-4xl text-3xl font-[500]'>
            <h1 className='services'>SPA & BEAUTY</h1>
            <h1 className='services'>BODY TREATMENT</h1>
            <h1 className='services'>HEALTHCARE</h1>
            <h1 className='services'>STEAM BATH</h1>
        </div>
       </div>
       </div>

       <div className='flex justify-center md:mt-7 mt-5'>
       <p className=' md:w-1/2 w-full text-[#ececec] text-center  md:text-3xl text-xl grotesk font-[400] '>&nbsp;&nbsp;&nbsp;Discover a sanctuary of serenity at Pure Aura, where your well-being is our priority.</p>
       </div>

       <div className='text-[#ececec] flex justify-center md:text-2xl text-xl font-[500] mt-4'>
        <Link to='/booking'><button className='bg-[#1b1b1b] hover:shadow hover:shadow-blue-500 transition-all px-4 py-2 rounded-full '>About Us</button></Link>
       </div>
    
   
    </> 
  )
}

export default Hero
