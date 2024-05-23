import React from 'react';

const List = ({ products }) => {
  return (
    <div className="product-list p-4 max-w-4xl">
      {products.map((item) => (
        <div key={item.product._id} className="flex items-center mb-4 border-b pb-4">
          <img src={item.product.image} alt={item.product.name} className="w-16 h-16 object-cover" />
          <div className="ml-4 flex-1">
            <h3 className="text-lg font-semibold">{item.product.name}</h3>
            <h2>{item.product.price}</h2>
          </div>
          <div className="text-right">
            <span className="text-lg font-semibold">{item.quantity} - Pieces</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default List;
