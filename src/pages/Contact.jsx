import React from 'react'

import {assets} from '../assets/assets/assets_frontend/assets'

const Contact = () => {
  return (
    <div>

      <h1 className='flex flex-col justify-center items-center text-black text-bold text-3xl'> Contact Us</h1>
      <br />
      <div className='flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20 my-10'>
        <div className='flex w-20px h-30px'>
<img   src= { assets.contact_image}alt="" />
        </div>
        <div className='flex flex-col gap-3'>
          <h3 className='text-bold text-2xl'>Our Office</h3>
          <br />
          <p>
          54709 Willms Station <br />
          Suite 350, Washington, USA
          <br />
          Tel: (415) 555‑0132
          </p>
<br />
          <h3 className='text-bold text-2xl'>Jobs At Ease</h3>
        
          <p>
          Learn more about our teams and job openings.
          </p>
          <button className='border border-black rounded text-bold '>Explore Jobs</button>
        </div>
      </div>
    </div>
  )
}

export default Contact