// src/components/NavBar.jsx
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const state = useSelector(state => state.auth);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='w-full lg:w-[90%] mx-auto flex flex-col lg:flex-row justify-between p-5 mb-5 bg-transparent rounded-lg sticky top-0 border-purple-900 shadow-md'>
      <div className='flex justify-between items-center w-full lg:w-auto'>
        <h1 className='text-2xl'>MyStore</h1>
        <div className='lg:hidden'>
          <button onClick={toggleMenu}>
            {isMenuOpen ? <XMarkIcon className='w-6 h-6' /> : <Bars3Icon className='w-6 h-6' />}
          </button>
        </div>
      </div>
      <div className={`lg:flex ${isMenuOpen ? 'flex' : 'hidden'} flex-col lg:flex-row w-full lg:w-2/3 justify-evenly`}>
        <NavLink to="/" className='px-5 py-2 lg:py-0 bg-purple-300 rounded-md cursor-pointer text-sm text-center mb-2 lg:mb-0 flex items-center'>Home</NavLink>
        <NavLink to="/products" className='px-5 py-2 lg:py-0 bg-purple-300 rounded-md cursor-pointer text-sm text-center mb-2 lg:mb-0 flex items-center'>Products</NavLink>
        {!state.token ? (
          <>
            <NavLink to="/sign-in" className='px-5 py-2 lg:py-0 bg-purple-300 rounded-md cursor-pointer text-sm text-center mb-2 lg:mb-0 flex items-center'>Sign In</NavLink>
            <NavLink to="/login" className='px-5 py-2 lg:py-0 bg-purple-300 rounded-md cursor-pointer text-sm text-center mb-2 lg:mb-0 flex items-center'>Login</NavLink>
          </>
        ) : (
          <>
            <NavLink to="/order" className='px-5 py-2 lg:py-0 bg-purple-300 rounded-md cursor-pointer text-sm text-center mb-2 lg:mb-0 flex items-center'>My Order</NavLink>
            <NavLink to="/contact-us" className='px-5 py-2 lg:py-0 bg-purple-300 rounded-md cursor-pointer text-sm text-center mb-2 lg:mb-0 flex items-center'>Contact Us</NavLink>
            <NavLink to="/wishlist" className='px-5 py-2 lg:py-0 bg-purple-300 rounded-md cursor-pointer text-sm text-center mb-2 lg:mb-0 flex items-center'>Wishlist</NavLink>
            <NavLink to="/logout" className='px-5 py-2 lg:py-0 bg-purple-300 rounded-md cursor-pointer text-sm text-center mb-2 lg:mb-0 flex items-center'>Log Out</NavLink>
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
