import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
 // Import the context, not the provider

const TopDoctors = () => {
    // Use context correctly with AppContext, not AppContextProvider
    const navigate = useNavigate();
    const {doctors} = useContext(AppContext)

    return (
        <div className="flex flex-col items-center gap-4 my-16 text-gray-900">
            <h1 className="text-3xl font-medium">Top Doctors to Book</h1>
            <p className="sm:w-1/3 text-center text-sm">
                Simply browse through our extensive list of trusted doctors
            </p>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4 items-center gap-6 px-3 sm:px-0">
                {doctors?.slice(0, 10).map((item, index) => (
                    <div
                        onClick={() => navigate(`/appointment/${item._id}`)} // Fixed useNavigate to navigate
                        key={index}
                        className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500 w-[300px] flex flex-col items-center p-4"
                    >
                        <img
                            className="w-24 h-24 object-cover rounded-full border-2 border-gray-300"
                            src={item.image}
                            alt={`${item.name}'s profile`}
                        />
                        <div className="text-center">
                            <div className="flex items-center justify-center gap-2 text-sm text-green-500 mt-2">
                                <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                                <p>Available</p>
                            </div>
                            <p className="text-gray-900 text-lg font-medium">{item.name}</p>
                            <p className="text-sm text-gray-600">{item.speciality}</p>
                        </div>
                    </div>
                ))}
            </div>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md" onClick={()=>{navigate('/doctors');scrollTo(0,0)}}>
                More
            </button>
        </div>
    );
};

export default TopDoctors;