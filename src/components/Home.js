import React from 'react';
import Header from './Header.js';
import nasa from '../nasa.png';


export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className='home-container'>
          <section className='description'>
            <h1>NASA API Search Website<img className='nasa-img' src={nasa} alt='nasa' /></h1>
            <p>Welcome to my NASA API search website. NASA provides several API's to share their data with the world. The links above will take you to some of the API's which have some search functionality.</p>
            <ul>
              <li>
                <h3>APOD - Astronomy Picture of the Day</h3>
                <p>Allows you to pick any date and see a picture and description for that day.</p>
              </li>
              <li>
                <h3>EPIC</h3>
                <p>The Earth Polychromatic Imaging Camera provides several beautiful images of the Earth throughout the day.</p>
              </li>
              <li>
                <h3>Image Search</h3>
                <p>This section will take a keyword and return images that match.</p>
              </li>
              <li>
                <h3>Rover Manifest</h3>
                <p>Choose a Mars rover and see a manifest for every day that rover sent back images. Clickable links will display photos from the selected rover.</p>
              </li>
            </ul>
          </section>
        </div>
      </div>
    )
  }
}
