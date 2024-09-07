import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import Calendar from './Calendar';
import { Link } from 'react-router-dom';

export default function Appointment() {
  return (
    <div className=' flex justify-evenly bg-white h-[80vh]  '>

    <div className='mt-32 ml-20 w-[25vw] h-[45vh] bg-gradient-to-r from-green-300 via-green-400 to-green-500 scale-125 shadow-2xl rounded-xl p-5'>
    <Calendar />
    </div>
      
      <div className='w-1/2'>
        <h1 className='mt-32 text-4xl font-[500]'>Request an Apppointment</h1>

        <div className=' mt-10 text-xl w-3/4'>
        <h1>Step into Pure Aura and let us guide you on your journey to a healthier, more balanced life.</h1>
        <h1 className=' mt-10 text-xl font-[500]'>For Best offers visit us Today...! </h1>
       <Link to="/booking"> <button className=' px-3 py-2 hover:bg-blue-700 transition-all bg-[#0080f8] rounded-lg text-white mt-5 font-[500]'>Contact Us</button></Link>
        </div>
      </div>
    </div>
  );
}