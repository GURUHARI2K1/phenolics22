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
            {/* <SwiperSlide>
                <div className="card">
                    <div className='card-type'>{data[0].type}</div>
                    <div className='card-info'>
                        <div className='event-type'>
                            <div className='card-image'>
                                <img src={data[0].img} alt="image"/>
                            </div>
                            <div className='mode'>
                                <span>{data[0].mode}</span>
                                <span>{data[0].date}</span>
                            </div>
                        </div>
                        <div className='title'><span>{data[0].title}</span></div>
                    </div>
                </div>
            </SwiperSlide> */}
            
        </Swiper>
        {/* <div className="card">
            <div className='card-type'>non technical</div>
            <div className='card-info'>
                <div className='event-type'>
                    <div className='card-image'>
                        <img src={image} alt="image"/>
                    </div>
                    <div className='mode'>
                        <span>online</span>
                        <span>11 novz</span>
                    </div>
                </div>
                <div className='title'><span>Break the rules</span></div>
            </div>
        </div> */}
    </section>
  )
}
