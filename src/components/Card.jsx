import React from 'react'
import '../styles/card.scss'
import { Link } from 'react-router-dom'

const Card = ({data}) => {
  return (
    <div className='event-card'>
        <img src={data.img} alt="like" />
        <div className="details">
            <div className="discrip">
                <h3>{data.title}</h3>
                <span>{data.mode}</span>
            </div>
            <div className="timing">
                <span>{data.date}</span>
                <span>{data.time}</span>
            </div>
            <div className="cta">
                {data.slug?<a href={data.slug} target="_blank"><span>register</span></a>:null}
                <span>details</span>
            </div>
        </div>
    </div>
  )
}

export default Card;