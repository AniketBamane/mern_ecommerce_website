import React from 'react'
import Layout from './Layout'
import Card from './Card'
function ProductSection({products}) {
  return (
    <Layout>
    <div className='grid grid-cols-5 gap-5'>
   {products.map((product) => <Card image={product.image} name={product.name} rating={4} />)} 
  </div>
  </Layout>
  )
}

export default ProductSection