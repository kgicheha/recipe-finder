import React, { useState, useEffect } from 'react'
import RecipeDetails from './RecipeDetails'

function Recipe({ recipe, addToFavoritesList, addToShoppingList  }) {
  const {id, title, image, usedIngredientCount, usedIngredients, missedIngredientCount, missedIngredients } = recipe;
  const [isFavorite, setIsFavorite] = useState(false);

  function onFavoriteClick() {
    //CREATE POST ELEMENT
    setIsFavorite((isFavorite) => (!isFavorite));

    fetch(`http://localhost:6001/favorites`,{
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(recipe)
    })
      .then(resp => resp.json())
      .then(addToFavoritesList(recipe))
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

