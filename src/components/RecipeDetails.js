import React, {useState, useEffect } from 'react'


function RecipeDetails({ recipe, usedIngredientCount,usedIngredients, missedIngredientCount, missedIngredients, addToShoppingList, removeFromShoppingList}) {

    const [showDetails, setShowDetails] = useState(false);
    const [isAddedToList, setIsAddedToList] = useState(false);

    function handleDetailsOnClick() {
      setShowDetails((showDetails) => showDetails = !showDetails )
    }

    function handleAddToListClick() {
      setIsAddedToList((isAddedToList) => (!isAddedToList))
    }

    useEffect(()=>{
      if(isAddedToList ===true) {
        fetch(`http://localhost:6001/shoppinglist`,{
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify(recipe)
        })
        .then(resp => resp.json())
        .then(addToShoppingList(recipe))

      }
      else if (isAddedToList ===false) {

          fetch(`http://localhost:6001/shoppinglist/${recipe.id}`, {
            method: "DELETE"
            })
            .then(resp =>resp.json())
            .then(removeFromShoppingList(recipe.id))
      }
    },
    [isAddedToList]
    )


      return (
        <div>
          <button onClick={handleDetailsOnClick}>Ingredients</button>
          { showDetails ?
          <>
          <p>Ingredients: Have {usedIngredientCount} Missing: {missedIngredientCount}</p>
            <>
              { usedIngredients.map((usedIngredient) => (
                <li key={usedIngredient.id}>
                  <span>
                    {usedIngredient.name}
                  </span>
                </li>
              ))
              }
              <button  onClick={handleAddToListClick}>
      {isAddedToList ? "Remove All From List" : "Add All to List"}
    </button>
              { missedIngredients.map((missedIngredient) => (
              <li key={missedIngredient.id}>
                <span>{missedIngredient.name}</span>
              </li>
              ))
              }
          </>
            </>
          :
              null
          }
        </div>
      )
        }
export default RecipeDetails;