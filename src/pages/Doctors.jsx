import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Added useNavigate
import { AppContext } from '../context/AppContext';

const Doctors = () => {
  const { speciality } = useParams();
  const { doctors } = useContext(AppContext);
  const [filterDoc, setFilterDoc] = useState([]);
  const navigate = useNavigate(); // Added navigate hook

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter(doc => doc.speciality === speciality));
    } else {
      setFilterDoc(doctors);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [doctors, speciality]);

  return (
    <div className="container mx-auto px-4 py-8">
      <p className="text-xl font-semibold mb-6">Browse through the doctors' specialties</p>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar with specialties */}
        <div className="md:w-1/4">
          <div className="flex flex-col gap-2">
            <p className="cursor-pointer border  flex items-center justify-center border-black rounded hover:text-blue-600">General Physician</p>
            <p className="cursor-pointer border flex items-center justify-center border-black rounded hover:text-blue-600">Gynecologist</p>
            <p className="cursor-pointer border flex  items-center justify-center border-black rounded hover:text-blue-600">Dermatologist</p>
            <p className="cursor-pointer border flex items-center justify-center border-black rounded hover:text-blue-600">Pediatricians</p>
            <p className="cursor-pointer border flex items-center justify-center border-black rounded hover:text-blue-600">Neurologist</p>
            <p className="cursor-pointer border flex items-center justify-center border-black rounded hover:text-blue-600">Gastroenterologist</p>
          </div>
        </div>

        {/* Doctors list */}
        <div className="md:w-3/4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filterDoc.map((item, index) => (
              <div
                onClick={() => navigate(`/appointment/${item._id}`)}
                key={index}
                className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500 flex flex-col items-center p-4"
              >
                <img
                  className="w-24 h-24 object-cover rounded-full border-2 border-gray-300"
                  src={item.image}
                  alt={`${item.name}'s profile`}
                />
                <div className="text-center mt-3">
                  <div className="flex items-center justify-center gap-2 text-sm text-green-500">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <p>Available</p>
                  </div>
                  <p className="text-gray-900 text-lg font-medium mt-2">{item.name}</p>
                  <p className="text-sm text-gray-600">{item.speciality}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctors;