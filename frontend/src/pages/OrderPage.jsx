// src/pages/OrderPage.jsx
import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrders } from '../store/slices/orderSlice';
import LoadingBar from '../components/LoadingBar';
import CartItem from '../components/CartItem';


const OrderPage = () => {
  const dispatch = useDispatch()
  const orderState = useSelector(state=>state.order)
  const token = useSelector(state=>state.auth.token)
  useEffect(()=>{
    console.log(token)
    dispatch(fetchOrders({token,status:"placed"}))
  },[dispatch])
 
 
  if(orderState.isLoading){
    return <center>
      <LoadingBar />
    </center>
  }
  {orderState.isError.message && (
    <center>
      <h1>{orderState.isError.message}</h1>
    </center>
  )}
  if(orderState.orders.length == 0){
    return <center>
      <iframe src="https://lottie.host/embed/b935a03a-6ca8-4a02-9992-fccb4f6f5c31/zxjly60Suo.json"></iframe>
    </center>
  }else{
    return (
      <Layout>
        <div className="min-h-screen bg-purple-100 p-5">
         <h1 className="text-3xl font-bold text-center mb-8">My Orders</h1>
         <div className="space-y-8">
           {orderState.orders.map((item) => (
              <CartItem 
              key={item._id} 
              item={item} 
            />
           ))}
         </div>
       </div>
      </Layout>
     );
  }
  
};

export default OrderPage;
