import React from 'react'
import ShoppingListItems from './ShoppingListItems';

function ShoppingListContainer({ shoppingList }) {

  const shoppingListItems = shoppingList.map((recipe) => (
    <ShoppingListItems
      key={recipe.id}
      recipe={recipe}
    />
  ))

  return (
  <div> 
      {shoppingListItems}
  </div>
)
}

export default ShoppingListContainer;
