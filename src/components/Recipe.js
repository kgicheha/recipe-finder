import React, { useState, useEffect } from 'react'
import RecipeDetails from './RecipeDetails'

function Recipe({ recipe, addToFavoritesList, addToShoppingList, removeFromFavoritesList, removeFromShoppingList }) {
  const {id, title, image, usedIngredientCount, usedIngredients, missedIngredientCount, missedIngredients } = recipe;
  const [isFavorite, setIsFavorite] = useState(false);

  function onFavoriteClick() {
    //CREATE POST ELEMENT
    setIsFavorite((isFavorite) => (!isFavorite));
    }

   useEffect(()=>{
      if(isFavorite ===true) {
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
        } else {
          fetch(`http://localhost:6001/favorites/${id}`, {
            method: "DELETE"
          })
          .then(resp =>resp.json())
          .then(removeFromFavoritesList(id))
          }
      }, [isFavorite])

  return (
    <div className="card">
      <h3>{title}</h3>
      <img id="pic" src={image} alt={title}/>
      <ul className="recipeDetails">
        <RecipeDetails
          key={id}
          recipe={recipe}
          usedIngredientCount={usedIngredientCount}
          usedIngredients={usedIngredients}
          missedIngredientCount={missedIngredientCount}
          missedIngredients={missedIngredients}
          addToShoppingList={addToShoppingList}
          removeFromShoppingList={removeFromShoppingList}
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

export default Recipe;

