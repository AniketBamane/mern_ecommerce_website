// src/components/Hero.jsx
import React from 'react';
import firstImage from '../assets/first.jpg';
import secondImage from '../assets/second.webp';
import thirdImage from '../assets/third.jpg';
import fourthImage from '../assets/fourth.jpg';
import Layout from './Layout';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const items = [
  <div
    className="item w-full h-[60vh] bg-no-repeat bg-cover bg-center"
    data-value="1"
    style={{ backgroundImage: `url(${firstImage})` }}
  ></div>,
  <div
    className="item w-full h-[60vh] bg-no-repeat bg-cover bg-center"
    data-value="2"
    style={{ backgroundImage: `url(${secondImage})` }}
  ></div>,
  <div
    className="item w-full h-[60vh] bg-no-repeat bg-cover bg-center"
    data-value="3"
    style={{ backgroundImage: `url(${thirdImage})` }}
  ></div>,
  <div
    className="item w-full h-[60vh] bg-no-repeat bg-cover bg-center"
    data-value="4"
    style={{ backgroundImage: `url(${fourthImage})` }}
  ></div>,
];

const Hero = () => {
  return (
    <Layout>
      <AliceCarousel
        autoHeight
        infinite
        mouseTracking
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={2000}
        animationDuration={1500}
      />
    </Layout>
  );
};

export default Hero;
