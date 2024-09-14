import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import Calendar from './Calendar';
import { Link } from 'react-router-dom';

export default function Appointment() {
  return (
    <div className=' flex md:flex-nowrap flex-wrap justify-evenly bg-white md:h-[80vh] h-[120vh]  '>

    <div className='md:mt-32 -mt-52 md:ml-20 ml-0 md:w-[25vw] w-[92vw] h-[46vh] bg-gradient-to-r from-green-300 via-green-400 to-green-500 md:scale-125 scale-100 shadow-2xl rounded-xl p-5'>
    <Calendar />
    <h1 className='md:hidden inline mt-5 text-xl font-[500]'>For Best offers visit us Today...! </h1>
    <Link to="/booking"> <button className='md:hidden inline px-3 py-2 hover:bg-blue-700 transition-all bg-[#108bff] rounded-lg text-white mt-5 font-[500] md:ml-0 ml-24'>Contact Us</button></Link>
    </div>
      
      <div className='md:w-1/2 w-3/4 md:order-last order-first'>
        <h1 className='mt-32 md:text-4xl text-4xl font-[500]'>Request an Apppointment</h1>

        <div className=' mt-10 text-xl w-3/4 md:inline hidden'>
        <h1 className=''>Step into Pure Aura and let us guide you on your journey to a healthier, more balanced life.</h1>
        <h1 className=' mt-10 text-xl font-[500]'>For Best offers visit us Today...! </h1>
       <Link to="/booking"> <button className=' px-3 py-2 hover:bg-blue-700 transition-all bg-[#0080f8] rounded-lg text-white mt-5 font-[500]'>Contact Us</button></Link>
        </div>
      </div>
    </div>
  );
}