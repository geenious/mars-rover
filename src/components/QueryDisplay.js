import React from 'react';

export default function QueryDisplay(props) {
  console.log('props', props);
  if (props.images === undefined) {
    return <div></div>
  } else {
    return (
      <div className='photos'>
        {props.images.map((picture, i) => {
          return (
            <div className='image' key={i}>
              {picture.links.map((image, i) => {
                return <img src={image.href} alt='Space!' key={i}/>
              })}
            </div>
          )
        })}
      </div>
    )
  }
}
