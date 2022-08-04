import React, {useState} from 'react'

function RecipeDetails({usedIngredientCount,usedIngredients, missedIngredientCount, missedIngredients, addToShoppingList}) {

    const [inList, setInList] = useState(false);
    const [showDetails, setShowDetails] = useState(false)

    function handleList(event) {
      console.log("RecipeDetails")
        setInList((inList) => inList = !inList);
        addToShoppingList(event.target.name);
      }

      const handleDetailsOnClick = () => {
        setShowDetails((showDetails) => showDetails = !showDetails )
      }
      
      return (
        <div>
            <button onClick={handleDetailsOnClick}>Ingredients</button>
          { showDetails ?
            <ul>
              <span>Ingredients: Have {usedIngredientCount} Missing: {missedIngredientCount}</span>
                {usedIngredients.map((usedIngredient) => (
                  <ul>
                    <span key={usedIngredient.id}>
                      {usedIngredient.name}
                    </span>
                  </ul>
                ))
                }
                {missedIngredients.map((missedIngredient) => (
                <ul>
                  <span key={missedIngredient.id}>
                    <span>{missedIngredient.name}</span>
                    <button name={missedIngredient.name} className="add" onClick={handleList}>
                      {inList ? "Remove From List" : "Add To List"}
                    </button>
                  </span>
                </ul>
                ))
                }
            </ul>
          :
              null
          }
        </div>
      )
        }
export default RecipeDetails;