import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Nav extends Component {
  render() {
    return (
      <ul classname='nav'>
        <li>
          <NavLink activeClassName='active' to='/'>
            home
          </NavLink>
        </li>
      </ul>
    )
  }
}

export default Nav;
