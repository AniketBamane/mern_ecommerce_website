// src/App.jsx
import React, { useEffect } from 'react';
import Home from './pages/Home';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Men from './pages/Men';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Women from './pages/Women';
import Kids from './pages/Kids';
import Login from './pages/Login';
import SignIn from './pages/SignIn';
import Cart from './pages/Cart';
import Wishlist from './pages/Wishlist';
import Products from './pages/Products';
import ContactUs from './pages/ContactUs';
import OrderPage from './pages/OrderPage';
import Logout from './pages/Logout';
import {useDispatch} from "react-redux"
import {fetchPopularProducts } from './store/slices/productSlice'
import ProductPage from './pages/ProductPage';

const App = () => {
 const dispatch = useDispatch()
 useEffect(()=>{
  dispatch(fetchPopularProducts())
 },[dispatch])
  return (
    <div className='pt-5 bg-purple-100'>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/wishlist' element={<Wishlist />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/order' element={<OrderPage />} />
        <Route path='/products/' element={<Products />}>
        <Route index element={ <Navigate to="men" />} />
        <Route path='men' element={<Men />}  />
        <Route path='women' element={<Women />}   />
        <Route path='kids' element={<Kids />} />
        </Route> 
        <Route path='/logout' element={<Logout />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/login' element={<Login />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/product/:id' element={<ProductPage />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
