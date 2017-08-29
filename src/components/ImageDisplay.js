import React from 'react';

export default function ImageDisplay(props) {

  let photos = props.photos;
  console.log('images', photos);

  return (
    <div>
      {photos.map((image) => {
        return (
          <img src={image.img_src} key={image.id} alt='Space!'/>
        )
      })}
    </div>
  )
}
