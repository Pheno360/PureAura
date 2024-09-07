import React, { useState } from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

const Calendar = ({date,setDate}) => {

 

  const setChange=(e)=>{
    setDate(`${e.$D}/ ${e.$M}/${e.$y}`);
  }

  return (
    <div className=''>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar onChange={setChange} />
    </LocalizationProvider>
    </div>
  )
}

export default Calendar
