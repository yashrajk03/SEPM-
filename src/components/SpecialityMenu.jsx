import React from 'react'
import { specialityData } from '../assets/assets/assets_frontend/assets'
import { Link } from 'react-router-dom'

const SpecialityMenu = () => {
    return (
      <div id="speciality" className="flex flex-col items-center gap-4 py-16 text-gray-800">
        <h1 className="text-3xl font-medium">Find by Speciality</h1>
        <p className="sm:w-1/3 text-center text-small">
          Simply browse through our extensive list of trusted doctors,
          <br /> schedule your appointment hassle-free.
        </p>
  
        <div className="flex sm:justify-center gap-4 pt-5 w-full overflow-scroll">
          {specialityData.map((item, index) => (
            <Link 
            onClick={()=>scrollTo(0,0)}
              key={index} 
              to={`/doctors/${item.speciality.toLowerCase()}`} 
              className="flex flex-col items-center p-4 border rounded-lg hover:shadow-lg transition"
            >
              <img src={item.image} alt={item.speciality} className="w-16 sm:w-24 mb-2" />
              <p className="mt-2 font-semibold">{item.speciality}</p>
            </Link>
          ))}
        </div>
      </div>
    );
  };
  
  export default SpecialityMenu;