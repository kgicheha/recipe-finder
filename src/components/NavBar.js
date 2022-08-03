import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <div>
      <ul>
        <p>
          <NavLink to="/">Home</NavLink>
        </p>
        <p>
          <NavLink to="/favorites">Favorites</NavLink>
        </p>
        <p>
          <NavLink to="/shoppinglist">Shopping List</NavLink>
        </p>
      </ul>
    </div>
  )
}

export default NavBar