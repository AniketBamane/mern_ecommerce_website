import React from 'react';
import Layout from './Layout';

function PosterSection({ img, title, direction }) {
  return (
    <Layout>
      <section className={`flex flex-col lg:flex-row my-10 ${direction ? 'lg:flex-row-reverse' : ''}`}>
        <img src={img} alt="" className='w-full lg:w-1/2 h-auto lg:h-full overflow-hidden' />
        <div className='flex justify-center items-center w-full lg:w-1/2 px-4 lg:px-20 mt-4 lg:mt-0'>
          <h2 className='text-4xl lg:text-6xl text-center'>{title}</h2>
        </div>
      </section>
    </Layout>
  );
}

export default PosterSection;
