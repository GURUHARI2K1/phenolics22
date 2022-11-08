import React from 'react'
import '../styles/details.scss'

const Detail = ({det}) => {

  return (
    <div className='container detail'>
        <h1>{det.title}</h1>
        <p>{det.descrip}</p>
        {det.topics?<div className='topic'><h3>Topics</h3>{det.topics.map(data => <p>{data}</p>)}</div> :null}
        <div className="rules">
        <h3>Instructions and Rules</h3>
        {det.rules.map(data => <p>{data}</p>) }
        </div>
        {det.absFormat?<div className='abstra'><h3>Abstraction Format</h3>{det.absFormat.map(data => <p>{data}</p>)}</div> :null}
        {det.paperFormat?<div className='paper'><h3>Paper Format</h3>{det.paperFormat.map(data => <p>{data}</p>)}</div> :null}
        {det.contact?<div className='contact'><h3>Furthur Details Contact</h3>{det.contact.map(data => <p>{data}</p>)}</div> :null}
        {det.importDates?<div className='import'><h3>Important Dates</h3><p>{det.importDates}</p></div> :null}
    </div>
  )
}

export default Detail