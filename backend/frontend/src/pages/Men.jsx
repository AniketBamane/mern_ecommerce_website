import React, { useEffect, useState } from 'react'
import Card from '../components/Card';
import Layout from '../components/Layout';
import ProductSection from '../components/ProductSection';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMenProducts } from '../store/slices/productSlice';
import LoadingBar from '../components/LoadingBar';

function Men() {
  const dispatch = useDispatch()
  const product =  useSelector(state=>state.product)
  useEffect(()=>{
    dispatch(fetchMenProducts())
  },[dispatch])
 console.log(product.menProducts)
 if(product.isLoading){
  return <center>
    <LoadingBar />
  </center>
 }
 if(product.menProducts.length == 0){
  return <center>
    <iframe src="https://lottie.host/embed/b935a03a-6ca8-4a02-9992-fccb4f6f5c31/zxjly60Suo.json"></iframe>
  </center>
 }else{
  return (
    <ProductSection products={product.menProducts} />
      )
 }
}

export default Men