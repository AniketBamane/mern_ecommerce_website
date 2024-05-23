import React, { useEffect } from 'react'
import CartItem from '../components/CartItem';
import Layout from '../components/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrders } from '../store/slices/orderSlice';
import LoadingBar from '../components/LoadingBar';
import { toast } from 'react-toastify';
function Cart() {
  const token = useSelector(state=>state.auth.token)
  const orderState = useSelector(state=>state.order)
  const dispatch = useDispatch()  
  useEffect(()=>{
    dispatch(fetchOrders({token,status:'unplaced'}))
  },[dispatch])

  console.log("orders are : "+orderState.orders)


  const totalAmount = orderState.orders.reduce((total, item) => total + item.amount , 0);
 if(orderState.isLoading){
  return <center>
    <LoadingBar />
  </center>
 } 
 if(orderState.isError.status){
  return <center>
    <h1>{orderState.isError.message}</h1>
  </center>
 }
  return (
   <Layout>
     <div className="min-h-screen flex p-10 bg-gray-100">
      <div className="w-2/3 mr-8">
        <h2 className="text-3xl font-bold mb-6">Shopping Cart</h2>
        {orderState.orders.length === 0 ? (
          <div className='grid place-items-center'>
           <iframe src="https://lottie.host/embed/0b909902-449a-4d92-8479-5efd26a4edec/GXdP3T46rQ.json"></iframe>
            <p className="text-center text-gray-500 mt-5 text-2xl">Your cart is empty.</p>
          </div>
        ) : (
         orderState.orders.map(item => (
            <CartItem 
              key={item._id} 
              item={item} 
            />
          ))
        )}
      </div>
      <div className="w-1/3 bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold mb-4">Order Summary</h3>
        <div className="flex justify-between mb-2">
          <span>Subtotal</span>
          <span>${totalAmount.toFixed(2)}</span>
        </div>
        <div className="flex justify-between mb-4">
          <span>Tax (10%)</span>
          <span>${(totalAmount * 0.1).toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-bold text-xl">
          <span>Total</span>
          <span>${(totalAmount * 1.1).toFixed(2)}</span>
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full mt-6">
          Proceed to Payment
        </button>
      </div>
    </div>
   </Layout>
  );
}

export default Cart