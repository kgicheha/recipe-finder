import React from 'react'
import { v4 as uuidv4 } from 'uuid';

function ShoppingList({ shoppingList }) {
  const shoppingItems = shoppingList.map((item) => (
    <h3 key={uuidv4()}>{item}</h3>
  ))
  return (
  <div className="shopContainer" id="shoppingItems">
    {shoppingItems}
  </div>
)
}

export default ShoppingList