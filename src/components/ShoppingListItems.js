import React from 'react'
import ShoppingListItem from './ShoppingListItem'

function ShoppingListItems({recipe}) {

    const {id, missedIngredients} = recipe

    const missedIngredientsList = missedIngredients.map((missedIngredient) => (
      <ShoppingListItem 
        key={id}
        missedIngredient={missedIngredient} 
      />
    ))

  return (
   <div className='card'>
      <h2>For Recipe: {recipe.title}</h2>
      <ul className="items">
        {missedIngredientsList}
      </ul>
   </div>
  )
}

export default ShoppingListItems
