import React, { useState } from 'react'
import FavoriteButton from './FavoriteButton'
import RecipeDetails from './RecipeDetails'

function Recipes({ recipe }) {


    const {id, title, image, usedIngredientCount, usedIngredients, missedIngredientCount, missedIngredients } = recipe
  const [favoriteRecipeList, setfavoriteRecipeList] = useState([])

   //add item to the favorites section
  const favoriteRecipe = () => {
    if(!recipe.includes(recipe)) {
      setfavoriteRecipeList([...favoriteRecipeList, recipe])
    }

    console.log(favoriteRecipeList)
  }

  return (
    <ul className="card">
      <h3>{title}</h3>
      <img src={image} alt={title}/>
      <FavoriteButton favoriteRecipe={favoriteRecipe}/>
      <RecipeDetails
        key={id}
        usedIngredientCount ={usedIngredientCount}
        usedIngredients= {usedIngredients}
        missedIngredientCount ={missedIngredientCount}
        missedIngredients= {missedIngredients}
      />
    </ul>
  )
}

export default Recipes