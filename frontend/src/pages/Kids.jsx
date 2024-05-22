import React, { useEffect, useState } from 'react'
import Card from '../components/Card';
import Layout from '../components/Layout';
import ProductSection from '../components/ProductSection';
import { useSelector } from 'react-redux';

function Kids() {
  const product = useSelector(state=>state.product)
if(product.isLoading){
  return <h1>Loading...</h1>
}
if(product.kidsProducts.length == 0){
  return <center>
    <iframe src="https://lottie.host/embed/b935a03a-6ca8-4a02-9992-fccb4f6f5c31/zxjly60Suo.json"></iframe>
  </center>
}else{
  return (
    <ProductSection products={product.kidsProducts} />
  )
}
}

export default Kids