import React from 'react'
import ShoppingListDetails from './ShoppingListDetails'

function ShoppingListCard({recipe}) {

    const {id, missedIngredients} = recipe

    const missedIngredientsNames = missedIngredients.map((missedIngredient) => missedIngredient.name)

  return (
   <div>
   <h2>Shopping List</h2>
    <ShoppingListDetails
        key= {id}
        missedIngredientsNames={missedIngredientsNames}
    />
   </div>
  )
}

export default ShoppingListCard