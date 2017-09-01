import React from 'react';
import { NavLink } from 'react-router-dom';

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <div className='navbar'>
          <ul>
            <li>
              <NavLink activeClassName='selected' className='nav-link' exact to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink activeClassName='selected' className='nav-link' to='/APOD'>APOD</NavLink>
            </li>
            <li>
              <NavLink activeClassName='selected' className='nav-link' to='/epic'>EPIC</NavLink>
            </li>
            <li>
              <NavLink activeClassName='selected' className='nav-link' to='/Search'>Image Search</NavLink>
            </li>
            <li>
              <NavLink activeClassName='selected' className='nav-link' to='/Manifest'>Rover ManiFest</NavLink>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
