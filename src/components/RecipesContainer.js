import React from 'react';
import Recipe from './Recipe';

function RecipesContainer({ recipes }) {
  return (
    <div>
    {
      recipes.map((recipe) => (
        <Recipe 
          key={recipe.id}
          recipe={recipe}
        /> 
      ))
    }
    </div>
  )
}

export default RecipesContainer