import React from 'react'
import '../styles/events.scss'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper';

import { data } from '../cardData';

import "swiper/css";

const Events = () => {
  return (
    <section className="event container">
        <h3>EVENTS</h3>
        <Swiper
            centeredSlides={true}
            spaceBetween={50}
            slidesPerView={"auto"}
            loop={true}
            autoplay={{
              delay: 1500,
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
                            <span>{eve.time}</span>
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

export default Events;
