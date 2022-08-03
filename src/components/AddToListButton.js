import React, { useEffect, useState } from 'react'

function AddToListButton({ ingredientForButton, addToShoppingList }) {
  const [isAddedToList, setIsAddedToList] = useState(false);

  function handleAddToListClick(event) { 
    setIsAddedToList((isAddedToList) => (!isAddedToList));
    addToShoppingList(event.currentTarget.value); 
    console.log(event.currentTarget.value);
  }

  useEffect(() => {
    console.log(isAddedToList)
  }, [isAddedToList])
  
  return (
    <button value={ingredientForButton} onClick={handleAddToListClick}>
      {isAddedToList ? "Remove From List" : "Add to List"}
    </button>
  )
}

export default AddToListButton