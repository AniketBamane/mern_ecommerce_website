import React from 'react'
import { Outlet } from 'react-router-dom'
import ProductNavbar from '../components/ProductNavbar'
import Layout from '../components/Layout'

function Products() {
  return (
    <Layout>
    <ProductNavbar />
    <Outlet />
    </Layout>
  )
}

export default Products