import React, { Component } from 'react';
import '../styles/App.css';
import Header from './Header.js';

class App extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default App;
