import React from 'react'
import Header from './Header.js';
import GetRoverButton from './GetRoverButton.js';
import ManifestDisplay from './ManifestDisplay.js';

const API_KEY = '1xAB5UJLJvfDp6oGygmwpNXIFfIeBUBBCULrrGsv';

export default class GetManifestForm extends React.Component {

  constructor() {
    super();

    this.state = {
      rover: 'Curiosity'
    }

    this.handleRover = this.handleRover.bind(this);
  }

  fetchRoverManifest() {

    this.setState({
      rover: this.state.rover
    });

    let rove = this.state.rover;

    let roverUrl = `https://api.nasa.gov/mars-photos/api/v1/manifests/${rove}?api_key=${API_KEY}`;

    fetch(roverUrl)
      .then((response) => {
        return response.json();
      })
      .then((results) => {
        this.setState({
          results: results.photo_manifest
        });
      });
  }

  handleRover(evt) {
    this.setState({
      rover: evt.target.value
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
          </form>
          <GetRoverButton clickButton={() => this.fetchRoverManifest()} />
        </section>
        <section>
          <ManifestDisplay manifest={this.state.results} />
        </section>
      </div>
    )
  }
}
