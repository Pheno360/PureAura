import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Navbar = () => {

  const tl=gsap.timeline();
  const tl2=gsap.timeline();

  useGSAP(()=>{
    tl2.to('.menu',{
      transform:'translateX(0%)',
    })

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

      tl2.pause();
    
  })

  const handleClick = () => {
    tl2.play();
  }

  const handleExit = () => {
    tl2.reverse();
  }
  return (
    <>
    <div className=' menu fixed z-10 transform translate-x-[100%] inline md:hidden'>
    <div className='h-[100vh] w-[100vw] bg-white'>
      <h1 onClick={handleExit} className='flex justify-end p-5 text-2xl '><i class="ri-close-large-line"></i></h1>
      <div className='flex flex-col gap-5 text-2xl mt-10 ml-20 '>
      <Link onClick={handleExit} to="/"><h1 className=' border-b border-black'>Home</h1></Link>
      <Link onClick={handleExit} to="/booking"><h1 className=' border-b border-black'>Appointment</h1></Link>
      <Link onClick={handleExit} to="/booking"><h1 className=' border-b border-black'>Wellness</h1></Link>
      <Link onClick={handleExit} to="/booking"><h1 className=' border-b border-black'>Membership</h1></Link>
      <Link onClick={handleExit} to="/booking"><h1 className=' border-b border-black'>About US</h1></Link>
      </div>

      <div className=' md:-mt-10  md:-ml-10  self-start '>
       <div className='home w-80 h-72 md:scale-100 scale-75  text-[#ebebeb] bg-gradient-to-r from-[#0035a8] via-[#5700f8] to-[#9900ff] ' >
       <div className='flex flex-col relative top-20 left-14'>
    <h1 className='text-3xl font-[500]'>Pure Aura</h1>
    <h1 className='w-3/4 text-lg mt-4'>  Discover a sanctuary of serenity at Pure Aura, where your well-being is our priority.</h1>
    </div>
       </div>
       </div>
    </div>
    </div>
    <div className=' bg-[#0e265d border-b-2 border-blue-600 md:flex hidden justify-evenly items-center p-2 shadow-lg shadow-blue-900'>

    <Link className='text-white font-[500] tracking-wider' to='/wellness'>WELLNESS</Link>
    <Link className='text-white font-[500] tracking-wider' to='/Beauty'>BEAUTY</Link>
    <Link className='text-white font-[500] tracking-wider' to='/spa'>SPA</Link>
    <Link className='text-white font-[500] tracking-wider' to='/about-us'>ABOUT US</Link>
     <Link to='/' ><img className='logo  w-20 justify-self-center ' src={assets.Logo} alt="" /> </Link>
      <Link className='text-white font-[500] tracking-wider' to='/healthcare'>HEALTH CARE</Link>
      <Link className='text-white font-[500] tracking-wider' to='/bath-therapy'>BATH THERAPY</Link>
      <Link className='text-white font-[500] tracking-wider' to='/membership'>MEMBERSHIP</Link>
    </div>

    <div className=' bg-[#0e265d border-b-2 border-blue-600 flex md:hidden justify-between items-center py-2 px-4 shadow-lg shadow-blue-900'>
    <Link to='/' ><img className='logo  w-16 justify-self-center ' src={assets.Logo} alt="" /> </Link>
    <h1 onClick={handleClick} className='text-white text-3xl '><i className="ri-menu-3-line"></i></h1>
    </div>
    </>


  )
}

export default Navbar
