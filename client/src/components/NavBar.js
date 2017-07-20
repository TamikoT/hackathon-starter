import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class NavBar extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <section className='nav-component'>
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

export default NavBar;
