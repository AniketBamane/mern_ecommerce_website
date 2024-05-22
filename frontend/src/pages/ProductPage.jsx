// src/pages/ProductPage.jsx
import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '../store/slices/productSlice';
import LoadingBar from '../components/LoadingBar';

const ProductPage = () => {
  const {id} = useParams()
  const dispatch = useDispatch()
  const productState = useSelector(state=>state.product)
  const [quantity, setQuantity] = useState(1);

  useEffect(()=>{
  dispatch(fetchProduct(id))
  },[dispatch])
  const product = {
    name: "Wool Sweater",
    image: "https://via.placeholder.com/150",
    quantity: 8,
    price: "$30",
    description: "Soft and warm wool sweater.",
    type: "Sweater",
    gender: "Male",
    vendor: "CozyKnits",
    popular: true,
  };

  const reviews = [
    {
      user: "John Doe",
      rating: 5,
      comment: "Great sweater! Very warm and comfortable.",
      date: "2023-05-01",
    },
    {
      user: "Jane Smith",
      rating: 4,
      comment: "Nice quality, but a bit too large for me.",
      date: "2023-04-15",
    },
    {
      user: "Alice Johnson",
      rating: 3,
      comment: "Average quality, not worth the price.",
      date: "2023-03-20",
    },
  ];

  const handleIncrease = () => {
    if (quantity < product.quantity) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    // Add the product to the cart
    console.log('Added to cart:', { ...product, selectedQuantity: quantity });
  };
  if(productState.isLoading){
    return <center>
      <LoadingBar />
    </center>
  }
  if(productState.isError.status){
    return <center>
      <h1>{productState.isError.message}</h1>
    </center>
  }
  console.log("product is "+productState.product)
  return (
    <Layout>
      <div className="container mx-auto my-10 p-6 bg-white rounded-lg shadow-lg">
        <div className="flex flex-col md:flex-row">
          {/* Product Image */}
          <div className="md:w-1/2">
            <img src={productState.product.image} alt={product.name} className="w-full h-96 rounded-lg object-contain" />
          </div>
          {/* Product Info */}
          <div className="md:w-1/2 md:ml-10 mt-6 md:mt-0">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">{productState.product.name}</h1>
            <p className="text-lg text-gray-700 mb-2">{product.description}</p>
            <p className="text-lg text-gray-700 mb-2"><strong>Type:</strong> {productState.product.type}</p>
            <p className="text-lg text-gray-700 mb-2"><strong>Gender:</strong> {productState.product.gender}</p>
            <p className="text-lg text-gray-700 mb-2"><strong>Vendor:</strong> {productState.product.vendor}</p>
            <p className="text-lg text-gray-700 mb-2"><strong>Price:</strong> {productState.product.price}</p>
            <p className="text-lg text-gray-700 mb-2"><strong>Availability:</strong> {productState.product.quantity > 0 ? `In Stock - ${productState.product.quantity} available` : 'Out of Stock'}</p>
            <div className="flex items-center mb-4">
              <button 
                className="px-4 py-2 bg-gray-200 rounded-md" 
                onClick={handleDecrease} 
                disabled={quantity <= 1}
              >
                -
              </button>
              <span className="mx-4 text-lg">{quantity}</span>
              <button 
                className="px-4 py-2 bg-gray-200 rounded-md" 
                onClick={handleIncrease} 
                disabled={quantity >= product.quantity}
              >
                +
              </button>
            </div>
            <button 
              className="px-6 py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600" 
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          </div>
        </div>
        {/* Reviews Section */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Reviews</h2>
          {reviews.map((review, index) => (
            <div key={index} className="mb-6 p-4 bg-gray-100 rounded-lg shadow-md">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold">{review.user}</h3>
                <span className="text-gray-600">{new Date(review.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center mb-2">
                <span className="text-yellow-500">{'★'.repeat(review.rating)}</span>
                <span className="text-gray-400 ml-2">{'★'.repeat(5 - review.rating)}</span>
              </div>
              <p className="text-gray-700">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ProductPage;
