import React from 'react';

const API_KEY = '1xAB5UJLJvfDp6oGygmwpNXIFfIeBUBBCULrrGsv';

export default function EPICdisplay(props) {

  let date = props.date.replace('-', '/');
  let newDate = date.replace('-', '/');

  if (props.photos === undefined) {
    return (
      <div></div>
    )
  } else {
    return (
      <div className='photos'>
        {props.photos.map((image, i) => {
          console.log('image', image.image);
          return (
            <div className='image' key={i}>
              <img src={`https://api.nasa.gov/EPIC/archive/enhanced/${newDate}/png/${image.image}.png?api_key=${API_KEY}`} alt='Space!'/>
            </div>
          )
        })}
      </div>
    )
  }
}
