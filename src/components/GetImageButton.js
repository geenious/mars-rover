import React from 'react';

export default function GetImageButton(props) {
  return (
    <div className='divbtn'>
      <button className='btn' onClick={props.clickButton}>Get Images</button>
    </div>
  )
}
