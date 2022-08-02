import React, { useState } from 'react'
import Favorites from './Favorites'
import RecipeDetails from './RecipeDetails'

function Recipe({ recipe }) {

  const {id, title, image, usedIngredientCount, usedIngredients, missedIngredientCount, missedIngredients } = recipe
  const [isFavorite, setIsFavorite] = useState(false);
 
  // function onFavoriteClick() {
  //   setIsFavorite((isfavorite) => (!isfavorite));
  //   addToFavoritesList(recipe);
  // }

  return (
    <ul className="card">
      <h3>{title}</h3>
      <img src={image} alt={title}/>
      {/* <Favorites
        recipe={recipe}
        addtoFavoritesList={addtoFavoritesList}
      /> */}
      <RecipeDetails
        key={id}
        usedIngredientCount ={usedIngredientCount}
        usedIngredients= {usedIngredients}
        missedIngredientCount ={missedIngredientCount}
        missedIngredients= {missedIngredients}
      />
      {isFavorite ? (
          <button 
          // onClick = {onFavoriteClick} 
          className="emoji-button favorite active">★</button>
        ) : (
          <button 
          // onClick = {onFavoriteClick} 
          className="emoji-button favorite">☆</button>
      )}
    </ul>
  )
}

export default Recipe

