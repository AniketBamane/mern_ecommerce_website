import React, { useEffect, useState } from 'react'
import Card from '../components/Card';
import Layout from '../components/Layout';
import ProductSection from '../components/ProductSection';

function Men() {
 const [products,setProducts] = useState([])
 const [loading,setLoading] = useState(true)
 useEffect(() => {
  setLoading(true)
  fetch('http://localhost:3000/api/product/men',{
    method:'GET',
    headers:{
      'Content-Type':'application/json'
    }
  })
 .then(res => res.json())
 .then(data => {
  setProducts([...data.products])
  setLoading(false)
})
 }, [])
  if(loading){
   return <center>
    <iframe src="https://lottie.host/embed/eee9c94f-cb39-420c-9d68-4fd784cc224b/LT15NLeheX.json"></iframe>
   </center>
  }else{
    return (
      <ProductSection products={products} />
        )
  }
}

export default Men