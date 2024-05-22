import React, { useEffect } from 'react'
import ProductSection from '../components/ProductSection';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWishlist } from '../store/slices/wishlistSlice';
import LoadingBar from '../components/LoadingBar';

function Wishlist() {
  const dispatch =  useDispatch()
 const token =  useSelector(state=>state.auth.token)
 const product = useSelector(state=>state.wishlist)

useEffect(()=>{
  dispatch(fetchWishlist(token))
},[dispatch])

 if(product.isLoading){
  return (
    <center>
      <LoadingBar />
    </center>
  )
 }
 {product.isError.message && (
  <center>
    <h1>product.isError.message</h1>
  </center>
 )}
 if(product.wishlist.length == 0){
  return <center>
    <iframe src="https://lottie.host/embed/b935a03a-6ca8-4a02-9992-fccb4f6f5c31/zxjly60Suo.json"></iframe>
  </center>
 }else{
  return (
    <ProductSection products={product.wishlist} />
    )
 }
}

export default Wishlist