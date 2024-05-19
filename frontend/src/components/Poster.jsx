import React from 'react'
import Layout from './Layout'

function PosterSection({img,title,direction}) {
  return (
    <Layout>
      <section className={`h-1/2 flex my-10 ${direction ? "flex-row-reverse":""}`}>
        <img src={img} alt="" className='h-full w-1/2 overflow-hidden' />
        <div className='flex  justify-center items-center w-1/2 px-20'>
        <h2 className='text-6xl'>{title}</h2>
        </div>
      </section>
    </Layout>
  )
}

export default PosterSection