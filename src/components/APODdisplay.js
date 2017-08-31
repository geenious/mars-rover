import React from 'react';

export default function APODdisplay(props) {


  if (props.photo.length === 0) {
    return (
      <div></div>
    )
  }
  return (
    <div className='apod-photo'>
      <div className='apod-image'>
        <h3>{props.photo.title}</h3>
        <p className='date'>{props.photo.date}</p>
        <img src={props.photo.url} alt='apod' />
        <p className='explanation'>{props.photo.explanation}</p>
      </div>
    </div>
  )
}
