import React from 'react'
import '../styles/events.scss'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper';
import image from '../images/bg.png'

import { data } from '../cardData';

import "swiper/css";

export const Events = () => {
  return (
    <section className="event container">
        <h3>EVENTS</h3>
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper"
        >
            {data.map( (eve) => 
                <SwiperSlide>
                    <div className="card">
                        <div className='card-type'>{eve.type}</div>
                        <div className='card-info'>
                            <div className='event-type'>
                                <div className='card-image'>
                                    <img src={eve.img} alt="image"/>
                                </div>
                                <div className='mode'>
                                    <span>{eve.mode}</span>
                                    <span>{eve.date}</span>
                                </div>
                            </div>
                            <div className='title'><span>{eve.title}</span></div>
                        </div>
                    </div>
                </SwiperSlide>
            )}
            
        </Swiper>
        
    </section>
  )
}
