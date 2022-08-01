import React, { useState } from 'react'

function Recipes({ recipe }) {
  const [inCart, setInCart] = useState(false);

  function handleCart() { 
    setInCart((inCart) => (!inCart));
  } 

  return (
    <li className="card">
      <h1>{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title}/> 
      <p>Ingredients: Have {recipe.usedIngredientCount} Missing: {recipe.missedIngredientCount}</p> 
      <ul>
      {
        recipe.usedIngredients.map((usedIngredient) => (
          <li key={usedIngredient.id}>{usedIngredient.name}</li>
        ))
      } 
      {
        recipe.missedIngredients.map((missedIngredient) => (
          <li>
            <span>{missedIngredient.name}</span>
            <button className="add" onClick={handleCart}>{inCart ? "Remove From Cart" : "Add To Cart"}</button>
          </li> 
        ))
      } 
      </ul>
    </li>
  )
}

export default Recipes