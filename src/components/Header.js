import React from 'react';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <div className='navbar'>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/Search'>Search</Link>
            </li>
            <li>
              <Link to='/Manifest'>ManiFest</Link>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
