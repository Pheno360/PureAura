import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Categories = () => {
  return (
    <div className='h-auto bg-white p-4 grotesk'>
      <div className='category-title h-[20vh] flex justify-center items-end'>
      <h1 className=' md:text-[5vw] text-[6vh] grotesk'>CATEGORIES</h1>
      </div>
      <div className='h-0.5 bg-black '></div>

{/* ---------------Service 1----------------- */}
      <div className='service flex  md:flex-nowrap flex-wrap h-[50vh] p-4 transition-all md:ml-0 -ml-10'>

      <div className='w-[30vw] p-10 '> 
      <h1 className=' md:text-5xl text-4xl '>SPA</h1>
      <h1 className='text-xl'>01</h1>
      </div>

      <div className='w-[40vw] p-10 font-[500] text-lg md:inline-block hidden'>
      <h1> Indulge in our luxurious spa treatments that soothe the senses and revitalize the body. From deep tissue massages to refreshing facials, our expert therapists use the finest natural ingredients to ensure a rejuvenating experience.</h1>
      <div className='mt-5 font-[500]'>
      <h1><i className="ri-arrow-right-s-line"></i>Body Treatment</h1>
      <h1><i className="ri-arrow-right-s-line"></i>Scrubs and Wraps</h1>
      <h1><i className="ri-arrow-right-s-line"></i>Short Services</h1>
      <h1><i className="ri-arrow-right-s-line"></i>Special Packages</h1>

      <Link to='/booking'> <button className='mt-7 border-b border-blue-500 text-blue-500  '>Learn More<i className="ri-arrow-right-circle-line ml-2 font-[400] "></i></button></Link>
      </div>
      </div>

      <div className='md:w-[30vw] w-[50vw] flex justify-center items-center md:mt-0 mt-24 '>
        <img className=' scale-125' src={assets.SpaImage} alt="" />
      </div>
      <div className='mx-auto mt-2 inline md:hidden'>
      <Link to="/booking"><button className=' px-2 py-2 border hover:bg-[#b3b3b3] font-[500] mt-4 '>Book Now</button></Link>
      </div>
    
      
      </div>

      <div className='h-0.5 bg-black '></div>

      {/* ---------------Service 2----------------- */}
      <div className='service flex  md:flex-nowrap flex-wrap h-[50vh] p-4 transition-all  md:ml-0 -ml-10'>

      <div className='w-[30vw] p-10 '> 
      <h1 className=' md:text-5xl text-4xl'>BATH THERAPY</h1>
      <h1 className='text-xl'>02</h1>
      </div>

      <div className='w-[40vw] p-10 font-[500] text-lg md:inline-block hidden'>
      <h1 >  Immerse yourself in our therapeutic baths, designed to cleanse, detoxify, and invigorate. Each bath is tailored to meet your specific needs, using a blend of natural salts, herbs, and essential oils for the ultimate relaxation.</h1>
      <div className='mt-5 font-[500]'>
      <h1><i className="ri-arrow-right-s-line"></i>Couple bath</h1>
      <h1><i className="ri-arrow-right-s-line"></i>Honey Milk Bath</h1>
      <h1><i className="ri-arrow-right-s-line"></i>Steam</h1>
      <h1><i className="ri-arrow-right-s-line"></i>Ice Bath</h1>

      <Link to='/booking'> <button className='mt-7 border-b border-blue-500 text-blue-500  '>Learn More<i className="ri-arrow-right-circle-line ml-2 font-[400] "></i></button></Link>
      </div>
      </div>

      <div className='md:w-[30vw] w-[60vw] flex justify-center items-center md:mt-0 mt-32'>
        <img src={assets.BathTherapy} alt="" />
      </div>

      <div className='mx-auto mt-2 inline md:hidden'>
      <Link to="/booking"><button className=' px-2 py-2 border hover:bg-[#b3b3b3] font-[500] '>Book Now</button></Link>
      </div>

      </div>

      <div className='h-0.5 bg-black md:mt-0 mt-4 '></div>

      {/* ---------------Service 3----------------- */}
      <div className='service flex  md:flex-nowrap flex-wrap h-[50vh] p-4 transition-all  md:ml-0 -ml-10'>

      <div className='w-[30vw] p-10'> 
      <h1 className=' md:text-5xl text-4xl'>ACUPUNCTURE</h1>
      <h1 className='text-xl'>03</h1>
      </div>

      <div className='w-[40vw] p-10 font-[500] text-lg md:inline-block hidden'>
      <h1> Experience the ancient art of acupuncture, a time-honored practice that restores balance and harmony to the body. Our skilled practitioners use this holistic therapy to relieve pain, reduce stress, and promote overall health.</h1>
      <div className='mt-5 font-[500]'>
      <h1><i className="ri-arrow-right-s-line"></i>Body Treatment</h1>
      <h1><i className="ri-arrow-right-s-line"></i>Scrubs and Wraps</h1>
      <h1><i className="ri-arrow-right-s-line"></i>Short Services</h1>
      <h1><i className="ri-arrow-right-s-line"></i>Special Packages</h1>

      <Link to='/booking'> <button className='mt-7 border-b border-blue-500 text-blue-500  '>Learn More<i className="ri-arrow-right-circle-line ml-2 font-[400] "></i></button></Link>
      </div>
      </div>

      <div className='md:w-[30vw] w-[60vw] flex justify-center items-center md:mt-0 mt-20'>
        <img src={assets.Acupuncture} alt="" />
      </div>

      <div className='mx-auto mt-2 inline md:hidden'>
      <Link to="/booking"><button className=' px-2 py-2 border hover:bg-[#b3b3b3] font-[500] '>Book Now</button></Link>
      </div>
      </div>

      <div className='h-0.5 bg-black '></div>

      {/* ---------------Service 4----------------- */}
      <div className='service flex  md:flex-nowrap flex-wrap h-[50vh] p-4 transition-all  md:ml-0 -ml-10'>

      <div className='w-[30vw] p-10'> 
      <h1 className=' md:text-5xl text-4xl'>HEALTHCARE</h1>
      <h1 className='text-xl'>04</h1>
      </div>

      <div className='w-[40vw] p-10 font-[500] text-lg md:inline hidden'>
      <h1> Indulge in our luxurious spa treatments that soothe the senses and revitalize the body. From deep tissue massages to refreshing facials, our expert therapists use the finest natural ingredients to ensure a rejuvenating experience.</h1>
      <div className='mt-5 font-[500]'>
      <h1><i className="ri-arrow-right-s-line"></i>Body Treatment</h1>
      <h1><i className="ri-arrow-right-s-line"></i>Scrubs and Wraps</h1>
      <h1><i className="ri-arrow-right-s-line"></i>Short Services</h1>
      <h1><i className="ri-arrow-right-s-line"></i>Special Packages</h1>

      <Link to='/booking'> <button className='mt-7 border-b border-blue-500 text-blue-500  '>Learn More<i className="ri-arrow-right-circle-line ml-2 font-[400] "></i></button></Link>
      </div>
      </div>

      <div className='md:w-[30vw] w-[60vw] flex justify-center items-center md:mt-0 mt-20'>
        <img src={assets.HealthCare} alt="" />
      </div>

      <div className='mx-auto mt-2 inline md:hidden'>
      <Link to="/booking"><button className=' px-2 py-2 border hover:bg-[#b3b3b3] font-[500] '>Book Now</button></Link>
      </div>
      </div>

      {/* <div className='h-0.5 bg-black '></div> */}
      
    </div>
  )
}

export default Categories
