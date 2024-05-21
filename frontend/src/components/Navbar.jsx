// src/components/NavBar.jsx
import React from 'react';
import {useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const state = useSelector(state=>state.auth)
  console.log(state.user)
  return (
    <nav className='w-[90%] mx-auto flex justify-between p-5 mb-5 bg-transparent rounded-lg sticky top-0 border-purple-900 shadow-md'>
      <h1 className='w-1/3 px-10 py-2 text-2xl'>MyStore</h1>
      <div className='flex w-2/3 justify-evenly'>
        <NavLink to={"/"} className='px-5 py-0 bg-purple-300 rounded-md cursor-pointer text-sm grid place-items-center'>Home</NavLink>
        <NavLink to={"/products"} className='px-5 py-0 bg-purple-300 rounded-md cursor-pointer text-sm grid place-items-center'>Products</NavLink>
        <NavLink to={"/wishlist"} className='px-5 py-0 bg-purple-300 rounded-md cursor-pointer text-sm grid place-items-center'>Wishlist</NavLink>
        <NavLink to={"/order"} className='px-5 py-0 bg-purple-300 rounded-md cursor-pointer text-sm grid place-items-center'>My Order</NavLink>
        <NavLink to={"/contact-us"} className='px-5 py-0 bg-purple-300 rounded-md cursor-pointer text-sm grid place-items-center'>Contact us</NavLink>
       {!state.token ? (
        <>
        <NavLink to={"/sign-in"} className='px-5 py-0 bg-purple-300 rounded-md cursor-pointer text-sm grid place-items-center'>Sign In</NavLink>
         <NavLink to={"/login"} className='px-5 py-0 bg-purple-300 rounded-md cursor-pointer text-sm grid place-items-center'>Login</NavLink>
        </>
       ):
       <NavLink to={"/logout"} className='px-5 py-0 bg-purple-300 rounded-md cursor-pointer text-sm grid place-items-center'>Log out</NavLink>
       }
      </div>
    </nav>
  );
};

export default NavBar;
