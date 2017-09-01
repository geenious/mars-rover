import React from 'react';
import Header from './Header.js';
import GetImageButton from './GetImageButton.js';
import EPICdisplay from './EPICdisplay.js';

const API_KEY = '1xAB5UJLJvfDp6oGygmwpNXIFfIeBUBBCULrrGsv';

export default class EPIC extends React.Component {

  constructor() {
    super();

    this.state = {
      date: ''
    }
    this.handleDate = this.handleDate.bind(this);
  }

  fetchEPIC() {
    let imgUrl = `https://api.nasa.gov/EPIC/api/natural/date/${this.state.date}?api_key=${API_KEY}`;
    fetch(imgUrl)
      .then((response) => {
        return response.json()
      })
      .then((results) => {
        this.setState({
          results: results
        });
      })
  }

  handleDate(evt) {
    this.setState({
      date: evt.target.value
    });
  }

  render() {
    return (
      <div>
        <Header />
        <section className='container'>
          <form className='form'>
            <label htmlFor='date'>Date:</label>
            <input type='date' onChange={this.handleDate} value={this.state.date} />
          </form>
          <GetImageButton clickButton={() => this.fetchEPIC()} />
        </section>
        <section>
          <EPICdisplay photos={this.state.results} date={this.state.date} />
        </section>
      </div>
    )
  }
}
