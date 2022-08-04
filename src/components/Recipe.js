import React, { useState } from 'react'
import RecipeDetails from './RecipeDetails'

function Recipe({ recipe, addToFavoritesList, addToShoppingList  }) {
  const {id, title, image, usedIngredientCount, usedIngredients, missedIngredientCount, missedIngredients } = recipe;
  const [isFavorite, setIsFavorite] = useState(false);

  function onFavoriteClick() {
    setIsFavorite(!isFavorite); 
    if (isFavorite === true) {
      addToFavoritesList(recipe);
    } 
  }

  return (
    <ul className="card">
      <h3>{title}</h3>
      <img src={image} alt={title}/>
      <RecipeDetails
        key={id}
        usedIngredientCount ={usedIngredientCount}
        usedIngredients= {usedIngredients}
        missedIngredientCount ={missedIngredientCount}
        missedIngredients= {missedIngredients}
        addToShoppingList= {addToShoppingList}
      />
      {isFavorite ? (
          <button 
          onClick = {onFavoriteClick} 
          className="emoji-button favorite active">★</button>
        ) : (
          <button 
          onClick = {onFavoriteClick} 
          className="emoji-button favorite">☆</button>
      )}
    </ul>
  )
}

export default Recipe;

