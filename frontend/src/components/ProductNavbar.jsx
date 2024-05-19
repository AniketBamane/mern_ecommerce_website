// src/components/ProductNavbar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

const ProductNavbar = () => {
  return (
    <div className='w-full py-4 bg-white shadow-md mb-6'>
      <div className='flex justify-center gap-10'>
        <NavLink
          to="men"
          className='px-7 py-2 bg-purple-300 rounded-md text-sm font-semibold text-gray-700 hover:bg-purple-400 transition duration-300 ease-in-out transform hover:-translate-y-1'
        >
          Men
        </NavLink>
        <NavLink
          to="women"
          className='px-7 py-2 bg-purple-300 rounded-md text-sm font-semibold text-gray-700 hover:bg-purple-400 transition duration-300 ease-in-out transform hover:-translate-y-1'
        >
          Women
        </NavLink>
        <NavLink
          to="kids"
          className='px-7 py-2 bg-purple-300 rounded-md text-sm font-semibold text-gray-700 hover:bg-purple-400 transition duration-300 ease-in-out transform hover:-translate-y-1'
        >
          Kids
        </NavLink>
      </div>
    </div>
  );
};

export default ProductNavbar;
