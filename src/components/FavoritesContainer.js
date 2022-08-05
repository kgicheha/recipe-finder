import React from 'react'
import FavoritesCard from './FavoritesCard'

function FavoritesContainer ({ removeFromShoppingList, favoritesList, removeFromFavoritesList, addToShoppingList }) {

  const favoritesItems = favoritesList.map((recipe) => (
    <FavoritesCard
      recipe={recipe}
      removeFromFavoritesList={removeFromFavoritesList}
      addToShoppingList={addToShoppingList} 
      removeFromShoppingList={removeFromShoppingList}
    />
  ))

  return (
    <div className="favorites">
      {favoritesItems}
    </div>
  )
}

export default FavoritesContainer