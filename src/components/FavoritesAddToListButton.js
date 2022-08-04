import React, { useEffect, useState } from 'react'

function FavoritesAddToListButton({ ingredientForButton, addToShoppingList }) {
    const [isAddedToList, setIsAddedToList] = useState(false);

    function handleAddToListClick(event) {
      setIsAddedToList((isAddedToList) => (!isAddedToList));
      addToShoppingList(event.currentTarget.value);
      console.log(event.currentTarget.value);

    }
    return (
        <button value={ingredientForButton} onClick={handleAddToListClick}>
        {isAddedToList ? "Remove From List" : "Add to List"}
        </button>
  )
}

export default FavoritesAddToListButton