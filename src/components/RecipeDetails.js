import React, {useState} from 'react'

function RecipeDetails({usedIngredientCount, usedIngredients, missedIngredientCount, missedIngredients}) {
    const [inList, setInList] = useState(false);
    const [showDetails, setShowDetails] = useState(false)

    function handleList() {
        setInList((inList) => inList = !inList);
      }

      const handleDetailsOnClick = () => {
        setShowDetails((showDetails) => showDetails = !showDetails )
      }

  return (
    <div>
          <button onClick={handleDetailsOnClick}>Ingredients</button>
          {showDetails ?
      <div>
        <p>Ingredients: Currently {usedIngredientCount} Missing Ingredients: {missedIngredientCount}</p>
            <ul>{usedIngredients.map((usedIngredient) => (
                  <ul key={usedIngredient.id}> 
                  {usedIngredient.name}
                  </ul>
                ))}{missedIngredients.map((missedIngredient) => (
                    <ul>
                      <span>{missedIngredient.name}</span>
                      <button className="add" onClick={handleList}>{inList ? "Remove From List" : "Add To List"}</button>
                    </ul>
        ))}
            </ul>
      </div>
        : null
        }
    </div>
  )
}

export default RecipeDetails