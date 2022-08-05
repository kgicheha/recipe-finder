import React from 'react';
import Recipe from './Recipe';

function RecipesContainer({ recipes, addToFavoritesList, addToShoppingList, removeFromFavoritesList, removeFromShoppingList}) {

  return (
    <div>
    {
      recipes.map((recipe) => (
        <Recipe
          key={recipe.id}
          recipe={recipe}
          addToFavoritesList={addToFavoritesList}
          addToShoppingList={addToShoppingList}
          removeFromFavoritesList={removeFromFavoritesList}
          removeFromShoppingList={removeFromShoppingList}

        />
      ))
    }
    </div>
  )
}

export default RecipesContainer