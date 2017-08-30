import React from 'react';
import GetImageButton from './GetImageButton.js';
import ImageDisplay from './ImageDisplay.js';
import Header from './Header.js';

const API_KEY = '1xAB5UJLJvfDp6oGygmwpNXIFfIeBUBBCULrrGsv';

export default class GetImageForm extends React.Component {

  constructor() {
    super();

    this.state = {
      camera: 'fhaz',
      rover: 'Curiosity',
      sol: 1000,
      results: []
    }

    this.handleRover = this.handleRover.bind(this);
    this.handleCamera = this.handleCamera.bind(this);
    this.handleSol = this.handleSol.bind(this);
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

    let imageUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rove}/photos?sol=${num}&camera=${cam}&api_key=${API_KEY}`;

    fetch(imageUrl)
      .then((response) => {
        return response.json()
      })
      .then((results) => {
        this.setState({
          results: results.photos
        });
      });
  }

  handleRover(evt) {
    this.setState({
      rover: evt.target.value
    });
  }

  handleCamera(evt) {
    this.setState({
      camera: evt.target.value
    });
  }

  handleSol(evt) {
    this.setState({
      sol: evt.target.value
    });
  }

  render() {
    return (
      <div>
        <Header />
        <section className='container'>
          <form className='form'>
            <label htmlFor="rover">Rover:</label>
            <select onChange={this.handleRover} id="rover" value={this.state.rover}>
              <option value="Curiosity">Curiosity</option>
              <option value="Opportunity">Opportunity</option>
              <option value="Spirit">Spirt</option>
            </select>
            <label htmlFor="camera">Camera Type:</label>
            <select onChange={this.handleCamera} id="rover" value={this.state.camera}>
              <option value="fhaz">FHAZ (Front Hazard)</option>
              <option value="rhaz">RHAZ (Rear Hazard)</option>
              <option value="navcam">NAVCAM (Navigation Cam)</option>
            </select>
            <label htmlFor="sol">Martian Sol(1000-2000):</label>
            <input type="number" onChange={this.handleSol} max="2000" min="1000" value={this.state.sol}/>
          </form>
          <GetImageButton clickButton={() => this.fetchRoverImage()}/>
        </section>
        <section className=''>
          <ImageDisplay photos={this.state.results}/>
        </section>
      </div>
    )
  }
}
