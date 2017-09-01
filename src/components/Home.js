import React from 'react';
import Header from './Header.js';
import nasa from '../nasa.png';


export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className='container'>
          <section className='description'>
            <h1>NASA API Search Website</h1>
            <p><img className='nasa-img' src={nasa} alt='nasa' />Welcome to my NASA API search website. NASA provides several API's to share their data with the world. The links above will take you to some of the API's which have some search functionality.</p>
            <ul>
              <li><h3>APOD - Astronomy Picture of the Day</h3><p>Allows you to pick any date and see a picture and description for that day.</p></li>
              <li><h3>EPIC</h3><p>The Earth Polychromatic Imaging Camera provides several beautiful images of the Earth throught the day.</p></li>
            </ul>
          </section>
        </div>
      </div>
    )
  }
}
