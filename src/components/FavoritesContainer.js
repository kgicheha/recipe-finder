import React from 'react'
import FavoritesCard from './FavoritesCard'

function FavoritesContainer ({ favoritesList, removeFromFavoritesList, addToShoppingList }) {

  const favoritesItems = favoritesList.map((recipe) => (
    <FavoritesCard
      recipe={recipe}
      removeFromFavoritesList={removeFromFavoritesList}
      addToShoppingList={addToShoppingList}
    />
  ))

  return (
    <div className="favorites">
      {favoritesItems}
    </div>
  )
}

export default FavoritesContainer