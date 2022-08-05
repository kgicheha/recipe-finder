import React, {useState} from 'react'
import FavoritesAddToListButton from './FavoritesAddToListButton'

function FavoritesDetails({usedIngredientCount,usedIngredients, missedIngredientCount, missedIngredients, addToShoppingList}) {
    const [showDetails, setShowDetails] = useState(false);

    function handleDetailsOnClick() {
        setShowDetails((showDetails) => showDetails = !showDetails )
      }
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
              { missedIngredients.map((missedIngredient) => (
              <li key={missedIngredient.id}>
                <span id="ing">{missedIngredient.name}</span>
                  <FavoritesAddToListButton
                    ingredientForButton={missedIngredient.name}
                    addToShoppingList={addToShoppingList}
                  />
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

export default FavoritesDetails