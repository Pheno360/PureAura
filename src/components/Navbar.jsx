import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className=' bg-[#0e265d border-b-2 border-blue-600 lg:flex hidden justify-evenly items-center p-2 shadow-lg shadow-blue-900'>

    <Link className='text-white font-[500] tracking-wider' to='/wellness'>WELLNESS</Link>
    <Link className='text-white font-[500] tracking-wider' to='/Beauty'>BEAUTY</Link>
    <Link className='text-white font-[500] tracking-wider' to='/spa'>SPA</Link>
    <Link className='text-white font-[500] tracking-wider' to='/about-us'>ABOUT US</Link>
     <Link to='/' ><img className='logo  w-20 justify-self-center ' src={assets.Logo} alt="" /> </Link>
      <Link className='text-white font-[500] tracking-wider' to='/healthcare'>HEALTH CARE</Link>
      <Link className='text-white font-[500] tracking-wider' to='/bath-therapy'>BATH THERAPY</Link>
      <Link className='text-white font-[500] tracking-wider' to='/membership'>MEMBERSHIP</Link>
    </div>

  )
}

export default Navbar
