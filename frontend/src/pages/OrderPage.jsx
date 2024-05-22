// src/pages/OrderPage.jsx
import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrders } from '../store/slices/orderSlice';
import LoadingBar from '../components/LoadingBar';


const OrderPage = () => {
  const dispatch = useDispatch()
  const product = useSelector(state=>state.order)
  const token = useSelector(state=>state.auth.token)
  useEffect(()=>{
    dispatch(fetchOrders(token))
  },[dispatch])

  const handleCancelOrder = (orderId) => {
    console.log(`Order with ID ${orderId} has been canceled.`);
    // Implement cancel order functionality here
  };
  if(product.isLoading){
    return <center>
      <LoadingBar />
    </center>
  }
  {product.isError.message && (
    <center>
      <h1>{product.isError.message}</h1>
    </center>
  )}
  if(product.orders.length == 0){
    return <center>
      <iframe src="https://lottie.host/embed/b935a03a-6ca8-4a02-9992-fccb4f6f5c31/zxjly60Suo.json"></iframe>
    </center>
  }else{
    return (
      <Layout>
        <div className="min-h-screen bg-purple-100 p-5">
         <h1 className="text-3xl font-bold text-center mb-8">My Orders</h1>
         <div className="space-y-8">
           {product.orders.map((order) => (
             <div key={order.id} className="flex bg-white shadow-md rounded-lg p-5">
               <img src={order.image} alt={order.name} className="w-32 h-32 object-cover rounded-md mr-4" />
               <div className="flex flex-col justify-between w-full">
                 <div>
                   <h2 className="text-xl font-bold mb-2">{order.name}</h2>
                   <p className="text-gray-700 mb-2">{order.description}</p>
                   <p className="text-gray-900 font-bold mb-4">{order.price}</p>
                 </div>
                 <button
                   onClick={() => handleCancelOrder(order.id)}
                   className="self-end bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                 >
                   Cancel Order
                 </button>
               </div>
             </div>
           ))}
         </div>
       </div>
      </Layout>
     );
  }
  
};

export default OrderPage;
