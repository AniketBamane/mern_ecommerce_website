// src/components/Card.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = ({ image, name, rating ,productId }) => {
  const navigate = useNavigate()
  console.log(productId)
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg p-4 bg-white" onClick={(e)=>{
      navigate(`/product/${productId}`)
      console.log("clicked !")
     }} >
      <img className="w-full h-48 object-cover" src={image} alt={name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <div className="flex items-center mb-4">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={`w-4 h-4 ${i < rating ? 'text-yellow-500' : 'text-gray-300'}`}
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 17.27L18.18 21 16.54 14.97 22 10.24 15.81 9.63 12 4 8.19 9.63 2 10.24 7.46 14.97 5.82 21z" />
            </svg>
          ))}
        </div>
        <div className="flex justify-between flex-wrap gap-2 sm:justify-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add to Cart
          </button>
          <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
