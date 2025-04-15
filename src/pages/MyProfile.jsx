import React from 'react'
import {assets} from '../assets/assets/assets_frontend/assets'
const MyProfile = () => {
  return (
    <div>

    <div>
< img className='rounded' src={assets.profile_pic} alt="" />
<br />
<h2>Mr.Priyanshu Chaddi Chor</h2>
<hr />

    </div>
    <br />

     <div>
<h3 className='text-bold text-2xl'>Contact Information</h3>
<br />
<p>Name:      Priuanshu Chaddi chor</p>
<p>contact:   +123345356</p>
<p>Email:     prianshu@gmail.com</p>
<br />
<h3 className='text-bold text-2xl'>Basic Information</h3>
<br />
<p>
  Gender:  Male <br />
  BirthDate:  12/12/1999 <br />
</p>
     </div>


    </div>
  )
}

export default MyProfile