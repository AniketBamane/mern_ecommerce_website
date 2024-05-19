import React from 'react'
import CartItem from '../components/CartItem';
import { useState } from 'react';
import Layout from '../components/Layout';
function Cart() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Product 1', price: 29.99, quantity: 1 },
    { id: 2, name: 'Product 2', price: 49.99, quantity: 2 },
    // Add more items as needed
  ]);

  const handleRemove = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const handleQuantityChange = (id, newQuantity) => {
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
   <Layout>
     <div className="min-h-screen flex p-10 bg-gray-100">
      <div className="w-2/3 mr-8">
        <h2 className="text-3xl font-bold mb-6">Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <div className='grid place-items-center'>
           <iframe src="https://lottie.host/embed/0b909902-449a-4d92-8479-5efd26a4edec/GXdP3T46rQ.json"></iframe>
            <p className="text-center text-gray-500 mt-5 text-2xl">Your cart is empty.</p>
          </div>
        ) : (
          cartItems.map(item => (
            <CartItem 
              key={item.id} 
              item={item} 
              onRemove={handleRemove} 
              onQuantityChange={handleQuantityChange}
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