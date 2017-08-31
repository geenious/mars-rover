import React from 'react';
import Header from './Header.js';

const API_KEY = '1xAB5UJLJvfDp6oGygmwpNXIFfIeBUBBCULrrGsv';

export default class ImageResults extends React.Component {

  constructor() {
    super();

    this.state = {
      results: []
    }
  }

  componentDidMount() {
    let imagesUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/${this.props.match.params.rover}/photos?sol=${this.props.match.params.sol}&api_key=${API_KEY}`;

    fetch(imagesUrl)
      .then((response) => {
        return response.json();
      })
      .then((results) => {
        this.setState({
            results: results.photos
        });
      });
  }

  render() {

    let photos = this.state.results;

    return (
      <div>
        <Header />
        <div className='photos'>
          {photos.map((image) => {
            return (
              <div className='image' key={image.id}>
                <img src={image.img_src} alt='Space!'/>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}
