import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Header extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <section className='header-component'>
        <nav  className='nav'>
          <ul>
            <li>
              <NavLink exact activeClassName='active' to='/'>
                Home
              </NavLink>
              {" "}
              <NavLink activeClassName='active' to='/about'>
                About
              </NavLink>
              {" "}
              <NavLink activeClassName='active' to='/demo'>
                Demo
              </NavLink>
            </li>
          </ul>
        </nav>
      </section>
    )
  }
}

export default Header;
