import React from 'react'
import {assets} from '../assets/assets/assets_frontend/assets'
const About = () => {
  return (
    <div>
      <h1  className=' flex justify-center items-center text-bold text-3xl text-black '>About Us</h1>
      <div className='flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20 my-10'>
        
        <div>
          <  img src={assets.about_image} className=' w-70px h-100px' alt="" />
        </div>
        <div>
          <p>
          Welcome to Prescripto, your trusted partner in managing your healthcare needs conveniently and  efficiently  
          <br />
          At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.
<br />
<br />
Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way.
<br />
<br />
    </p>
    <h2 className='text-bold text-2xl'>
      Our Vision
      <br /> <br />
    </h2>
    <p>
  

Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers,<br /> making it easier for you to access the care you need, when you need it.
      
    </p>
        </div>
      </div>

      <div>
        <h1 className='text-bold text-3xl '>
          Why Choose us ?
        </h1>
        <div   className='flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20 my-10'>
          <div className='border border-black p-5  rounded'>
            <h3 className='text-2xl text-bold gap-5'>Efficiency:</h3>
            <br />
            <p>
            Streamlined appointment scheduling 
            <br />
            that fits into your busy lifestyle.
            </p>
          </div>
          <div className='border border-black p-5  rounded'>
            <h3 className='text-2xl text-bold gap-5'>Convinience:</h3>
            <br />
            <p>
            Access to a network of trusted
            <br />
             healthcare professionals in your area.
            </p>
          </div>
          <div className='border border-black p-5  rounded'>
            <h3 className='text-2xl text-bold gap-5'>
              Personalization:
              </h3>
              <br />
              <p>
              Tailored recommendations and reminders
              <br />
               to help you stay on top of your health.
              </p>
           
          </div>
        </div>
      </div>
    </div>
  )
}

export default About