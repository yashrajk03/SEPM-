import React from 'react'

const Login = () => {
  return (
    <div>
    
    <div>
      <h1>Login</h1>
      <p>Please Login to Book Appointment</p>
      <label htmlFor="Name">Name</label>
      <input type="text" required  />
      <label htmlFor="Email">Email</label>
      <input type="Email" required />
      <label htmlFor="Password">Password</label>
    <input type="password"  required/>
    </div>

    </div>
  )
}

export default Login