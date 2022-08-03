import React, { useState } from 'react'
import RecipeDetails from './RecipeDetails'

function Recipe({ recipe, addToFavoritesList }) {

  const {id, title, image, usedIngredientCount, usedIngredients, missedIngredientCount, missedIngredients } = recipe;
  const [isFavorite, setIsFavorite] = useState(false);

  function onFavoriteClick() {
    setIsFavorite(!isFavorite); 
    if (isFavorite === true) {
      console.log("in recipe");
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

export default Recipe

