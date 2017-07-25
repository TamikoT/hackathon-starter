import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../img/MUVIATO.png';

class Header extends Component {
  render() {
    return (
      <section className='header-component'>
        <div>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <nav  className='navbar navbar-inverse'>
          <ul className="nav nav-tabs">
            <li role="presentation">
              <NavLink exact activeClassName='active' to='/'>
                Home
              </NavLink>
            </li>
            <li role="presentation">
              <NavLink activeClassName='active' to='/about'>
                About
              </NavLink>
            </li>
          </ul>
        </nav>
      </section>
    )
  }
}

export default Header;
