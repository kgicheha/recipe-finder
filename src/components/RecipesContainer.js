import React from 'react';
import Recipe from './Recipe';

function RecipesContainer({ recipes, addToFavoritesList }) {
  return (
    <div>
    {
      recipes.map((recipe) => (
        <Recipe
          key={recipe.id}
          recipe={recipe}
          addToFavoritesList={addToFavoritesList}
        />
      ))
    }
    </div>
  )
}

export default RecipesContainer