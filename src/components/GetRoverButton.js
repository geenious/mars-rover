import React from 'react';

export default function GetRoverButton(props) {
  return (
    <div className='divbtn'>
      <button className='btn' onClick={props.clickButton}>Get Manifest</button>
    </div>
  )
}
