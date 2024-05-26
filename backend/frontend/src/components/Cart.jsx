import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const navigate = useNavigate();
  return (
    <div className="fixed bottom-10 right-10 w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center shadow-lg hover:bg-purple-700 transition-colors duration-300 cursor-pointer" onClick={()=>{
      navigate('/cart')
    }}>
      <FontAwesomeIcon icon={faShoppingCart} size="2x" color="#fff" />
    </div>
  );
};

export default Cart;
