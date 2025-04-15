import React from 'react'
import { assets } from '../assets/assets/assets_frontend/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>

<div className=' flex  flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 text-sm'>
{/* ----Left -side*/}

<div>
<img className='mb-5 w-40' src={assets.logo} alt="" />
<p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, soluta? Beatae, fuga earum. Totam dolores officia nam excepturi quia aperiam.</p>
</div>

{/* ----center -----*/}
<div>
<p className='text-xl font-medium mb-5'>Company</p>
<ul className='flex flex-col gap-2 text-gray-600'>
<li>Home</li>
<li> All Doctors</li>
<li> Contact us</li>
<li>About us </li>
</ul>
</div>


{/* ----rigth -side*/}
<div>
    <p className='text-xl font-medium mb-5'> Get In Touch</p>
<ul className='flex flex-col gap-2 text-gray-600'>
    <li>+12334556</li>
<li>sample@gmail.com</li>
</ul>
</div>



</div>
<div>
    <hr />
    <p className='p-4 text-sm text-center'>Copyright</p>
</div>
    </div>
  )
}

export default Footer