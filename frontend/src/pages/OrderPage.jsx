// src/pages/OrderPage.jsx
import React from 'react';
import Layout from '../components/Layout';

const orders = [
  {
    id: 1,
    name: 'Product 1',
    description: 'Description for product 1',
    price: '$100',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    name: 'Product 2',
    description: 'Description for product 2',
    price: '$200',
    imageUrl: 'https://via.placeholder.com/150',
  },
  // Add more products as needed
];

const OrderPage = () => {
  const handleCancelOrder = (orderId) => {
    console.log(`Order with ID ${orderId} has been canceled.`);
    // Implement cancel order functionality here
  };

  return (
   <Layout>
     <div className="min-h-screen bg-purple-100 p-5">
      <h1 className="text-3xl font-bold text-center mb-8">My Orders</h1>
      <div className="space-y-8">
        {orders.map((order) => (
          <div key={order.id} className="flex bg-white shadow-md rounded-lg p-5">
            <img src={order.imageUrl} alt={order.name} className="w-32 h-32 object-cover rounded-md mr-4" />
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
};

export default OrderPage;
