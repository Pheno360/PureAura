
import gsap from 'gsap';
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import 'remixicon/fonts/remixicon.css'
import { ScrollTrigger } from 'gsap/all';
import { Route, Routes } from 'react-router-dom';
import Booking from './pages/Booking';
import Footer from './components/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ScrollToTop from './components/ScrollToTop';
import { useGSAP } from '@gsap/react';
import { BlurText } from './components/BlueText';


function App() {

  
  useGSAP(()=>{
    gsap.to('.preloader',{
      transform:'translateY(-100%)',
      duration:1,
      ease:'power3.inOut',
      delay:2
    })
  })
  
  gsap.registerPlugin(ScrollTrigger);
  return (
    <>
    <div className=' overflow-x-hidden'>
    <ScrollToTop />
    <ToastContainer />
    <div className=' preloader bg-white fixed z-50 h-screen w-full flex justify-center items-center font-[500] text-5xl'>
    <BlurText text="Feel the Aura" className="custom-class effect" delay={50} />
    </div>
    <Navbar />
   

   <Routes >
     <Route path='/' element={<Home />} ></Route>
     <Route path='/booking' element={<Booking />} ></Route>
   </Routes>

   <Footer />
   </div>
  
    </>
  )
}

export default App
