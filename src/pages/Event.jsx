import React from 'react'
import Card from '../components/Card'
import {data} from '../cardData'
import '../styles/event-page.scss'

const Event = () => {
  return (
    <div className='event-page container'>
      <h1>Technical Events</h1>
      <div className='grid'>
          {data.map(crd => 
            crd.type === 'technical'?<Card data={crd} />:null
          )}
      </div>
      <h1>Non Technical Events</h1>
      <div className='grid'>
          {data.map(crd => 
            crd.type === 'non technical'?<Card data={crd} />:null
          )}
      </div>
    </div>
  )
}

export default Event;