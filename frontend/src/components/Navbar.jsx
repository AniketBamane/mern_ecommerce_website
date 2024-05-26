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
    <nav className='w-full lg:w-[90%] mx-auto flex flex-col lg:flex-row justify-between p-5 mb-5 bg-transparent rounded-lg sticky top-0 border-purple-900 shadow-md z-50'>
      <div className='flex justify-between items-center w-full lg:w-auto'>
        <h1 className='text-2xl'>MyStore</h1>
        <div className='lg:hidden'>
          <button onClick={toggleMenu}>
            {isMenuOpen ? <XMarkIcon className='w-6 h-6' /> : <Bars3Icon className='w-6 h-6' />}
          </button>
        </div>
      </div>
      <div className='hidden lg:flex lg:w-2/3 justify-evenly'>
        <NavLink to="/" className='px-5 py-2 bg-purple-300 rounded-md cursor-pointer text-sm text-center flex items-center'>Home</NavLink>
        <NavLink to="/products" className='px-5 py-2 bg-purple-300 rounded-md cursor-pointer text-sm text-center flex items-center'>Products</NavLink>
        {!state.token ? (
          <>
            <NavLink to="/sign-in" className='px-5 py-2 bg-purple-300 rounded-md cursor-pointer text-sm text-center flex items-center'>Sign In</NavLink>
            <NavLink to="/login" className='px-5 py-2 bg-purple-300 rounded-md cursor-pointer text-sm text-center flex items-center'>Login</NavLink>
          </>
        ) : (
          <>
            <NavLink to="/order" className='px-5 py-2 bg-purple-300 rounded-md cursor-pointer text-sm text-center flex items-center'>My Order</NavLink>
            <NavLink to="/contact-us" className='px-5 py-2 bg-purple-300 rounded-md cursor-pointer text-sm text-center flex items-center'>Contact Us</NavLink>
            <NavLink to="/wishlist" className='px-5 py-2 bg-purple-300 rounded-md cursor-pointer text-sm text-center flex items-center'>Wishlist</NavLink>
            <NavLink to="/logout" className='px-5 py-2 bg-purple-300 rounded-md cursor-pointer text-sm text-center flex items-center'>Log Out</NavLink>
          </>
        )}
      </div>

      {/* Drawer */}
      <div className={`fixed inset-0 z-50 bg-black bg-opacity-50 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={toggleMenu}>
        <div className={`fixed top-0 left-0 h-full bg-white shadow-lg transition-transform duration-300 transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`} onClick={e => e.stopPropagation()}>
          <div className='flex justify-between items-center p-5 border-b'>
            <h2 className='text-xl'>Menu</h2>
            <button onClick={toggleMenu}>
              <XMarkIcon className='w-6 h-6' />
            </button>
          </div>
          <div className='flex flex-col p-5 space-y-4'>
            <NavLink to="/" className='px-5 py-2 bg-purple-300 rounded-md cursor-pointer text-sm text-center flex items-center' onClick={toggleMenu}>Home</NavLink>
            <NavLink to="/products" className='px-5 py-2 bg-purple-300 rounded-md cursor-pointer text-sm text-center flex items-center' onClick={toggleMenu}>Products</NavLink>
            {!state.token ? (
              <>
                <NavLink to="/sign-in" className='px-5 py-2 bg-purple-300 rounded-md cursor-pointer text-sm text-center flex items-center' onClick={toggleMenu}>Sign In</NavLink>
                <NavLink to="/login" className='px-5 py-2 bg-purple-300 rounded-md cursor-pointer text-sm text-center flex items-center' onClick={toggleMenu}>Login</NavLink>
              </>
            ) : (
              <>
                <NavLink to="/order" className='px-5 py-2 bg-purple-300 rounded-md cursor-pointer text-sm text-center flex items-center' onClick={toggleMenu}>My Order</NavLink>
                <NavLink to="/contact-us" className='px-5 py-2 bg-purple-300 rounded-md cursor-pointer text-sm text-center flex items-center' onClick={toggleMenu}>Contact Us</NavLink>
                <NavLink to="/wishlist" className='px-5 py-2 bg-purple-300 rounded-md cursor-pointer text-sm text-center flex items-center' onClick={toggleMenu}>Wishlist</NavLink>
                <NavLink to="/logout" className='px-5 py-2 bg-purple-300 rounded-md cursor-pointer text-sm text-center flex items-center' onClick={toggleMenu}>Log Out</NavLink>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
