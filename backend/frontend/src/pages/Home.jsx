import React from 'react'
import Hero from '../components/Hero';
import BestSeller from '../components/BestSeller';
import PosterSection from '../components/Poster';
import firstPoster from "../assets/poster1.avif"
import secondPoster from "../assets/poster2.jpg"
import Seperator from '../components/Seperator';
import Cart from '../components/Cart';
import { useSelector } from 'react-redux';
function Home() {
  const token = useSelector(state=>state.auth.token)
  return (
    <>
    {token ? 
      <Cart /> :
      null
  }
      <Hero />
      <BestSeller />
      <Seperator />
      <PosterSection img={firstPoster} title={"Explore our exclusive collection and find your perfect match"} direction={false} />
      <Seperator />
      <PosterSection img={secondPoster} title={"Uncover the latest trends and elevate your style with us."} direction={true} />
    </>
  )
}

export default Home