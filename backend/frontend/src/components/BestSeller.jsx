// src/components/BestSeller.jsx
import React from 'react';
import Layout from './Layout';
import Card from './Card';
import ProductSection from './ProductSection';
import { useSelector } from 'react-redux';
import LoadingBar from './LoadingBar';

const BestSeller = () => {
  const product = useSelector(state=>state.product)
if(product.isLoading){
  return (
    <center>
      <LoadingBar />
    </center>
  )
}
if(product.isError.status){
  return (
    <center>
      <h1>{product.isError.message}</h1>
    </center>
  )
}
  if(product.popularProducts.length == 0){
    return <center>
      <iframe src="https://lottie.host/embed/b935a03a-6ca8-4a02-9992-fccb4f6f5c31/zxjly60Suo.json"></iframe>
    </center>
  }else{
    return (
     <Layout>
        <section className='mb-10'>
        <h2 className="text-3xl font-bold mb-6 text-center">Best Sellers</h2>
          <ProductSection products={product.popularProducts} />
      </section>
     </Layout>
    );
  }
};

export default BestSeller;
