import React from 'react';

export default function ImageDisplay(props) {

  let photos = props.photos;

  return (
    <div className='photos'>
      {photos.map((image) => {
        return (
          <div className='image' key={image.id}>
            <img src={image.img_src} alt='Space!'/>
          </div>
        )
      })}
    </div>
  )
}
