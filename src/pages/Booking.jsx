import React, { useState } from 'react'
import Calendar from '../components/Calendar'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Autocomplete, Button, TextField } from '@mui/material';
import { toast } from 'react-toastify';
import emailjs from '@emailjs/browser';

const options = ['Aroma Therapy', 'Deep Tissue Therapy', 'Balinese Therapy','Swedish Therapy','Thai Massage','Couple Therapy'];
const options2 = ['Two Hands', 'Four Hands'];

const Booking = () => {


  const[date,setDate]=useState([]);

  const[custName,setcustName]=useState("");
  const[email,setEmail]=useState('');

  const [value, setValue] = useState('');
  const [inputValue, setInputValue] = useState('');

  const [value2, setValue2] = useState('');
  const [inputValue2, setInputValue2] = useState('');



  const handleSubmit=(e)=>{

     e.preventDefault();
    const formData={
      date,
      custName,
      email,
      service:value,
      hands:value2,

    };
    const formDataString = JSON.stringify(formData);

    if(custName.length <1 || email.length < 1 ){
      toast.warn("Please fill your information first")
    }
    else if(!email.includes('@')){
      toast.warn("Please Enter Valid Email Address")
    }
    else if(date==""){
      toast.warn("Please Select Date from the Calendar")
    }
else{
    setEmail(''),
    setcustName(''),
    setValue(''),
    setValue2(''),
    setInputValue(''),
    setInputValue2('')
    toast.success("Appointment Booked Successfully");

    const serviceId='service_5j9v3lc';
    const templateId='template_yhcfncr';
    const publicKey='iyqFOVHqhMeaU3hx8';
  
    const templateParams={
      from_name:custName,
      from_email:email,
      to_name:'Aniket Patil',
      message: formDataString
      };
  
     emailjs.send(serviceId,templateId,templateParams,publicKey)
     .then((response) => {
      console.log('Email sent successfully',response);
      setcustName('');
      setEmail('');
     })
     .catch((error) => {
      console.log('Email failed to send', error);
      });
  
    }
}


  return (
    <>   
    <div className='md:h-screen h-auto bg-white md:p-20 p-2 grotesk   '>
    <div className='md:mb-32 mb-10 text-center text-4xl font-[500] text-[#313131] grotesk'><h1>Request an Appointment</h1></div>
    <div className='flex md:flex-nowrap flex-wrap'>
   <div className=' mb-20 md:ml-32 ml-0  md:w-[25vw] w-[95vw] h-[45vh] bg-gradient-to-r from-green-300 via-green-400 to-green-500 md:scale-125 scale-100 shadow-2xl rounded-xl p-5'>
    <Calendar date={date} setDate={setDate} />
    </div>

    <div className=' md:ml-20 ml-0 md:p-0 p-2 -mt-10 text-2xl flex flex-col gap-2'>
    <h1 className=''>Spa Services (Body Treatment)</h1>
    <h1 className='text-xl'>Date: <span className='text-green-600 font-[500]'>{date}</span> at 8:00 am- 8:00 pm</h1>


    <div className='drop-down-input flex flex-col gap-4 mt-4'>
<div className='flex'>
<h1 className='text-xl'>Your Information</h1>
<div className='h-1.5 w-1.5  shadow-red-600 bg-red-600 rounded-full m-3'></div>
</div>

<form  onSubmit={handleSubmit}>
   <div className='flex md:flex-row flex-col gap-2'>
    <TextField onChange={(e) => setcustName(e.target.value)} value={custName} label="Name" />
    <TextField type='email' onChange={(e) => setEmail(e.target.value)} value={email} label="Email" />
    </div>
    <div className='flex flex-col gap-4 mt-4'>
      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="controllable-states-demo"
        options={options}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Spa Services (Body Treatment)" />}
      />

<Autocomplete 
        value={value2}
        onChange={(event, newValue) => {
          setValue2(newValue);
        }}
        inputValue={inputValue2}
        onInputChange={(event, newInputValue) => {
          setInputValue2(newInputValue);
        }}
        id="controllable-states-demo2"
        options={options2}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Service Hands" />}
      />
      </div>

      <div className=' flex justify-center '>
      <button type='submit' onClick={handleSubmit} className='mt-5 hover:bg-blue-700 transition-all bg-[#0080f8] text-white text-[20px] font-[500] px-3 py-2  rounded'>REQUEST APPOINTMENT</button>
      </div>

      </form>
      


    </div>
  
    </div>
</div>
    </div>
    </>
  )
}

export default Booking
