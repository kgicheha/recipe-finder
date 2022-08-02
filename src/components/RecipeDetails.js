import React, {useState} from 'react'

function RecipeDetails({usedIngredientCount,usedIngredients, missedIngredientCount, missedIngredients}) {
    const [inList, setInList] = useState(false);
    const [showDetails, setShowDetails] = useState(false)

    function handleList() {
        setInList((inList) => inList = !inList);
      }

      //show Recipe details onClick
      const handleDetailsOnClick = () => {
        setShowDetails((showDetails) => showDetails = !showDetails )
      }
  return (
    <>
    <button onClick={handleDetailsOnClick}>Ingredients</button>
    {showDetails ?
    <>
    <p>Ingredients: Have {usedIngredientCount} Missing: {missedIngredientCount}</p>
        <ul>{usedIngredients.map((usedIngredient) => (
          <ul key={usedIngredient.id}>{usedIngredient.name}
          </ul>))}{missedIngredients.map((missedIngredient) => (
          <ul>
            <span>{missedIngredient.name}</span>
            <button className="add" onClick={handleList}>{inList ? "Remove From List" : "Add To List"}</button>
          </ul>
        ))}</ul>
    </>
    : null
    }
    </>
  )
}

export default RecipeDetails