import React from 'react';
import GetImageButton from './GetImageButton.js';
import ImageDisplay from './ImageDisplay.js';

const API_KEY = '1xAB5UJLJvfDp6oGygmwpNXIFfIeBUBBCULrrGsv';

export default class GetImageForm extends React.Component {

  constructor() {
    super();

    this.state = {
      camera: '',
      rover: '',
      num: ''
    }
  }

  fetchRoverImage() {

    this.setState({
      camera: this.state.camera,
      rover: this.state.rover,
      sol: this.state.sol
    });
    let cam = this.state.camera;
    let rove = this.state.rover;
    let num = this.state.sol;

    let imageUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&api_key=${API_KEY}`;

    fetch(imageUrl)
      .then((response) => {
        return response.json()
      })
      .then((results) => {
        console.log('results', results.photos);
      });
  }

  render() {
    return (
      <div className='container'>
        <form>
          <label htmlFor="rover">Rover</label>
          <select onChange={this.handleRover} id="rover" value={this.state.value}>
            <option value="Curiosity">Curiosity</option>
            <option value="Opportunity">Opportunity</option>
            <option value="Spirit">Spirt</option>
          </select>
          <label htmlFor="camera">Camera Type</label>
          <select onChange={this.handleCamera} id="rover" value={this.state.value}>
            <option value="fhaz">FHAZ (Front Hazard)</option>
            <option value="rhaz">RHAZ (Rear Hazard)</option>
            <option value="navcam">NAVCAM (Navigation Cam)</option>
          </select>
          <label htmlFor="sol">Martian Sol: 1000-2000</label>
          <input type="number" onChange={this.handleSol} max="2000" min="1000" value={this.state.value}/>
        </form>
        <GetImageButton clickButton={() => this.fetchRoverImage()}/>
        <ImageDisplay />
      </div>
    )
  }
}
