import React, { useState } from 'react';
import {assets} from '../assets/assets/assets_frontend/assets'
import { NavLink, useNavigate } from 'react-router-dom';


const Navbar = () => {
    const navigate = useNavigate();
    const [showProfile, setShowProfile] = useState(false);
    const [token, setToken] = useState(true); // Simulating authentication
  
    return (
      <div className="flex items-center justify-between text-sm py-4 mb-5 border-b px-6">
        {/* Logo */}
        <img  onClick={()=>navigate('/Login')} className="w-44 cursor-pointer" src={assets.logo} alt="Logo" />
  
        {/* Navigation Links */}
        <ul className="hidden md:flex items-center gap-6 font-medium">
          <NavLink to="/" className="hover:text-primary">HOME</NavLink>
          <NavLink to="/doctors" className="hover:text-primary">ALL DOCTORS</NavLink>
          <NavLink to="/about" className="hover:text-primary">ABOUT</NavLink>
          <NavLink to="/contact" className="hover:text-primary">CONTACT</NavLink>
        </ul>
  
        {/* Profile / Login */}
        <div className="relative">
          {token ? (
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => setShowProfile(!showProfile)}>
              <img src={assets.profile_pic} alt="Profile" className="w-10 h-10 rounded-full object-cover" />
              <span className="text-lg">&#9662;</span> {/* Down Arrow */}
            </div>
          ) : (
            <button onClick={() => navigate("/login")} className="bg-primary text-white px-6 py-2 rounded-md">
              LOGIN
            </button>
          )}
  
          {/* Profile Dropdown */}
          {showProfile && token && (
            <div className="absolute right-0 mt-2 w-48 bg-white shadow-md rounded-md border">
              <ul className="py-2">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => navigate('/my-profile')}>My Profile</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => navigate('/my-appointments')}>My Appointments</li>
                <hr />
                <li
                  className="px-4 py-2 text-red-500 hover:bg-gray-100 cursor-pointer"
                  onClick={() => setToken(false)}
                >
                  Logout
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    );
  };
  
  export default Navbar;
  