import React, { useState } from 'react'

function ShoppingListItem({ missedIngredient }) {
  const [isInCart, setIsInCart] = useState(false);

  function handleAddToCartClick() {
    setIsInCart((isInCart) => !isInCart);
  }

  return (
    <li className={isInCart ? "in-cart" : ""}>
      <span className="list-span">{missedIngredient.name}</span> 
      <span className="aisle">Aisle: {missedIngredient.aisle}</span> 
      <button
        className={isInCart ? "remove" : "add"}
        onClick={handleAddToCartClick}
      >
        {isInCart ? "Remove From" : "Add to"} Cart
      </button>
    </li>
  )
}

export default ShoppingListItem