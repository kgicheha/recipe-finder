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
            {showDetails ?
        </div>
        <p>Ingredients: Have {usedIngredientCount} Missing: {missedIngredientCount}</p>
        <ul>
              { usedIngredients.map((usedIngredient) => (
              <p key={usedIngredient.id}>{usedIngredient.name}
              </p>))
              }
              { missedIngredients.map((missedIngredient) => (
              <p>
                <span>{missedIngredient.name}</span>
                <button name={missedIngredient.name} className="add" onClick={handleList}>{inList ? "Remove From List" : "Add To List"}</button>
              </p>))
            }
        </ul>
        </>
        : null
        }
        </>
      )
}

export default RecipeDetails