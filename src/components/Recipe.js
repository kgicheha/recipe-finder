import React, { useState } from 'react'
import AddToFavorites from './AddToFavorites'
import RecipeDetails from './RecipeDetails'

function Recipes({ recipe }) {

  const {id, title, image, usedIngredientCount, usedIngredients, missedIngredientCount, missedIngredients } = recipe
  const [favoriteRecipeList, setfavoriteRecipeList] = useState([])

  //  add item to the favorites section
  const favoriteRecipe = () => {
    if(!favoriteRecipeList.includes(recipe)) {
      setfavoriteRecipeList([...favoriteRecipeList, recipe])
    }
    console.log(favoriteRecipeList)
  }

  return (
    <ul className="card">
      <h3>{title}</h3>
      <img src={image} alt={title}/>
      <AddToFavorites favoriteRecipe={favoriteRecipe}/>
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