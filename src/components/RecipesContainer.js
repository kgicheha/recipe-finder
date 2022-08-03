import React from 'react';
import Recipe from './Recipe';

function RecipesContainer({ recipes, addToFavoritesList, addToShoppingList }) {

  return (
    <div>
    {
      recipes.map((recipe) => (
        <Recipe
          key={recipe.id}
          recipe={recipe}
          addToFavoritesList={addToFavoritesList}
          addToShoppingList={addToShoppingList}
        />
      ))
    }
    </div>
  )
}

export default RecipesContainer