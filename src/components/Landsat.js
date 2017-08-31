import React from 'react';
import Header from './Header.js';
import GetLandsatImage from './GetLandsatImage.js';
import LandsatDisplay from './LandsatDisplay.js';

const API_KEY = '1xAB5UJLJvfDp6oGygmwpNXIFfIeBUBBCULrrGsv';

export default class Landsat extends React.Component {

  constructor() {
    super();

    this.state = {
      lon: '',
      lat: '',
      results: []
    }

    this.handleLon = this.handleLon.bind(this);
    this.handleLat = this.handleLat.bind(this);
  }

  fetchLandsatImage() {


    let imageUrl = `https://api.nasa.gov/planetary/earth/imagery?lon=${this.state.lon}&lat=${this.state.lat}&begin=2017-07-01&end=today&cloud_score=True&api_key=${API_KEY}`

    fetch(imageUrl)
      .then((response) => {
        return response.json();
      })
      .then((results) => {
        this.setState({
          results: results
        })
      });
  }

  handleLon(evt) {
    this.setState({
      lon: evt.target.value
    })
  }

  handleLat(evt) {
    this.setState({
      lat: evt.target.value
    })
  }

  render() {
    return (
      <div>
        <Header />
        <section className='container'>
          <form className='form'>
            <label htmlFor='lon'>Longitude:</label>
            <input type='number' onChange={this.handleLon} value={this.state.lon} />
            <label htmlFor='lat'>Latitude:</label>
            <input type='number' onChange={this.handleLat} value={this.state.lat} />
          </form>
          <GetLandsatImage clickButton={() => this.fetchLandsatImage()} />
        </section>
        <section className=''>
          <LandsatDisplay photos={this.state.results} />
        </section>
      </div>
    )
  }
}
