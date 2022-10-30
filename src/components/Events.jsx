import React from 'react'
import '../styles/events.scss'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from 'swiper';

import { data } from '../cardData';

import "swiper/css";
import "swiper/css/effect-coverflow";

export const Events = () => {
  return (
    <section className="event container">
        <h3>EVENTS</h3>
        <Swiper
            effect={"coverflow"}
            centeredSlides={true}
            spaceBetween={50}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 200,
              modifier: 2,
              slideShadows: true,
            }}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, EffectCoverflow]}
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
