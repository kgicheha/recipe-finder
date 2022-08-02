import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/">HOME</NavLink>
        </li>
        <li>
          <NavLink to="/favorites">FAVORITES</NavLink>
        </li>
        <li>
          <NavLink to="/shoppinglist">SHOPPING LIST</NavLink>
        </li>
      </ul>

    </div>
  )
}

export default NavBar