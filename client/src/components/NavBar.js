import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class NavBar extends Component {
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
            </li>
          </ul>
        </nav>
      </section>
    )
  }
}

export default NavBar;
