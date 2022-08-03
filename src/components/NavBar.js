import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <div>
        <h1>
          <NavLink to="/">Home</NavLink>
        </h1>
        <h1>
          <NavLink to="/favorites">Favorites</NavLink>
        </h1>
        <h1>
          <NavLink to="/shoppinglist">Shopping List</NavLink>
        </h1>
    </div>
  )
}

export default NavBar