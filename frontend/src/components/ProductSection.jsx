import React, { useState } from 'react';
import Layout from './Layout';
import Card from './Card';

function ProductSection({ products , showAddToCart = true,showAddToWishlist = true }) {
  const [unique,setUnique] = useState(new Set())
  console.log("product is " + products);
  return (
    <Layout>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 place-items-center'>
        {products.map((product) => {
          if(!unique.has(product._id)){
            unique.add(product._id)
            return (
          <Card key={product._id} image={product.image} name={product.name} rating={4} productId={product._id} showAddToCart={showAddToCart} showAddToWishlist={showAddToWishlist} />
        )}})}
      </div>
    </Layout>
  );
}

export default ProductSection;
