import React from 'react'
import '../styles/events.scss'
import image from '../images/bg.png'

export const Events = () => {
  return (
    <section className="event container">
        <h3>EVENTS</h3>
        <div className="card">
            <div className='card-type'>non technical</div>
            <div className='card-info'>
                <div className='event-type'>
                    <div className='card-image'>
                        <img src={image} alt="image"/>
                    </div>
                    <div className='mode'>
                        <span>online</span>
                        <span>11 nov</span>
                    </div>
                </div>
                <div className='title'><span>Break the rules</span></div>
            </div>
        </div>
    </section>
  )
}
