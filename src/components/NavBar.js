import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <div id="navbar">
      {/* <ul> */}
        <img alt="logo" id="forkit" src="./fork_it.jpg" />
        <img alt="title" id="title" src="./flamingtext__27843214885347876.gif" />
        <span>
          <NavLink id="home" to="/">Home</NavLink>
        </span>
        
        <span>
          <NavLink id="fave" to="/favorites">Favorites</NavLink>
        </span>
        <span>
          <NavLink id="list" to="/shoppinglist">Shopping List</NavLink>
        </span>
      {/* </ul> */}
    </div>
  )
}

export default NavBar