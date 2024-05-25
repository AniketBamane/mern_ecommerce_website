import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../store/slices/orderSlice';
import { updateCartItemQuantity } from '../store/slices/orderSlice';

const CartProduct = ({ item }) => {
  const dispatch = useDispatch();
  const onQuantityChange = (productId, quantity,price,operation) => {
    dispatch(updateCartItemQuantity({id:productId, quantity,price,operation}));
  };
  const onRemove = (productId,price) => {
    dispatch(removeFromCart({id:productId,price}))
  };
  return (
    <div className="flex items-center justify-between mb-4 border-b pb-4">
      <img src={item.image} alt={item.name} className="w-32 h-32 object-cover" />
      <div className="flex-1 ml-4">
        <h3 className="text-xl font-semibold">{item.name}</h3>
      </div>
      <div className="flex items-center">
        <button
          className="bg-gray-300 px-2 py-1 rounded"
          onClick={() => onQuantityChange(item.product, item.quantity - 1,item.price,"reducing")}
          disabled={item.quantity === 1}
        >
          -
        </button>
        <span className="mx-2">{item.quantity}</span>
        <button
          className="bg-gray-300 px-2 py-1 rounded"
          onClick={() => onQuantityChange(item.product, item.quantity + 1,item.price,"increasing")}
        >
          +
        </button>
      </div>
      <div className="flex items-center">
        <span className="text-lg font-semibold mr-4 mx-5">{`$${item.price}`}</span>
        <button
          className="text-red-500 hover:text-red-700"
          onClick={() => {
            onRemove(item.product,item.price*item.quantity)
          }}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartProduct;
