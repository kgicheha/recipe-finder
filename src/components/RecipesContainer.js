import React from 'react';
import Recipe from './Recipe';

function RecipesContainer({ recipes, addToShoppingList }) {
  return (
    <div>
    {
      recipes.map((recipe) => (
        <Recipe
          key={recipe.id}
          recipe={recipe}
          addToShoppingList={addToShoppingList}
        />
      ))
    }
    </div>
  )
}

export default RecipesContainer