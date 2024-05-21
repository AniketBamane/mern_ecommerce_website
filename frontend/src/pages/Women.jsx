import React, { useEffect, useState } from 'react'
import Card from '../components/Card';
import Layout from '../components/Layout';
import ProductSection from '../components/ProductSection';

function Women() {
  const [products,setProducts] = useState([])
  useEffect(() => {
   fetch('http://localhost:3000/api/product/women',{
     method:'GET',
     headers:{
       'Content-Type':'application/json'
     }
   })
  .then(res => res.json())
  .then(data => setProducts([...data.products]))
  }, [])
  return (
    <ProductSection products={products} />
  )
}

export default Women