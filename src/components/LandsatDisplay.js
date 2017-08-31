import React from 'react';

export default function LandsatDisplay(props) {

  let photos = props.photos;
  console.log(photos);
  return (
    <div className='photos'>
      <div className='image'>
        <img src={photos.url} alt='Earth!'/>
      </div>
    </div>
  )
}
