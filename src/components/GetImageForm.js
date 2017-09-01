import React from 'react';
import GetImageButton from './GetImageButton.js';
import Header from './Header.js';
import QueryDisplay from './QueryDisplay.js';

export default class GetImageForm extends React.Component {

  constructor() {
    super();

    this.state = {
      query: ''
    }
    this.handleQuery = this.handleQuery.bind(this);
  }

  handleQuery(evt) {
    this.setState({
      query: evt.target.value
    });
  }

  fetchImage() {

    let imageUrl = `https://images-api.nasa.gov/search?q=${this.state.query}`;

    fetch(imageUrl)
      .then((response) => {
        return response.json()
      })
      .then((results) => {
        this.setState({
          results: results.collection.items
        });
      });
  }

  render() {
    console.log('state', this.state);
    return (
      <div>
        <Header />
        <section className='container'>
          <form className='form'>
            <label htmlFor="query">Query:</label>
            <input type="text" onChange={this.handleQuery} value={this.state.query}/>
          </form>
          <GetImageButton clickButton={() => this.fetchImage()}/>
        </section>
        <section className='container'>
          <QueryDisplay images={this.state.results}/>
        </section>
      </div>
    )
  }
}
