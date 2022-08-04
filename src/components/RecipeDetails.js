import React, {useState} from 'react'
import AddToListButton from './AddToListButton';

function RecipeDetails({usedIngredientCount,usedIngredients, missedIngredientCount, missedIngredients, addToShoppingList}) {

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
                <span>{missedIngredient.name}</span>
                  <AddToListButton
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
export default RecipeDetails;