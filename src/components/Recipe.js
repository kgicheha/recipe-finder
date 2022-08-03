import React, { useState, useEffect } from 'react'
import RecipeDetails from './RecipeDetails'

function Recipe({ recipe, addToFavoritesList, addToShoppingList  }) {
  const {id, title, image, usedIngredientCount, usedIngredients, missedIngredientCount, missedIngredients } = recipe;
  const [isFavorite, setIsFavorite] = useState(false);

  function onFavoriteClick() {
    console.log("hi");
    setIsFavorite((isFavorite) => (!isFavorite));

    console.log(recipe);
    addToFavoritesList(recipe);
  } 

  useEffect(() => {
    console.log(isFavorite);
  }, [isFavorite]);

  return (
    <div className="card">
      <h3>{title}</h3>
      <img src={image} alt={title}/>
      <ul className="recipeDetails">
        <RecipeDetails
          key={id}
          usedIngredientCount={usedIngredientCount}
          usedIngredients={usedIngredients}
          missedIngredientCount={missedIngredientCount}
          missedIngredients={missedIngredients}
          addToShoppingList={addToShoppingList}
        />
      </ul>
      {isFavorite ? (
          <button 
          onClick = {onFavoriteClick} 
          className="emoji-button favorite active">★</button>
        ) : (
          <button 
          onClick = {onFavoriteClick} 
          className="emoji-button favorite">☆</button>
      )}
    </div>
  )
}

export default Recipe

