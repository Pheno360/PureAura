
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


function App() {
  
  gsap.registerPlugin(ScrollTrigger);
  return (
    <>
    <ScrollToTop />
    <ToastContainer />
    <Navbar />
   

   <Routes >
     <Route path='/' element={<Home />} ></Route>
     <Route path='/booking' element={<Booking />} ></Route>
   </Routes>

   <Footer />
  
    </>
  )
}

export default App
