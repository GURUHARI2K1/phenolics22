import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/hero.scss'

const Hero = () => {
  return (
    <main className='Hero container'>
      <div className='info'>
        <div className='title-1'>
          <h1>TEPIC'22</h1>
          <p>National Level technical Symposium</p>
        </div>
        <div className='title-2'>
          <h2>PHENOLICS'22</h2>
          <span>Organised By</span>
          <p>Department Of Plastics Technology</p>
        </div>
        <span><Link to="/events">EVENTS</Link></span>
      </div>
      <span>11 NOV 2022</span>
    </main>
  )
}

export default Hero