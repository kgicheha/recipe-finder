import React from 'react'

const ShoppingListDetails = ({missedIngredientsNames}) => {
  return (
    <div id="groceryList">
        <ol>{missedIngredientsNames}</ol>
    </div>
  )
}

export default ShoppingListDetails
