import React, { useState } from 'react'

function Favorites({ recipe, addToFavoritesList }) {
  const {title, image} = recipe;

  const [favoritesList, setFavoritesList] = useState([]);

  function addToFavoritesList(recipe) {
    if(!favoritesList.includes(recipe)) {
      setFavoritesList([...favoritesList, recipe])
    }
  }

  console.log(favoritesList)

  return (
    <div className="favorites">
      <ul className="card">
      <h3>{title}</h3>
      <img src={image} alt={title}/> 
      </ul>
    </div>
  )
}

export default Favorites