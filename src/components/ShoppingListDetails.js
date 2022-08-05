import React from 'react'

const ShoppingListDetails = ({missedIngredientsNames}) => {
  return (
    <div id="shoppingItems">
        <h3>{missedIngredientsNames}</h3>
    </div>
  )
}

export default ShoppingListDetails
