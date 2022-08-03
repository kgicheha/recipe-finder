import React from 'react'

function Favorites({ favoritesList }) {
  //const {title, image} = favoritesList;

  console.log(favoritesList);

  const favoritesItems = favoritesList.map((recipe) => (
    <ul className="card">
      <h3>{recipe.title}</h3>
      <img src={recipe.image} alt={recipe.title}/> 
      </ul>
  ))

  return (
    <div className="favorites">
      {favoritesItems}
    </div>
  )
}

export default Favorites