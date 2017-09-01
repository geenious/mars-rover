import React from 'react';
import Header from './Header.js';
import GetImageButton from './GetImageButton.js';
import APODdisplay from './APODdisplay.js';

const API_KEY = '1xAB5UJLJvfDp6oGygmwpNXIFfIeBUBBCULrrGsv';

export default class APOD extends React.Component {

  constructor() {
    super();

    this.state = {
      date: '',
      results: []
    }
    this.handleDate = this.handleDate.bind(this);
  }

  handleDate(evt) {
    this.setState({
      date: evt.target.value
    });
  }

  fetchAPOD() {
    let imgUrl = `https://api.nasa.gov/planetary/apod?date=${this.state.date}&api_key=${API_KEY}`

    fetch(imgUrl)
      .then((response) => {
        return response.json();
      })
      .then((results) => {
        this.setState({
          results: results
        });
      })
  }
  render() {
    return (
      <div>
        <Header />
        <section className='container'>
          <h1>Astronomy Picture of the Day</h1>
          <form className='form'>
            <label htmlFor='date'>Date:</label>
            <input type='date' onChange={this.handleDate} value={this.state.date} />
          </form>
          <GetImageButton clickButton={() => this.fetchAPOD()} />
        </section>
        <section>
          <APODdisplay photo={this.state.results}/>
        </section>
      </div>
    )
  }
}
