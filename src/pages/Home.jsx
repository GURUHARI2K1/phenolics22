import React from 'react'
import About from '../components/About';
import Events from '../components/Events';
import Hero from '../components/Hero'

export const Home = () => {
  return (
    <>
        <Hero/>
        <Events/>
        <About/>
    </>
  )
}

export default Home;
